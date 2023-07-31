import axios, { AxiosInstance, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import titleImage from "../assets/dashboard/title/1.png"

export const baseUrl = 'http://localhost:5000'
const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl
})
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response.data, // Chỉ lấy dữ liệu từ phản hồi
    (error) => Promise.reject(error) // Xử lý lỗi nếu cần thiết
);
export default axiosInstance

export const api = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/register',
  GET_POSTS: '/posts',
  CREATE_POST: '/posts',
  UPDATE_POST: '/posts',
  DELETE_POST: '/posts',
}

interface Data {

}

interface PostData extends Data {
    posts: any,
    page?: number,
    pageLimit?: number,
    totalRows?: number
}

type Response = {
    error?: string,
    data?: Data,
    message?: string
}

export async function getAllPosts(setRows: Function, setLoading: Function) {
    try {
        const token = Cookies.get('access_token')
        await axiosInstance.get(api.GET_POSTS, {
                headers: {
                    Authorization: `Bearer ${token}` // Thêm token vào header Authorization
                }
            }).then(({data}) => {
                // console.log("response getAllPosts", data)
                let newRows: any[] = []
                data.posts.forEach((item: any) => {
                    const newRow = {
                        _id: item._id,
                        id: item.id,
                        img: item.img || titleImage,
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

export async function getPosts(params: any, setRows: Function, setTotalRows: Function, setLoading: Function) {
    try {
        setLoading(true)
        const token = Cookies.get('access_token')
        await axiosInstance.get(api.GET_POSTS, {
            headers: {
                Authorization: `Bearer ${token}` // Thêm token vào header Authorization
            },
            params,
        }).then(({data}) => {
            // console.log("response getPosts", data)

            let newRows: any[] = []
            data.posts.forEach((item: any) => {
                const newRow = {
                    _id: item._id,
                    id: item.id,
                    img: item.img || titleImage,
                    title: item.title,
                    releaseDate: item.releaseDate,
                    view: 200,
                    status: 'Online'
                }
                newRows.push(newRow)
            })
            setRows(newRows)
            setTotalRows(data.count)
            setLoading(false)
        })
    } catch (error) {
        console.log("error", error)
    }
}

export async function postCreatePost(post: any) {
  try {
      const token = Cookies.get('access_token')
      await axiosInstance.post(api.CREATE_POST, post,
          {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then(({data}) => {
            //   console.log("response create Post", data)
          })
  } catch (error) {
      console.log("error at post create post", error)
  }
}

export async function deletePost(_id: number) {
  try {
      const token = Cookies.get('access_token')
    //   console.log("_id", _id)
      await axiosInstance.delete(`${api.DELETE_POST}/${_id}`, {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then(({data}) => {
            //   console.log("response delete Post", data)
          })
  } catch (error) {
      console.log("error at deletePost", error)
  }
}

export async function updatePost(_id: number, req: any) {
  try {
      const token = Cookies.get('access_token')
    //   console.log("_id", _id)
      await axiosInstance.put(`${api.UPDATE_POST}/${_id}`, req, {
              headers: {
                  Authorization: `Bearer ${token}` // Thêm token vào header Authorization
              }
          }).then(({data}) => {
              console.log("response update Post", data)
          })
  } catch (error) {
      console.log("error at update", error)
  }
}