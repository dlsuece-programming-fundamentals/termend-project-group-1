// =========================
// LOGIN
// =========================
function saveName() {
  const name = document.getElementById("name").value;
  if (!name) return alert("Maglagay ng pangalan");

  localStorage.setItem("name", name);
  window.location.href = "home.html";
}

// =========================
// GREETING (HOME PAGE)
// =========================
if (document.getElementById("greeting")) {
  const name = localStorage.getItem("name") || "Vendor";
  document.getElementById("greeting").textContent = "✨ Mabuhay, " + name + "!";
}

// =========================
// CATEGORY NAVIGATION
// =========================
function goCategory(category) {
  localStorage.setItem("category", category);
  window.location.href = "category.html";
}

// =========================
// DATA (ITEM LIST)
// =========================
const data = {
  gulay: ["Sibuyas","Bawang","Kamatis","Talong","Repolyo","Patatas","Karot","Kangkong","Pechay","Ampalaya","Sitaw","Kalabasa"],
  karne: ["Manok","Baboy","Baka","Atay","Isaw","Chicken Wings","Chicken Breast","Pork Chop","Giniling"],
  isda: ["Bangus","Tilapia","Galunggong","Tulingan","Tamban","Hipon","Pusit","Alimango","Tahong"],
  staple: ["Bigas","Asukal","Harina","Mantika","Itlog","Asin","Toyo","Suka"],
  sari: ["Instant noodles","Kape","Gatas","Soft drinks","De lata","Shampoo","Sabon","Biskwit"]
};

// =========================
// LOAD CATEGORY ITEMS
// =========================
if (document.getElementById("items")) {
  const category = localStorage.getItem("category");

  document.getElementById("categoryTitle").textContent =
    category.charAt(0).toUpperCase() + category.slice(1);

  const container = document.getElementById("items");

  data[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.textContent = item;

    card.onclick = () => {
      localStorage.setItem("item", item);
      window.location.href = "item.html";
    };

    container.appendChild(card);
  });
}

// =========================
// LOAD ITEM PAGE
// =========================
if (document.getElementById("itemTitle")) {
  const item = localStorage.getItem("item");
  document.getElementById("itemTitle").textContent = item;
}

// =========================
// STORAGE
// =========================
let prices = JSON.parse(localStorage.getItem("prices")) || [];

// =========================
// ADD PRICE
// =========================
function addPrice() {
  const item = localStorage.getItem("item");
  const price = parseFloat(document.getElementById("price").value);

  if (isNaN(price)) return alert("Invalid input");

  const date = new Date().toLocaleString();

  prices.push({ item, price, date });
  localStorage.setItem("prices", JSON.stringify(prices));

  renderData();

  // 🔥 feedback animation
  const feedback = document.getElementById("feedback");
  feedback.style.animation = "none";
  feedback.offsetHeight;
  feedback.style.animation = "pop 0.3s ease";
}

// =========================
// RENDER DATA (TABLE + GRAPH + LOADING)
// =========================
function renderData() {
  const item = localStorage.getItem("item");
  const filtered = prices.filter(p => p.item === item);

  const table = document.getElementById("priceTable");
  const feedback = document.getElementById("feedback");

  // LOADING SKELETON
  table.innerHTML = `
    <tr><th>Date</th><th>Price</th></tr>
    <tr><td colspan="2"><div class="skeleton"></div></td></tr>
    <tr><td colspan="2"><div class="skeleton"></div></td></tr>
  `;

  setTimeout(() => {

    // EMPTY STATE
    if (filtered.length === 0) {
      table.innerHTML = `
        <tr><th>Date</th><th>Price</th></tr>
        <tr>
          <td colspan="2">
            <div class="empty-state">
              <div class="empty-icon">📭</div>
              <div class="empty-title">Wala pang data</div>
              <div class="empty-sub">Mag-add ng presyo para magsimula</div>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    // FEEDBACK
    const avg = filtered.reduce((a, b) => a + b.price, 0) / filtered.length;
    const latest = filtered[filtered.length - 1].price;

    let text = "";
    if (latest > avg) text = "🔴 Mahal!";
    else if (latest < avg) text = "🟢 Mura!";
    else text = "🟡 Sakto!";

    feedback.textContent = text;

    // TABLE
    table.innerHTML = `<tr><th>Date</th><th>Price</th></tr>`;

    filtered.forEach(p => {
      const row = table.insertRow();
      row.insertCell(0).innerText = p.date;
      row.insertCell(1).innerText = "₱" + p.price;
    });

    // GRAPH
    const ctx = document.getElementById("priceChart").getContext("2d");

    if (window.chart) window.chart.destroy();

    window.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: filtered.map(p => p.date),
        datasets: [{
          label: item + " Price",
          data: filtered.map(p => p.price),
          tension: 0.3
        }]
      }
    });

  }, 600);
}

// =========================
// LOAD GRAPH ON OPEN
// =========================
if (document.getElementById("priceChart")) {
  renderData();
}

// =========================
// NAVIGATION (FINAL FIX)
// =========================

// BACK (CATEGORY → HOME, ITEM → CATEGORY)
function goBack() {
  window.history.back();
}

// =========================
// ONLINE STATUS
// =========================
if (document.getElementById("status")) {
  function updateStatus() {
    document.getElementById("status").textContent =
      navigator.onLine ? "🟢 Online" : "🔴 Offline Mode";
  }

  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  updateStatus();
}

function goLogin() {
  localStorage.removeItem("name");
  window.location.href = "index.html";
}
