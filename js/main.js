const wishlist = document.querySelectorAll(".wishlistIcon");
wishlist.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.children[0].classList.contains("fa-regular")
      ? btn.children[0].classList.replace("fa-regular", "fa-solid")
      : btn.children[0].classList.replace("fa-solid", "fa-regular");
  });
});
