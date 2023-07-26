import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import titleImage from "../assets/dashboard/title/1.png"

export const baseUrl = 'http://localhost:5000'
export const api = {
  LOGIN: baseUrl + '/auth/login',
  SIGNUP: baseUrl + '/auth/register',
  GET_ALL_POSTS: baseUrl + '/posts',
  CREATE_POST: baseUrl + '/posts',
  UPDATE_POST: baseUrl + '/posts',
  DELETE_POST: baseUrl + '/posts',
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl
})
export default axiosInstance

export async function getAllPosts(setRows: Function, setLoading: Function) {
  try {
      const token = Cookies.get('access_token')
      await axios.get(api.GET_ALL_POSTS, {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then((response) => {
              // console.log("response getAllPosts", response.data)
              let newRows: any[] = []
              response.data.forEach((item: any) => {
                  const newRow = {
                      _id: item._id,
                      id: item.id,
                      img: titleImage,
                      title: item.title,
                      releaseDate: item.releaseDate,
                      view: 200,
                      status: 'Online'
                  }
                  newRows.push(newRow)
              })
              setRows(newRows)
              setLoading(false)
          })
  } catch (error) {
      console.log("error", error)
  }
}

export async function postCreatePost(post: any) {
  try {
      const token = Cookies.get('access_token')
      await axios.post(api.CREATE_POST, post,
          {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then((response) => {
              console.log("response create Post", response.data)
          })
  } catch (error) {
      console.log("error at post create post", error)
  }
}

export async function deletePost(_id: number) {
  try {
      const token = Cookies.get('access_token')
      console.log("_id", _id)
      await axios.delete(`${api.DELETE_POST}/${_id}`, {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then((response) => {
              console.log("response delete Post", response.data)
          })
  } catch (error) {
      console.log("error at deletePost", error)
  }
}

export async function updatePost(_id: number, req: any) {
  try {
      const token = Cookies.get('access_token')
      console.log("_id", _id)
      await axios.put(`${api.UPDATE_POST}/${_id}`, req, {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then((response) => {
              console.log("response update Post", response.data)
          })
  } catch (error) {
      console.log("error at update", error)
  }
}