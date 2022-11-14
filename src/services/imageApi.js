const API_KEY = '30098517-b57c06f0b96fc3ff10cf16452';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImg = (searchQuery, page) => {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`On request ${searchQuery} no images`));
    }
    return response.json();
  });
};
