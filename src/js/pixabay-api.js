import axios from 'axios';

export function fetchImages(searchText) {
  const API_KEY = '22291580-fa60bbd7949edc60de7cbcd1e';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=9&orientation=horizontal&safesearch=true`;

  return axios
    .get(url)
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      throw new Error(error);
    });
}
