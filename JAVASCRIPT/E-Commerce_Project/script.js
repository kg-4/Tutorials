let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", stock: 5 },
    { id: 2, name: "Mobile", price: 2000, category: "Electronics", stock: 15 },
    { id: 3, name: "T-shirt", price: 200, category: "Apparel", stock: 0 },
];

let renderProdsListElmt = document.querySelector("#renderProdsList");
let prodNameElmt = document.querySelector("#prodName");
let prodCategoryElmt = document.querySelector("#prodCategory");
let prodPriceElmt = document.querySelector("#prodPrice");
let prodStockElmt = document.querySelector("#prodStock");
let btnAddEditElmt = document.querySelector("#btnAddEdit");
let renderCartElmt = document.querySelector("#renderCart");
let cartAmtElmt = document.querySelector("#cartAmt");
let cartLengthElmt = document.querySelector("#cartLength");

let cart = [];
let editingProductID = null;


// Local Storage

function saveProdToLocal(p) {
    localStorage.setItem("b101", JSON.stringify(p));
}

function getProdFromLocal() {
    return JSON.parse(localStorage.getItem("b101")) || [];
}

function saveCartToLocal(c) {
    localStorage.setItem("B101Cart", JSON.stringify(c));
}

function getCartFromLocal() {
    return JSON.parse(localStorage.getItem("B101Cart")) || [];
}


// Render Products

function renderProducts(prods) {

    if (!renderProdsListElmt) {
        return;
    }

    renderProdsListElmt.innerHTML = prods.map((pro) => `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
                <div class="card-body d-flex flex-column">

                    <h5 class="card-title fw-bold text-primary">
                        ${pro.name}
                    </h5>

                    <p class="text-secondary mb-2">
                        ${pro.category}
                    </p>

                    <h4 class="fw-bold">$ ${pro.price}</h4>

                   
                     <div class="mt-auto d-flex flex-wrap gap-2">

                        <button class="btn btn-outline-primary btn-sm"
                            onclick="editProdInfo(${pro.id})">
                            Edit
                        </button>

                        <button class="btn btn-outline-danger btn-sm"
                            onclick="deleteProduct(${pro.id})">
                            Delete
                        </button>

                        <button class="btn btn-primary btn-sm"
                            onclick="addToCart(${pro.id})">
                            Add to Cart
                        </button>

                    </div>

                </div>
            </div>
        </div>
    `).join("");
}


// Add or Update Product

function addOrEditProduct() {

    let prodFromLocal = getProdFromLocal();

    let name = prodNameElmt.value;
    let category = prodCategoryElmt.value;
    let price = Number(prodPriceElmt.value);
    let stock = Number(prodStockElmt.value);

    if (name === "" || category === "" ||
        prodPriceElmt.value === "" || prodStockElmt.value === "") {
        alert("Please fill all product details");
        return;
    }

    if (price <= 0 || stock < 0 || !Number.isInteger(stock)) {
        alert("Enter a valid price and stock");
        return;
    }

    if (editingProductID === null) {

        let newProduct = {
            id: Date.now(),
            name: name,
            category: category,
            price: price,
            stock: stock
        };

        prodFromLocal.push(newProduct);

    } else {

        let index = prodFromLocal.findIndex(
            (p) => p.id === editingProductID
        );

        if (index !== -1) {
            prodFromLocal[index].name = name;
            prodFromLocal[index].category = category;
            prodFromLocal[index].price = price;
            prodFromLocal[index].stock = stock;
        }

        editingProductID = null;
        btnAddEditElmt.textContent = "Add New Product";
    }

    saveProdToLocal(prodFromLocal);
    renderProducts(prodFromLocal);

    prodNameElmt.value = "";
    prodCategoryElmt.value = "";
    prodPriceElmt.value = "";
    prodStockElmt.value = "";
}


// Edit Product

function editProdInfo(ID) {

    let prodFromLocal = getProdFromLocal();

    let updateProd = prodFromLocal.find((p) => p.id === ID);

    if (!updateProd) {
        alert("Product not Found");
        return;
    }

    editingProductID = ID;

    prodNameElmt.value = updateProd.name;
    prodCategoryElmt.value = updateProd.category;
    prodPriceElmt.value = updateProd.price;
    prodStockElmt.value = updateProd.stock;

    btnAddEditElmt.textContent = "Update Product";

    window.scrollTo(0, 0);
}


if (btnAddEditElmt) {
    btnAddEditElmt.addEventListener("click", addOrEditProduct);
}


// Delete Product

function deleteProduct(ID) {

    let prodFromLocal = getProdFromLocal();

    let index = prodFromLocal.findIndex((p) => p.id === ID);

    if (index === -1) {
        alert("Product not Found");
        return;
    }

    prodFromLocal.splice(index, 1);

    saveProdToLocal(prodFromLocal);
    renderProducts(prodFromLocal);
}


// Update Cart Count

function updateCartLength() {

    if (cartLengthElmt) {
        let cartFromLocal = getCartFromLocal();

        let totalQuantity = 0;

        for (let i = 0; i < cartFromLocal.length; i++) {
            totalQuantity += cartFromLocal[i].quantity;
        }

        cartLengthElmt.textContent = totalQuantity;
    }
}


// Add to Cart

