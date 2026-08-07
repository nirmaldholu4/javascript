const productsPage = document.getElementById("productsPage");
const addPage = document.getElementById("addPage");
const pageTitle = document.getElementById("pageTitle");

const homeBtn = document.getElementById("homeBtn");
const addProductBtn = document.getElementById("addProductBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const cancelBtn = document.getElementById("cancelBtn");

const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImage = document.getElementById("productImage");

const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const priceError = document.getElementById("priceError");

const defaultImage =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80";

const defaultProducts = [
    {
        id: 1,
        name: "iPhone 15",
        description: "iPhone 15 features a powerful A16 Bionic chip, excellent camera quality, Super Retina XDR display and a premium design.",
        price: 50000,
        image: "./images/iphone15.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        description: "Samsung Galaxy S24 offers a bright AMOLED display, powerful performance, advanced camera features and a stylish premium design.",
        price: 65000,
        image: "./images/Samsung Galaxy S24.jpg"
    },
    {
        id: 3,
        name: "MacBook Air",
        description: "MacBook Air is a lightweight laptop with smooth performance, long battery life, a sharp display and a slim premium design.",
        price: 85000,
        image: "./images/macbook.jpg"
    },
    {
        id: 4,
        name: "HP Laptop",
        description: "HP Laptop provides reliable performance for study, office work, browsing and everyday computing with a comfortable design.",
        price: 55000,
        image: "./images/HP laptop.jpg"
    },
    {
        id: 5,
        name: "Smart Watch",
        description: "Smart Watch helps you track daily activities, check notifications, monitor fitness information and stay connected on the go.",
        price: 3500,
        image: "./images/Smart watch.jpg"
    },
    {
        id: 6,
        name: "Headphones",
        description: "These headphones provide clear sound, comfortable ear cushions and an enjoyable listening experience for music and entertainment.",
        price: 2500,
        image: "./images/Headphones.jpg"
    },
    {
        id: 7,
        name: "Wireless Keyboard",
        description: "Wireless Keyboard offers comfortable typing, a clean setup and convenient wireless connectivity for everyday computer use.",
        price: 1800,
        image: "./images/Wireless keyboard.jpg"
    },
    {
        id: 8,
        name: "Gaming Mouse",
        description: "Gaming Mouse is designed for smooth and accurate control with comfortable handling, responsive buttons and precise movement.",
        price: 1200,
        image: "./images/Gaming mouse.jpg"
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        description: "Bluetooth Speaker delivers portable wireless audio with easy connectivity, clear sound and a compact design for entertainment.",
        price: 2200,
        image: "./images/Bluetooth Speaker.jpg"
    },
    {
        id: 10,
        name: "Tablet",
        description: "Tablet features a large display and portable design, making it useful for watching videos, browsing, studying and everyday tasks.",
        price: 30000,
        image: "./images/Tablet.jpg"
    },
    {
        id: 11,
        name: "powerbank",
        description: "Powerbank provides portable charging for your devices on the go with a compact design and reliable performance.",
        price: 2000,
        image: "./images/powerbank.jpg"
    },
    {
        id: 12,
        name: "watch",
        description: "A stylish classic analog watch featuring a durable stainless steel strap, water resistance, and a timeless design suitable for both formal and casual wear.",
        price: 5000,
        image: "./images/watch.jpg"
    },
    {
        id: 13,
        name: "shoes",
        description: "Comfortable and stylish shoes for everyday wear.",
        price: 3000,
        image: "./images/shoes.jpg"
    },
    {
        id: 14,
        name: "shirts",
        description: "Comfortable and stylish shirts for everyday wear.",
        price: 2000,
        image: "./images/shirt.jpg"
    },
    {
        id: 15,
        name: "TV",
        description: "Experience stunning visuals and immersive sound with our latest TV model.",
        price: 50000,
        image: "./images/TV.jpg"
    },
    {
        id: 16,
        name: "Earbuds",
        description: "Experience crystal-clear sound with our latest earbuds, perfect for music and calls.",
        price: 3000,
        image: "./images/earbuds.jpg"
    }
];

let products = JSON.parse(localStorage.getItem("productCRUDData"));

if (!Array.isArray(products) || products.length === 0) {
    products = [...defaultProducts];

    localStorage.setItem(
        "productCRUDData",
        JSON.stringify(products)
    );
}

let editId = null;

function saveProducts() {
    localStorage.setItem(
        "productCRUDData",
        JSON.stringify(products)
    );
}

function showProductsPage() {
    productsPage.style.display = "block";
    addPage.style.display = "none";

    pageTitle.innerText = "All Products";

    homeBtn.classList.add("active");
    addProductBtn.classList.remove("active");

    displayProducts();
}

function showAddPage() {
    productsPage.style.display = "none";
    addPage.style.display = "block";

    pageTitle.innerText = "Add Product";

    homeBtn.classList.remove("active");
    addProductBtn.classList.add("active");
}

function clearForm() {
    productForm.reset();
    editId = null;

    formTitle.innerText = "Add New Product";
    submitBtn.innerText = "Add Product";

    nameError.innerText = "";
    priceError.innerText = "";
}

function validateForm() {
    let valid = true;

    const name = productName.value.trim();
    const price = productPrice.value.trim();

    nameError.innerText = "";
    priceError.innerText = "";

    if (name === "") {
        nameError.innerText = "Product name is required";
        valid = false;
    }

    if (price === "") {
        priceError.innerText = "Product price is required";
        valid = false;
    }
    else if (Number(price) <= 0) {
        priceError.innerText = "Price must be greater than 0";
        valid = false;
    }

    return valid;
}

function addProduct() {
    if (!validateForm()) return;

    const product = {
        id: Date.now(),
        name: productName.value.trim(),
        price: Number(productPrice.value),
        image: productImage.value.trim() || defaultImage
    };

    products.push(product);
    saveProducts();
    clearForm();
    showProductsPage();

    alert("Product added successfully!");
}

function displayProducts() {
    productList.innerHTML = "";

    let data = [...products];

    const search = searchInput.value
        .toLowerCase()
        .trim();

    if (search) {
        data = data.filter(function (product) {
            return product.name
                .toLowerCase()
                .includes(search);
        });
    }

    if (sortSelect.value === "low") {
        data.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    if (sortSelect.value === "high") {
        data.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    productCount.innerText =
        data.length +
        (data.length === 1 ? " Product" : " Products");

    data.forEach(function (product) {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='${defaultImage}'"
            >

            <div class="product-content">

                <h3 title="${product.name}">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description || ""}
                </p>

                <div class="product-price">
                    Rs. ${product.price}
                </div>

                <div class="product-buttons">

                    <button
                        class="edit-btn"
                        onclick="editProduct(${product.id})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteProduct(${product.id})"
                    >
                        Delete
                    </button>

                </div>
            </div>
        `;

        productList.appendChild(card);
    });
}

function editProduct(id) {
    const product = products.find(function (item) {
        return item.id === id;
    });

    if (!product) return;

    productName.value = product.name;
    productPrice.value = product.price;
    productImage.value = product.image;

    editId = id;

    formTitle.innerText = "Edit Product";
    submitBtn.innerText = "Update Product";

    showAddPage();
}

function updateProduct() {
    if (!validateForm()) return;

    const index = products.findIndex(function (product) {
        return product.id === editId;
    });

    if (index === -1) return;

    const image = productImage.value.trim();

    products[index] = {
        id: editId,
        name: productName.value.trim(),
        price: Number(productPrice.value),
        image: image ||
            products[index].image ||
            defaultImage
    };

    saveProducts();
    clearForm();
    showProductsPage();

    alert("Product updated successfully!");
}

function deleteProduct(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    products = products.filter(function (product) {
        return product.id !== id;
    });

    saveProducts();
    displayProducts();
}

productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (editId === null) {
        addProduct();
    }
    else {
        updateProduct();
    }
});

homeBtn.addEventListener("click", function () {
    clearForm();
    showProductsPage();
});

addProductBtn.addEventListener("click", function () {
    clearForm();
    showAddPage();
});

closeFormBtn.addEventListener("click", function () {
    clearForm();
    showProductsPage();
});

cancelBtn.addEventListener("click", function () {
    clearForm();
    showProductsPage();
});

searchInput.addEventListener("input", function () {
    displayProducts();
});

sortSelect.addEventListener("change", function () {
    displayProducts();
});

displayProducts();