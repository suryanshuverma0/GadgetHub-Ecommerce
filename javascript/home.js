    //use buy now button
    const intro = document.querySelector(".intro");
    const shop_now = document.getElementById("shop-now");

    function scrollToShop() {
      if (intro) {
        intro.scrollIntoView({ behavior: "smooth" });
      }
    }
    shop_now.addEventListener("click", scrollToShop);

    //using shop now button tp navigate to product page
    const shop_btn = document.getElementById("product-page");
    shop_btn.addEventListener("click", function moveToProductPage() {
      window.location.href = "/html/product.html";
    });