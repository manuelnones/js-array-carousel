/*
 x creazioni variabili degli elementi html
 x creazione array delle immagini
 x creazione variabile dell' indice
 x al click del pulsante su 
    o mostro l' immagine relativa
 x al click del pulsante giu
    o mostri l' immagine relativa
*/

const btnUpElement = document.querySelector(`.btnUp`);
const btnDownElement = document.querySelector(`.btnDown`);
const imgActiveElement = document.getElementById(`imgActive`);
const images = [`img/01.webp`, `img/02.webp`, `img/03.webp`, `img/04.webp`, `img/05.webp`, ];
let index = 0;
const imgPreviewEl = document.querySelectorAll(`.img`);

btnUpElement.addEventListener(`click`, function () {

    imgPreviewEl[index].classList.remove(`active`);
    
    if (index == images.length - 1) {

        index = 0;
    } else {

        index++;
    }

    imgActiveElement.src = images[index];

    imgPreviewEl[index].classList.add(`active`);
});

btnDownElement.addEventListener(`click`, function () {

    imgPreviewEl[index].classList.remove(`active`);

    if (index == 0) {

        index = images.length - 1;
    } else {

        index--;
    }

    imgActiveElement.src = images[index];

    imgPreviewEl[index].classList.add(`active`);
});