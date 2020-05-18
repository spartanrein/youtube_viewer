import axios from 'axios';

const KEY = 'AIzaSyBN_tAoj-TfJ89_v_WikGnOqn6tEnUVatQ';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
