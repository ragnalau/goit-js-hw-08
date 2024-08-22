// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const createGalleryMarkup = items => {
  return items
    .map(item => {
      const { preview, original, description } = item;
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
         />
          </a>
</li>`;
    })
    .join('');
};

const renderGallery = () => {
    const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
};

renderGallery();

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});