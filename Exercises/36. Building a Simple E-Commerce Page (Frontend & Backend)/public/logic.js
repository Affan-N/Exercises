let closeBtn = document.querySelector(".close-btn");
let cartPopup = document.getElementById("cartPopup")
let cart = document.getElementById("cart")
let content = document.getElementById("content")
let addToCart = document.querySelectorAll(".add-to-cart")
let productNames = document.querySelectorAll(".product-name");
let productPrice = document.querySelectorAll(".product-price");
let finalize = document.querySelector(".finalize")


addToCart.forEach((item, index) => {
    let cartProductName = productNames[index].innerText;
    let cartProductPrice = productPrice[index].innerText;


    item.addEventListener("click", () => {
        alert(`${cartProductName} added to cart for ${cartProductPrice}`);
        // console.log(cartProductName);
        // console.log(cartProductPrice);

        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push({ name: cartProductName, price: cartProductPrice });
        localStorage.setItem("cart", JSON.stringify(cartItems));
    });
});

cart.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    cartPopup.style.display = "flex";

    finalize.addEventListener("click", ()=>{
        if(localStorage.getItem("cart") === "[]"){
            console.log("There is nothing is the cart")
        }else{
            let finalizeCartItems = JSON.parse(localStorage.getItem("cart"));
            finalizeCartItems.forEach(items => {
                console.log(items)
            });
            alert("Order complete successfully, Check your console")
        }
    })



    if (cartItems && cartItems.length > 0) {
        let cartContent = '';
        cartItems.forEach((item, index) => {
            cartContent += `<p><strong>Product Name:</strong> ${item.name}, <strong>Price:</strong> ${item.price} <button class="X" data-index="${index}"> X </button></p>`;
        });
        content.innerHTML = cartContent;

        const Xbuttons = document.querySelectorAll(".X");
        Xbuttons.forEach(button => {
            button.addEventListener("click", (event) => {
                const itemIndex = event.target.getAttribute('data-index');
                cartItems.splice(itemIndex, 1);


                localStorage.setItem("cart", JSON.stringify(cartItems));

                cart.dispatchEvent(new Event("click"));
            });
        });
    } else {
        content.innerHTML = "<p>Your cart is empty.</p>";
    }
});





closeBtn.addEventListener("click", () => {
    cartPopup.style.display = "none";
})