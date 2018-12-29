var link = document.querySelector(".form-button");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
});