function addToCart(ID) {

    let prodFromLocal = getProdFromLocal();

    let prodForCart = prodFromLocal.find((p) => p.id === ID);

    if (!prodForCart) {
        alert("Product not Found");
        return;
    }

    if (prodForCart.stock <= 0) {
        alert("Out of Stock");
        return;
    }

    let cartProdFromLocal = getCartFromLocal();

    let index = cartProdFromLocal.findIndex((p) => p.prodID === ID);

    if (index === -1) {

        let cartProd = {
            prodID: prodForCart.id,
            prodName: prodForCart.name,
            prodPrice: prodForCart.price,
            quantity: 1
        };

        cartProdFromLocal.push(cartProd);

    } else {

        if (cartProdFromLocal[index].quantity >= prodForCart.stock) {
            alert("Maximum available stock reached");
            return;
        }

        cartProdFromLocal[index].quantity += 1;
    }

    saveCartToLocal(cartProdFromLocal);
    updateCartLength();
}


// Render Cart

function renderCart() {

    if (!renderCartElmt || !cartAmtElmt) {
        return;
    }

    let cartFrmLocal = getCartFromLocal();

    if (cartFrmLocal.length > 0) {

        renderCartElmt.innerHTML = cartFrmLocal.map((p, i) => `
            <tr>
                <td>${i + 1}</td>

                <td class="text-start fw-semibold">
                    ${p.prodName}
                </td>

                <td>$ ${p.prodPrice}</td>

                <td>
                    <div class="d-flex justify-content-center align-items-center gap-2">

                        <button class="btn btn-outline-primary btn-sm"
                            onclick="decreaseQuantity(${p.prodID})">
                            -
                        </button>

                        <span class="fw-bold">${p.quantity}</span>

                        <button class="btn btn-outline-primary btn-sm"
                            onclick="increaseQuantity(${p.prodID})">
                            +
                        </button>

                    </div>
                </td>
            </tr>
        `).join("");

        let totalMRP = cartFrmLocal.reduce((sum, p) => {
            return sum + Number(p.prodPrice) * p.quantity;
        }, 0);

        let disOnMRP = totalMRP * 20 / 100;
        let platformFee = 100;
        let deliveryCharges = 100;
        let totalAmount = totalMRP - disOnMRP + platformFee + deliveryCharges;

        cartAmtElmt.innerHTML = `
            <p class="d-flex justify-content-between">
                <span>Total MRP</span>
                <span>$ ${totalMRP.toFixed(2)}</span>
            </p>

            <p class="d-flex justify-content-between text-success">
                <span>Discount (20%)</span>
                <span>- $ ${disOnMRP.toFixed(2)}</span>
            </p>

            <p class="d-flex justify-content-between">
                <span>Platform Fee</span>
                <span>$ ${platformFee}</span>
            </p>

            <p class="d-flex justify-content-between">
                <span>Delivery Charges</span>
                <span>$ ${deliveryCharges}</span>
            </p>

            <hr>

            <h5 class="d-flex justify-content-between fw-bold">
                <span>Total Amount</span>
                <span class="text-primary">$ ${totalAmount.toFixed(2)}</span>
            </h5>
        `;

    } else {

        renderCartElmt.innerHTML = `
            <tr>
                <td colspan="4" class="text-center py-5">
                    <h5 class="text-secondary">Your Cart is Empty</h5>
                    <p class="text-secondary">Add product to get started!!</p>
                    <a href="./index.html" class="btn btn-primary">
                        Shop Now
                    </a>
                </td>
            </tr>
        `;

        cartAmtElmt.innerHTML = "";
    }

    updateCartLength();
}


// Increase Quantity

function increaseQuantity(ID) {

    let cartProdFromLocal = getCartFromLocal();
    let prodFromLocal = getProdFromLocal();

    let index = cartProdFromLocal.findIndex((p) => p.prodID === ID);
    let product = prodFromLocal.find((p) => p.id === ID);

    if (index === -1 || !product) {
        alert("Product not found");
        return;
    }

    if (cartProdFromLocal[index].quantity >= product.stock) {
        alert("Maximum available stock reached");
        return;
    }

    cartProdFromLocal[index].quantity += 1;

    saveCartToLocal(cartProdFromLocal);
    renderCart();
}


// Decrease Quantity

function decreaseQuantity(ID) {

    let cartProdFromLocal = getCartFromLocal();

    let index = cartProdFromLocal.findIndex((p) => p.prodID === ID);

    if (index === -1) {
        alert("Product not found");
        return;
    }

    if (cartProdFromLocal[index].quantity > 1) {

        cartProdFromLocal[index].quantity -= 1;

    } else {

        cartProdFromLocal.splice(index, 1);
    }

    saveCartToLocal(cartProdFromLocal);
    renderCart();
}


// Load Data

window.addEventListener("DOMContentLoaded", () => {

    let prodFromLocal = getProdFromLocal();

    if (prodFromLocal.length === 0) {
        saveProdToLocal(products);
        prodFromLocal = products;
    }

    let cartFromLocal = getCartFromLocal();

    if (renderProdsListElmt) {
        renderProducts(prodFromLocal);
    }

    if (renderCartElmt) {
        renderCart();
    } else {
        updateCartLength();
    }

});
