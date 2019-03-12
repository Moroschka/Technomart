var linkBuy = document.querySelectorAll(".button-buy");
var cart = document.querySelector(".cart");
var closeCart = cart.querySelector(".cross");

if (cart) {
  for (var i = 0; i < linkBuy.length; i++) {
    linkBuy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      cart.classList.add("modal-show");
    });
  }

  closeCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    cart.classList.remove("modal-show");
  });
}

var link = document.querySelector(".contacts-access-link");
var feedback = document.querySelector(".contacts-feedback-form");
var close = feedback.querySelector(".cross");
var login = feedback.querySelector("[name=fullname]");
var form = feedback.querySelector(".feedback-form");
var email = feedback.querySelector("[name=email]");
var storage = localStorage.getItem("login");

if (feedback) {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
  });

  form.addEventListener("submit", function(evt) {
    if(!login.value || !email.value) {
      evt.preventDefault();
      console.log("Введите Ваше имя и электронный адрес");
    } else {
      localStorage.setItem("login", login.value);
    }
  });
}

var linkMap = document.querySelector(".contacts-map-link");
var map = document.querySelector(".map");
var closeMap = map.querySelector(".cross");
var myMap;
var myPlacemark;

if (map) {
  linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
  });

  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
  });

  ymaps.ready(init);
  function init () {
    myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark(
      [59.938631, 30.323055] , {
        iconContent: "ул. Большая Конюшенная, 18/9"}, {
        preset: "twirl#redStretchyIcon"
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
