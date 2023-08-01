import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer_2 = document.querySelector('.gallery');
const galleryMarkup_2 = createMarkupGallery(galleryItems);
galleryContainer_2.insertAdjacentHTML('beforeend', galleryMarkup_2);
galleryContainer_2.addEventListener('click', clickOnElementGallery);


function createMarkupGallery(galleryItems_2) {
    return galleryItems_2.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`}).join('');

};
function clickOnElementGallery(e) {
    e.preventDefault()
    const isGalleryEl = e.target.classList.contains('gallery__image');
    if (!isGalleryEl) {
        return;
    }
}

const elementGalleryBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

});







console.log(galleryItems);
