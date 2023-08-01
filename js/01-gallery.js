import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createMarkupGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', clickOnElementGallery);


function createMarkupGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');

};

function clickOnElementGallery(e) {
    e.preventDefault();
    const isGalleryEl = e.target.classList.contains('gallery__image');
    const urlBigImage = e.target.dataset.source;
    if (!isGalleryEl) {
        return;

    };
    addModalWindow(urlBigImage);
};

function addModalWindow(urlBigImage) {
    const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            <img src="${urlBigImage}" width="800" height="600">
        </p>
    </div>`,
        { onShow: (instance) => { document.addEventListener('keydown', registrationEventKey) } },
        { closeShow: (instance) => { document.removeEventListener('keydown', registrationEventKey) } });

    instance.show();

    function registrationEventKey(e) {
        if (e.code === 'Escape')
            return instance.close();
    };
};

console.log(galleryItems);
