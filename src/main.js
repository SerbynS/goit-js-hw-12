// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// iziToast.error({
//   backgroundColor: '#EF4040',
//   messageColor: '#FAFAFB',
//   theme: 'dark',
//   progressBarColor: '#B51B1B',
//   maxWidth: '432',
//   messageSize: '16',
//   //   icon: '',
//   position: 'topRight',
//   message: `Sorry, there are no images matching your search query. Please, try again!`,
// });
// const form = document.querySelector('.form');
// const gallery = document.querySelector('.gallery');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const search = event.target['search-text'].value;
//   fetch(
//     `https://pixabay.com/api/?key=22291580-fa60bbd7949edc60de7cbcd1e&q=${search}&image_type=photo&per_page=10`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data.hits);

//       const galleryMarkup = data.hits
//         .map(
//           ({
//             webformatURL,
//             largeImageURL,
//             likes,
//             views,
//             comments,
//             downloads,
//           }) =>
//             `
//           <li class="gallery-item">
//         <a
//           class="gallery-link"
//           href="${webformatURL}"
//         >
//           <img
//             class="gallery-image"
//             src="${largeImageURL}"
//             alt=""
//           />
//         </a>
//         <ul class="info-cards">
//           <li class="info-card">
//             <h3>Likes</h3>
//             <p>${likes}</p>
//           </li>
//           <li class="info-card">
//             <h3>Views</h3>
//             <p>${views}</p>
//           </li>
//           <li class="info-card">
//             <h3>Comments</h3>
//             <p>${comments}</p>
//           </li>
//           <li class="info-card">
//             <h3>Downloads</h3>
//             <p>${downloads}</p>
//           </li>
//         </ul>
//       </li>
//           `
//         )
//         .join('');

//       gallery.insertAdjacentHTML('beforeend', galleryMarkup);
//     })
//     .catch(error => console.log(error));
// });

import { space } from 'postcss/lib/list';
import { fetchImages } from './js/pixabay-api.js';
import {
  renderGalleryMarkup,
  updateGallery,
  clearGallery,
  renderSimpleLightbox,
  renderError,
  toggleLoader,
} from './js/render-funcions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault();
  const search = event.target['search-text'].value;

  clearGallery(gallery);

  fetchImages(search)
    .then(Images => {
      toggleLoader(true);
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
