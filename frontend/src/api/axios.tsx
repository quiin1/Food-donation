import axios, { AxiosInstance } from 'axios'
import { baseUrl } from '../until/constants'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl
})

export default axiosInstance