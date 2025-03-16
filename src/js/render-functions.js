import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGalleryMarkup(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
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
      </li>
    `
    )
    .join('');

  return galleryMarkup;
}

export function updateGallery(gallery, markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function renderSimpleLightbox(markup) {
  let gallerys = new SimpleLightbox('a');
  gallerys.on('show.simplelightbox');

  gallerys.refresh();
}

export function renderError() {
  iziToast.error({
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    theme: 'dark',
    progressBarColor: '#B51B1B',
    maxWidth: '432',
    messageSize: '16',
    //   icon: '',
    position: 'topRight',
    message: `Sorry, there are no images matching your search query. Please, try again!`,
  });
}

export function toggleLoader(loading) {
  const loader = document.querySelector('.loader');
  if (loading) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
}
