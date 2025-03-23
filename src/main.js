import { fetchImages } from './js/pixabay-api.js';
import {
  renderGalleryMarkup,
  updateGallery,
  clearGallery,
  renderSimpleLightbox,
  renderError,
  toggleLoader,
  smoothScroll,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.loadMore');
const loader = document.querySelector('.Loadmore').children;

let lastSearch = '';
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  lastSearch = event.target['search-text'].value.trim();
  if (!lastSearch) return;

  clearGallery(gallery);
  toggleLoader(loader[0]);

  try {
    const images = await fetchImages(lastSearch);
    if (images.length) {
      page = 1;
      updateGallery(gallery, renderGalleryMarkup(images));
      renderSimpleLightbox();
    } else {
      renderError('Sorry, there are no images matching your search query.');
    }
  } catch (error) {
    renderError('Error fetching images, please try again.');
  } finally {
    toggleLoader(loader[0]);
    toggleLoader(loader[1]);
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  toggleLoader(loader[0]);
  toggleLoader(loader[1]);
  try {
    const images = await fetchImages(lastSearch, ++page);
    if (images.length) {
      updateGallery(gallery, renderGalleryMarkup(images));
      renderSimpleLightbox();
    } else {
      renderError(`You've reached the end of search results.`);
    }
  } catch (error) {
    renderError('Error loading more images.');
  } finally {
    smoothScroll();
    toggleLoader(loader[0]);
    toggleLoader(loader[1]);
  }
});
