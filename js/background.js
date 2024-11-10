const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //이미지를 랜덤으로 가져옴.

const bgImage = document.createElement("img");
//html에서 img src하는 것과 같음.
bgImage.src = `img/${chosenImage}`;
//style
document.body.appendChild(bgImage);
