import axios from 'axios';

const API_KEY = `22291580-fa60bbd7949edc60de7cbcd1e`;
const URL = `https://pixabay.com/api/`;

export async function fetchImages(searchText, page = 1) {
  return await axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: '15',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
}
