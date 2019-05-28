import axios from 'axios';

const instance = axios.create({
    baseURL: "https://myburger-ea099.firebaseio.com/"
});

export default instance;