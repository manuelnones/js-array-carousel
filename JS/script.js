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

btnUpElement.addEventListener(`click`, function () {
    index++;
    imgActiveElement.src = images[index];
});

btnDownElement.addEventListener(`click`, function () {
    index--;
    imgActiveElement.src = images[index];
});