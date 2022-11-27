import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector('.gallery');
const items = creatGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', items);
let gallery = new SimpleLightbox('.gallery a',
    { captionDelay: 250, captionsData: 'alt', captionPosition: 'bottom'});

function creatGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `        
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
            </a>`;
    }).join('');
};