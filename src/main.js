import { fetchImages } from './js/pixabay-api.js';
import {
  renderGalleryMarkup,
  updateGallery,
  clearGallery,
  renderSimpleLightbox,
  renderError,
  toggleLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const search = event.target['search-text'].value;

  clearGallery(gallery);
  toggleLoader(true);
  fetchImages(search)
    .then(Images => {
      if (Images.length != 0) {
        // console.log(Images);
        const galleryMarkup = renderGalleryMarkup(Images);
        updateGallery(gallery, galleryMarkup);
        renderSimpleLightbox(galleryMarkup);
      } else {
        renderError();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      toggleLoader(false);
      form.reset();
    });
});
