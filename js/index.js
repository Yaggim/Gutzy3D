const navToggle = document.querySelector(".nav-toggle")
const navList = document.querySelector(".nav-list")

navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-list_visible")
})



document.addEventListener("DOMContentLoaded", function () {
    const productForms = document.querySelectorAll(".product-form");

    productForms.forEach(function (form) {
        form.querySelector(".buy-button").addEventListener("click", function (event) {
            event.preventDefault();

            const quantity = parseInt(form.querySelector("input[name='quantity']").value);
            const product_name = form.querySelector("input[name='product_name']").value;
            const product_price = parseFloat(form.querySelector("input[name='product_price']").value);
            const total_price = quantity * product_price;
            const message = `¡Quiero comprar ${quantity} ${product_name} por un total de $${total_price.toFixed(2)}!`;

            // Redirige al formulario de contacto en contact.html y pasa los datos a través de la URL
            const contactFormURL = "contact.html?" +
                `product_name=${encodeURIComponent(product_name)}` +
                `&product_price=${encodeURIComponent(product_price)}` +
                `&total_price=${encodeURIComponent(total_price)}` +
                `&message=${encodeURIComponent(message)}`;

            // Redirige a la página de contacto
            window.location.href = contactFormURL;
            
        });
    });
    
});

