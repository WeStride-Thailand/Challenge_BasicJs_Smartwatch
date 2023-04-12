var blackColor = document.getElementById("color-1");
var redColor = document.getElementById("color-2");
var purpleColor = document.getElementById("color-3");
var pinkColor = document.getElementById("color-4");
var watchImage = document.getElementById("watch");

blackColor.addEventListener('click', function () {
  watchImage.src = "https://westride-watch-shop.pages.dev/image/black-watch.png";
  watchImage.alt = "smart-watch-black";
});

redColor.addEventListener('click', function () {
  watchImage.src = "https://westride-watch-shop.pages.dev/image/red-watch.png";
  watchImage.alt = "smart-watch-red";
});

purpleColor.addEventListener('click', function () {
  watchImage.src = "https://westride-watch-shop.pages.dev/image/purple-watch.png";
  watchImage.alt = "smart-watch-purple";
});

pinkColor.addEventListener('click', function () {
  watchImage.src = "./image/pink-watch.png";
  watchImage.alt = "smart-watch-pink";
});

