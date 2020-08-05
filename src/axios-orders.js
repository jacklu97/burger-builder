import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-49caf.firebaseio.com/'
});

export default instance;