import axios from "axios";

axios.defaults.baseURL ='https://pixabay.com/api'
const apiKey = '39311617-8fcbc1db2cff6d5dc5c37136f';

export const getImages = async(query, page = 1) => {
    const response = await axios.get('/', {
        params: {
            key: apiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: page
        }
    })
    return response.data
}