// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",

    },
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// seleziono il contenitore
const itemsContainer = document.querySelector(".items-container")


// estrapolo gli elementi dall'array img
for (let i = 0; i < images.length; i++){
     const itemImg = images[i];

    // creare ad ogni iterazione l'elemento da inserire
        let itemContent = `
        <div class="item">
            <img src="${itemImg.image}" alt="${itemImg.title}">
            <h2>${itemImg.title}</h2>
            <p>${itemImg.text}</p>
        </div> 
    `;
           
    //  inseriamo il nuovo elemento nel contenitore selezionato precedentemente
    itemsContainer.innerHTML += itemContent;    
}

// seleziono tutti gli elementi in pagina
const items = document.getElementsByClassName("item");
let activeItem = 0;

// mettere la classe active al primo elemento
items[activeItem].classList.add("active");
console.log(items[0]);


        // Seleziono il bottone next
        const next = document.querySelector(".next");
        // Gestire il click sul next
        next.addEventListener("click", function () {
            // Elimino l'active sull'elemento attivo
            items[activeItem].classList.remove("active");

            // Incremento l'indice dell'elemento attivo
            activeItem++;

            // Se l'indice supera la lunghezza dell'array, torna al primo elemento
            if (activeItem >= items.length) {
                activeItem = 0;
            }

            // Aggiungo la classe active al nuovo elemento attivo
            items[activeItem].classList.add("active");
        });

const previous = document.querySelector(".previous");
        // Gestire il click sul previous
        previous.addEventListener("click", function () {
            // Elimino l'active sull'elemento attivo
            items[activeItem].classList.remove("active");

            // Decremento l'indice dell'elemento attivo
            activeItem--;

            // Se l'indice è minore di zero, vai all'ultimo elemento
            if (activeItem < 0) {
                activeItem = items.length - 1;
            }

            // Aggiungo la classe active al nuovo elemento attivo
            items[activeItem].classList.add("active");
        });