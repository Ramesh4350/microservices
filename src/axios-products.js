import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://product-ms.herokuapp.com'
});

export default instance;