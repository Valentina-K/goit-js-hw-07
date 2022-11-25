import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector('.gallery');
const items = creatGalleryItems(galleryItems);
let backdrop;

galleryBox.insertAdjacentHTML('beforeend', items);

galleryBox.addEventListener('click', onGalleryBoxClick);

function creatGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </div>`;
    }).join('');
}

function onGalleryBoxClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const img = event.target;
    showModalWindow(img);    
}

function showModalWindow(element) {
    const instance = basicLightbox.create(`
        <div class="modal">
            <img class="gallery__image" src="${element.dataset.source}" alt="${element.alt}">        
        </div>
    `)
    backdrop = instance;
    window.addEventListener('keydown', onEscKeyPress);
    instance.show();
}

function onEscKeyPress(even) {
    if (even.code === 'Escape') {
        window.removeEventListener('keydown', onEscKeyPress);
        if (document.querySelector('.basicLightbox') !== null) {
            backdrop.close();
        }
    }
}

