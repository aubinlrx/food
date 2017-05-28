import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://localhost:3001/api/v1';

const encode = encodeURIComponent;
const responseBody = res => res.body;

const requests = {
  delete: url => {
    return superagent.del(`${API_ROOT}${url}`).then(responseBody)
  },
  get: url => {
    return superagent.del(`${API_ROOT}${url}`).then(responseBody)
  },
  put: (url, body) => {
    return superagent.del(`${API_ROOT}${url}`, body).then(responseBody)
  },
  post: (url, body) => {
    return superagent.del(`${API_ROOT}${url}`, body).then(responseBody)
  }
}

// Tags endpoints
const Tags = {
  getAll: () => requests.get('/tags')
};

// Restaurants endpoints
const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = restaurant => Object.assign({}, restaurant, { slug: undefined })
const Restaurants = {
  all: page =>
    requests.get(`/restaurants?${limit(10, page)}`),
  byTag: (tag, page) =>
    requests.get(`/restaurants?${encode(tag)}&${limit(5, page)}`),
  get: slug =>
    requests.get(`/restaurants/${slug}`),
  update: restaurant =>
    requests.put(`/restaurants/${restaurant.slug}`, { restaurant: omitSlug(restaurant) }),
  create: restaurant =>
    requests.post(`/restaurants`, { restaurant })
};

export default {
  Restaurants,
  Tags
}
