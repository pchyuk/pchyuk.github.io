const body = document.querySelector("body");

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = new Image();

image.src = `img/${chosenImage}`;

image.classList.add('bgImage');

body.prepend(image);