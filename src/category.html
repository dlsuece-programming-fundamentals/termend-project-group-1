// Save name
function saveName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  window.location.href = "home.html"; // ✅ works because same folder
}


// Greeting
if (document.getElementById("greeting")) {
  const name = localStorage.getItem("name") || "Vendor";
  document.getElementById("greeting").textContent = "Mabuhay, " + name + "!";
}


// Category navigation
function goCategory(category) {
  localStorage.setItem("category", category);
  window.location.href = "category.html";
}


// Load items
if (document.getElementById("items")) {
  const category = localStorage.getItem("category");


  document.getElementById("categoryTitle").textContent =
    "Category: " + category;


  const data = {
    gulay: ["Sibuyas", "Bawang", "Kamatis"],
    karne: ["Manok", "Baboy", "Baka"],
    isda: ["Bangus", "Tilapia"],
    staple: ["Bigas", "Asukal"]
  };


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


// Load item page
if (document.getElementById("itemTitle")) {
  const item = localStorage.getItem("item");
  document.getElementById("itemTitle").textContent = item;
}


// Prices logic
let prices = JSON.parse(localStorage.getItem("prices")) || [];


function addPrice() {
  const item = localStorage.getItem("item");
  const price = parseFloat(document.getElementById("price").value);


  if (isNaN(price)) return alert("Invalid input");


  prices.push({ item, price });
  localStorage.setItem("prices", JSON.stringify(prices));


  const filtered = prices.filter(p => p.item === item);
  const avg = filtered.reduce((a, b) => a + b.price, 0) / filtered.length;


  let feedback = "";


  if (price > avg) feedback = "🔴 Mahal!";
  else if (price < avg) feedback = "🟢 Mura!";
  else feedback = "🟡 Sakto!";


  document.getElementById("feedback").textContent = feedback;
}


// Navigation
function goHome() {
  window.location.href = "home.html";
}


function goBack() {
  window.history.back();
}


// Online/offline
if (document.getElementById("status")) {
  function updateStatus() {
    document.getElementById("status").textContent =
      navigator.onLine ? "🟢 Online" : "🔴 Offline Mode";
  }


  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  updateStatus();
}
