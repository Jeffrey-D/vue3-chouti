

import axios from './axios'

function apiTopNews24(){
    return axios.get('/top/24hr')
}

function apiTopNews72(){
    return axios.get('/top/72hr')
}

function apiTopNews168(){
    return axios.get('/top/168hr')
}

function apiHotNews(){
    return axios.get('/link/hot')
}

export default {
    apiTopNews24,
    apiTopNews72,
    apiTopNews168,
    apiHotNews,
}