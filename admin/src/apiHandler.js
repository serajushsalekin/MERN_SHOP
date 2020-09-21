import axios from 'axios'

const url = 'http://localhost:3001'

const api = axios.create({
    baseURL: url,
})

export default api