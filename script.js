const products = [
    {
        name: "Fire Boltt Ninja 2",
        price: 1599,
        seller: "Boltt Store",
        category: "Watch",
        image: "https://www.fireboltt.com/cdn/shop/products/Ninja2_BGold_01_540x.png?v=1668412268"
    },
    {
        name: "Noise Pulse Go",
        price: 1300,
        seller: "Noise Store",
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg"
    },
    {
        name: "boAt Xtend Pro",
        price: 2799,
        seller: "Rajesh Watchs",
        category: "Watch",
        image: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SX679_.jpg"
    },
    {
        name: "Lenovo Tab M8",
        price: 9270,
        seller: "Stonehenge Retail",
        category: "Tablets",
        image: "https://img6.gadgetsnow.com/gd/images/products/additional/large/G385819_View_2/mobiles/tablets/lenovo-tab-m8-hd-8-inches-wi-fi-only-grey-32gb-2gb-ram-.jpg"
    },
    {
        name: "Honor PAD X8",
        price: 12999,
        seller: "Honor India",
        category: "Tablets",
        image: "https://img1.gadgetsnow.com/gd/images/products/additional/large/G440023_View_1/mobiles/tablets/honor-pad-x8-10-1-inch-fhd-wi-fi-tablet-blue-hour-32gb-3gb-ram-.jpg"
    },
    {
        name: "IKALL N9",
        price: 3999,
        seller: "IKALL Store",
        category: "Tablets",
        image: "https://m.media-amazon.com/images/I/41ZpJ1+XJQL._SY300_SX300_.jpg"
    },

    {
        name: "Oppo Pad Air",
        price: 15999,
        seller: "Oppo Store",
        category: "Tablets",
        image: "https://m.media-amazon.com/images/I/513FD4w8hGL.jpg"
    },

    {
        name: "Acer EK220Q",
        price: 6249,
        seller: "Accer Store",
        category: "Monitors",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD2AE7fNeTStgkc7s9MWJrvl9yhX25_-E2OiKyw5TA0HPaF2VXXI3caKC2BKpTyAzqR2k2iPY9WmS70oWcl32jQvqcO-FsF0-7lB11VUerbZoVPwvntqsa"
    },
    {
        name: "SAMSUNG LED Monitor",
        price: 9799,
        seller: "Samsung Store",
        category: "Monitors",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-XcF-uobNidH_VepX43qO1c5rvc1DDxJYDkgM038Ak35UuG3v3SuhF5i8wMwJ-Cfg7B-QqU8AZjoMzrmOLgsEbLDo9GpWdRsfwcr2b5-emdcZ5S1nqRnvEw"
    },
    {
        name: "ZEBRONICS AC32FHD",
        price: 12799,
        seller: "ZEBRONICS Store",
        category: "Monitors",
        image: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G425671_View_1/computer-laptop/monitors/zebronics-ac32fhd-led-curved-75hz-80cm-32-81-28-cm-1920x1080-pixels-fhd-resolution-monitor-with-hdmi-vga-dual-input-built-in-speaker-max-250-nits-brightness-black.jpg"
    }
];

const productList = document.getElementById("productList");

function renderProducts(filteredProducts) {
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }
    
    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p><strong>Seller:</strong> ${product.seller}</p>
      <p><strong>Category:</strong> ${product.category}</p>
    `;
        productList.appendChild(productDiv);
    });
}

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = parseInt(priceFilter.value);

    priceLabel.textContent = selectedPrice;

    const filtered = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesPrice = product.price <= selectedPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("input", filterProducts);

// Initial render
filterProducts();
