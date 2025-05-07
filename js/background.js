const body = document.querySelector("body");

const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = new Image();

image.src = `img/${chosenImage}`;

image.classList.add('bgImage');

body.prepend(image);