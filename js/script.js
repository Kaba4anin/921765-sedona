var link = document.querySelector(".form-button");
var popup = document.querySelector(".search-form");

var date_arrival = popup.querySelector("[name=date-arrival]");
var date_of_departure = popup.querySelector("[name=date-of-departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-show");
});

popup.addEventListener("submit", function(evt){
  if (!date_arrival.value || !date_of_departure.value)
  {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});