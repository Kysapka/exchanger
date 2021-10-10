import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '44a65bcf';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axios.get(`${configOMB.baseURL}?apikey=${key}&t=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axios.get(`${configOMB.baseURL}?apikey=${key}&t=${title}&type=${type }`)
    }
};


export default API;
