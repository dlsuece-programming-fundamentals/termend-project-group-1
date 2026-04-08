// Load saved data
let prices = JSON.parse(localStorage.getItem("prices")) || [];

// Add new price
function addPrice() {
  const product = document.getElementById("product").value.trim();
  const price = parseFloat(document.getElementById("price").value);

  if (!product || isNaN(price)) {
    alert("Please enter valid data");
    return;
  }

  const entry = { product, price };
  prices.push(entry);

  // Save locally
  localStorage.setItem("prices", JSON.stringify(prices));

  // Clear inputs
  document.getElementById("product").value = "";
  document.getElementById("price").value = "";

  displayPrices();
}

// Display prices
function displayPrices() {
  const list = document.getElementById("priceList");
  const avgDisplay = document.getElementById("average");

  list.innerHTML = "";

  // Empty state
  if (prices.length === 0) {
    list.innerHTML = "<li>Wala pang data</li>";
    avgDisplay.textContent = "";
    return;
  }

  // Group by product
  let grouped = {};

  prices.forEach(item => {
    if (!grouped[item.product]) {
      grouped[item.product] = [];
    }
    grouped[item.product].push(item.price);
  });

  // Display each item
  prices.forEach(item => {
    const li = document.createElement("li");

    const productPrices = grouped[item.product];
    const avg =
      productPrices.reduce((a, b) => a + b, 0) / productPrices.length;

    let status = "";

    if (item.price > avg) {
      status = "🔴 Mahal";
    } else if (item.price < avg) {
      status = "🟢 Mura";
    } else {
      status = "🟡 Sakto";
    }

    li.textContent = `${item.product} - ₱${item.price} (${status})`;
    list.appendChild(li);
  });

  // Overall average
  let total = prices.reduce((sum, item) => sum + item.price, 0);
  let overallAvg = (total / prices.length).toFixed(2);

  avgDisplay.textContent = "Average Price: ₱" + overallAvg;
}

// Clear all data
function clearData() {
  localStorage.removeItem("prices");
  prices = [];
  displayPrices();
}

// Run on load
displayPrices();
