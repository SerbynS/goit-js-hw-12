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

let totalHits = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();
  lastSearch = event.target['search-text'].value.trim();
  if (!lastSearch) return;

  clearGallery(gallery);
  toggleLoader(loader[0]);

  try {
    const response = await fetchImages(lastSearch);
    console.log(response);
    const images = response.hits;
    totalHits = response.totalHits;

    if (images.length) {
      page = 1;
      updateGallery(gallery, renderGalleryMarkup(images));
      renderSimpleLightbox();

      if (totalHits > 15) {
        loadMoreBtn.classList.remove('hidden');
      } else {
        loadMoreBtn.classList.add('hidden');
      }
    } else {
      renderError('Sorry, there are no images matching your search query.');
      loadMoreBtn.classList.add('hidden');
    }
  } catch (error) {
    renderError('Error fetching images, please try again.');
  } finally {
    toggleLoader(loader[0]);
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  toggleLoader(loader[0]);
  try {
    page++;
    const response = await fetchImages(lastSearch, page);
    const images = response.hits;

    if (images.length) {
      updateGallery(gallery, renderGalleryMarkup(images));
      renderSimpleLightbox();

      const totalLoaded = page * 15;
      if (totalLoaded >= totalHits) {
        loadMoreBtn.classList.add('hidden');
      }
    } else {
      loadMoreBtn.classList.add('hidden');
    }
  } catch (error) {
    renderError('Error loading more images.');
  } finally {
    smoothScroll();
    toggleLoader(loader[0]);
  }
});
