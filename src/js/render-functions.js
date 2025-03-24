import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="info-cards">
        <li class="info-card"><h3>Likes</h3><p>${likes}</p></li>
        <li class="info-card"><h3>Views</h3><p>${views}</p></li>
        <li class="info-card"><h3>Comments</h3><p>${comments}</p></li>
        <li class="info-card"><h3>Downloads</h3><p>${downloads}</p></li>
      </ul>
    </li>`
    )
    .join('');
}

export function updateGallery(gallery, markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

let galleryInstance = null;

export function renderSimpleLightbox() {
  if (!galleryInstance) {
    galleryInstance = new SimpleLightbox('.gallery a');
  } else {
    galleryInstance.refresh();
  }
}

export function renderError(message) {
  iziToast.error({
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    theme: 'dark',
    progressBarColor: '#B51B1B',
    maxWidth: '432',
    messageSize: '16',
    position: 'topRight',
    message,
  });
}

export function toggleLoader(element) {
  element.classList.toggle('hidden');
}

export function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({ top: itemHeight * 2, behavior: 'smooth' });
  }
}
