import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://my-burger-app-86746.firebaseio.com/'
});

export default instance;