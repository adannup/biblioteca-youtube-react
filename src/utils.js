import config from './config.json';

const apiURL = query => `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${query}&key=${config.API_KEY}`;

const fetchYoutubeAPI = query => fetch(apiURL(query)).then(response => response.json());

export default fetchYoutubeAPI;
