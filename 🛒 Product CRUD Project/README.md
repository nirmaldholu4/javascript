# 🛍️ ProductHub - Product Management Application (CRUD)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-success?style=for-the-badge)

**ProductHub** is a clean, modern, fully functional single-page web application designed for product inventory management. Built using pure **Vanilla JavaScript (ES6+)**, **HTML5**, and **CSS3**, it allows users to perform full **CRUD** (Create, Read, Update, Delete) operations seamlessly with persistent browser storage (`localStorage`).

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [📁 Project Architecture](#-project-architecture)
- [🛠️ Detailed Code & Workflow Analysis](#️-detailed-code--workflow-analysis)
  - [1. Data Initialization & LocalStorage Persistence](#1-data-initialization--localstorage-persistence)
  - [2. View Switcher & Modal Simulation](#2-view-switcher--modal-simulation)
  - [3. Dynamic Product Rendering](#3-dynamic-product-rendering)
  - [4. Real-time Search & Price Sorting Filter](#4-real-time-search--price-sorting-filter)
  - [5. Form Handling & Inline Validation](#5-form-handling--inline-validation)
  - [6. Edit & Update Flow](#6-edit--update-flow)
  - [7. Safe Product Deletion](#7-safe-product-deletion)
  - [8. Fallback Image Handling](#8-fallback-image-handling)
- [🎨 UI & CSS Design System](#-ui--css-design-system)
- [📱 Responsive Design Matrix](#-responsive-design-matrix)
- [🚀 Quick Start / How to Run](#-quick-start--how-to-run)
- [📖 User Operations Guide](#-user-operations-guide)
- [🔮 Future Roadmap](#-future-roadmap)
- [🎥 Project Video Link](#-project-video-link)

---

## ✨ Features

- ➕ **Add New Products**: Easily introduce new items with custom names, prices, and image URLs.
- 📋 **List & Card Display**: Clean grid view showcasing product thumbnails, titles, descriptions, formatted prices, and action buttons.
- ✏️ **Edit & Update**: Pre-populate form fields to update existing product details directly.
- 🗑️ **Delete with Confirmation**: Prompt dialog prevents accidental deletion of items.
- 🔍 **Instant Search**: Real-time filtering by product title as you type.
- ↕️ **Price Sorting**: Sort items seamlessly by **Price: Low to High** or **Price: High to Low**.
- 🏷️ **Dynamic Product Counter**: Live badge updates count to reflect total filtered products.
- 💾 **Persistent Storage**: Data automatically saves to `localStorage` and persists across browser refreshes.
- 🛡️ **Input Validation**: Form checks ensure product names are non-empty and prices are positive numbers.
- 🖼️ **Broken Image Fallback**: Automatically replaces broken or missing image links with a default placeholder.
- 📱 **Mobile & Desktop Responsive**: Custom-built breakpoints adapt layout smoothly for phones, tablets, and desktop screens.

---

## 📁 Project Architecture

```
product-hub/
├── index.html        # Main HTML layout, structure, navigation sidebar, and views
├── style.css         # Custom styling, CSS Grid/Flexbox layouts, responsive breakpoints
├── script.js        # Core JavaScript application logic, DOM handling, LocalStorage CRUD
└── README.md         # Detailed project documentation and analysis
```

---

## 🛠️ Detailed Code & Workflow Analysis

### 1. Data Initialization & LocalStorage Persistence
The app manages products inside an in-memory array `products` synced with `localStorage` key `"productCRUDData"`. If no existing data is found in `localStorage`, it automatically populates the system with 10 default products (smartphones, laptops, accessories, audio devices).

```javascript
let products = JSON.parse(localStorage.getItem("productCRUDData"));

if (!Array.isArray(products) || products.length === 0) {
    products = [...defaultProducts];
    localStorage.setItem("productCRUDData", JSON.stringify(products));
}
```

---

### 2. View Switcher & Modal Simulation
Instead of navigating across multiple HTML files, the app uses single-page toggling via display properties (`showProductsPage()` and `showAddPage()`).

| View | Display Property | Features Active |
|---|---|---|
| **Products List View** (`#productsPage`) | `display: block` | Grid layout, Search bar, Sort selector, Product Cards |
| **Add / Edit Form View** (`#addPage`) | `display: block` | Form fields, Error hints, Submit / Cancel buttons |

---

### 3. Dynamic Product Rendering
The `displayProducts()` function clears existing nodes and iterates over the filtered array, injecting dynamic HTML product cards with fallback image handling:

```javascript
card.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.src='${defaultImage}'">
    <div class="product-content">
        <h3>${product.name}</h3>
        <p class="product-description">${product.description || ""}</p>
        <div class="product-price">Rs. ${product.price}</div>
        <div class="product-buttons">
            <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
    </div>
`;
```

---

### 4. Real-time Search & Price Sorting Filter
Search and sorting execute sequentially within `displayProducts()` before rendering:

1. **Filtering**: Matches product names against `searchInput.value.toLowerCase()`.
2. **Sorting**:
   - `low`: Sorts array in ascending price order (`a.price - b.price`).
   - `high`: Sorts array in descending price order (`b.price - a.price`).
3. **Count Badge**: Updates `#productCount` dynamically (`X Products`).

---

### 5. Form Handling & Inline Validation
Before creating or updating a product, `validateForm()` verifies:
- `productName` is non-empty.
- `productPrice` is present and strictly greater than zero (`> 0`).

Error alerts render in red beneath input elements (`#nameError`, `#priceError`).

---

### 6. Edit & Update Flow
When the **Edit** button is clicked:
1. `editProduct(id)` locates the item by unique timestamp `id`.
2. Populates form fields with existing data (`name`, `price`, `image`).
3. Sets state flag `editId = id`.
4. Changes header text to `"Edit Product"` and button label to `"Update Product"`.
5. On submission, `updateProduct()` overwrites the index item in array and saves to `localStorage`.

---

### 7. Safe Product Deletion
Triggered by `deleteProduct(id)`:
- Invokes native `confirm()` modal to prevent unintentional loss of data.
- Filters out the item matching `product.id`.
- Synchronizes with `localStorage` and re-renders the list.

---

### 8. Fallback Image Handling
If a user submits an invalid or dead image URL, the inline standard HTML event `onerror="this.src='${defaultImage}'"` catches the broken image error and replaces it with a curated Unsplash technology graphic.

---

## 🎨 UI & CSS Design System

- **Primary Accent**: `#4f46e5` (Indigo) / Hover: `#4338ca`
- **Dark Sidebar Navigation**: `#111827` (Midnight Dark Gray)
- **Background canvas**: `#f5f6fa` (Soft Cool Gray)
- **Action Colors**:
  - Edit Button: `#fef3c7` background with `#b45309` text (Warm Amber).
  - Delete Button: `#fee2e2` background with `#dc2626` text (Soft Crimson Red).
  - Price Tag: `#16a34a` (Emerald Green).

---

## 📱 Responsive Design Matrix

| Breakpoint Screen Width | Layout Specification |
|---|---|
| **> 1100px** | 4 Columns Product Grid, Full Sidebar (250px) |
| **850px – 1100px** | 3 Columns Product Grid, Sidebar (210px) |
| **600px – 850px** | 2 Columns Product Grid |
| **< 600px (Mobile)** | 1 Column Full Width Cards, Icon-only Compact Sidebar (70px), Stacked Tools |

---

## 🚀 Quick Start / How to Run

1. Clone or download the repository files:
   - `index.html`
   - `style.css`
   - `script.js`
2. Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
3. Alternatively, serve via VS Code **Live Server** extension.

---

## 📖 User Operations Guide

1. **Viewing Products**: Open the page; default items load instantly.
2. **Searching**: Type in the top search bar (e.g. `"iPhone"` or `"Headphones"`).
3. **Sorting**: Select `"Price Low to High"` or `"Price High to Low"` from the dropdown.
4. **Adding Product**:
   - Click **`+ Add Product`** button at top right or in sidebar.
   - Enter name, price, and optional image URL.
   - Click **Add Product**.
5. **Editing Product**:
   - Click **Edit** on any card.
   - Modify fields and click **Update Product**.
6. **Deleting Product**:
   - Click **Delete** on a card and confirm dialog prompt.

---

## 🔮 Future Roadmap

- 🏷️ Product categories & multi-tag filtering.
- 📦 Pagination or infinite scrolling for large inventories.
- 📥 Export product list to CSV / JSON files.
- 🌓 Light / Dark mode toggler.

---

## 🎥 Project Video Link 👉

👇👇

   ➡️:https://drive.google.com/file/d/17D7l865AA-zzusOgXuvJWpdFVv5Z7nue/view?usp=sharing

👆👆

📄 License
👉 This project is created for educational purposes only.👈