const images = [
    "download (2).jpeg",
    "Uma águia voando na frente de uma cordilheira _ imagem Premium gerada com IA.jpeg",
    "jaguar.jpeg",
    "Black Horse HD wallpaper 4K free download for Desktop laptop and Phones.jpeg",
    "Download premium image of Panda wildlife animal mammal_ by Narathorn about wallpaper panda, wallpaper cute panda, bamboo forest, wallpaper red panda, and wallpaper panda photo 14409821.jpeg"
];

let index = 0;

const myImg = document.querySelector("#my-img");

myImg.src = images[index];

function nextSlide() {
    index = index + 1;

    if (index >= images.length) {
        index = 0;
    }

    myImg.src = images[index];
}

function prevSlide() {
    index = index - 1;

    if (index < 0) {
        index = images.length - 1;
    }

    myImg.src = images[index];
}