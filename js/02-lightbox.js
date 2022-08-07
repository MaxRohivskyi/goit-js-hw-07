import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.

const galleryRef = document.querySelector('.gallery');

const addGalleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
        <img 
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
        />        
    </a>`
}).join('')

galleryRef.innerHTML = addGalleryMarkup;

// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.

let gallery = new SimpleLightbox('.gallery a', {

    // 4. Відображення підписів до зображень з атрибута alt.
    // Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

    captionsData: "alt",
    captionDelay: '250ms'
});

gallery.on('show.simplelightbox');

// console.log(galleryItems);
