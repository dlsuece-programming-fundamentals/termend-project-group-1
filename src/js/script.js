// =========================
// SAVE NAME (LOGIN)
// =========================
function saveName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  window.location.href = "home.html";
}

// =========================
// GREETING
// =========================
if (document.getElementById("greeting")) {
  const name = localStorage.getItem("name") || "Vendor";
  document.getElementById("greeting").textContent = "Mabuhay, " + name + "!";
}

// =========================
// CATEGORY NAVIGATION
// =========================
function goCategory(category) {
  localStorage.setItem("category", category);
  window.location.href = "category.html";
}

// =========================
// FULL ITEM LIST (UPDATED)
// =========================
const data = {
  gulay: [
    "Sibuyas","Bawang","Kamatis","Talong","Repolyo",
    "Patatas","Karot","Kangkong","Pechay","Ampalaya",
    "Sitaw","Kalabasa"
  ],

  karne: [
    "Manok","Baboy","Baka","Atay","Isaw",
    "Chicken Wings","Chicken Breast","Pork Chop","Giniling"
  ],

  isda: [
    "Bangus","Tilapia","Galunggong","Tulingan","Tamban",
    "Hipon","Pusit","Alimango","Tahong"
  ],

  staple: [
    "Bigas","Asukal","Harina","Mantika","Itlog",
    "Asin","Toyo","Suka"
  ],

  sari: [
    "Instant noodles","Kape","Gatas","Soft drinks",
    "De lata","Shampoo","Sabon","Biskwit"
  ]
};

// =========================
// LOAD CATEGORY ITEMS
// =========================
if (document.getElementById("items")) {
  const category = localStorage.getItem("category");

  document.getElementById("categoryTitle").textContent =
    "Category: " + category;

  const container = document.getElementById("items");

  data[category].forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item;

    btn.onclick = () => {
      localStorage.setItem("item", item);
      window.location.href = "item.html";
    };

    container.appendChild(btn);
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
// PRICE SYSTEM
// =========================
let prices = JSON.parse(localStorage.getItem("prices")) || [];

function addPrice() {
  const item = localStorage.getItem("item");
  const price = parseFloat(document.getElementById("price").value);

  if (isNaN(price)) return alert("Invalid input");

  prices.push({ item, price });
  localStorage.setItem("prices", JSON.stringify(prices));

  // FILTER SAME ITEM
  const filtered = prices.filter(p => p.item === item);

  const avg =
    filtered.reduce((a, b) => a + b.price, 0) / filtered.length;

  let feedback = "";

  if (price > avg) feedback = "🔴 Mahal!";
  else if (price < avg) feedback = "🟢 Mura!";
  else feedback = "🟡 Sakto!";

  document.getElementById("feedback").textContent = feedback;
}

// =========================
// NAVIGATION
// =========================
function goHome() {
  window.location.href = "home.html";
}

function goBack() {
  window.history.back();
}

// =========================
// ONLINE / OFFLINE STATUS
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
