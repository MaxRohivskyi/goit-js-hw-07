import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.

const galleryRef = document.querySelector('.gallery');

const addGalleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')

galleryRef.innerHTML = addGalleryMarkup;

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

galleryRef.addEventListener('click', onGalleryItemClick);

// 4. Відкриття модального вікна по кліку на елементі галереї. 

function onGalleryItemClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return
    }
    
    // 5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.

    const scrImg = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${scrImg}"/>`)
    
    galleryRef.addEventListener("keydown", onClosePressEsc);
    
    function onClosePressEsc(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    };

    instance.show();
}

console.log();
// console.log(galleryItems);
