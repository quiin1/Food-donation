import axios from 'axios'
import { api } from '../until/constants'

export default axios.create({
    baseURL: api.baseURL
})