import axios from 'axios';

const API_KEY = '3c255862ff74050ccdb5109073919cb8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function trendingmoviesRequest() {
  try {
    const response = await axios.get(`trending/movie/day?`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function movieInfoRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function moviesQueryRequest(search) {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: search,
        include_adult: false,
        page: 1,
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function castRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}

export async function reviewsRequest(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response;
  } catch (error) {
    console.log('error = ', error);
  }
}
