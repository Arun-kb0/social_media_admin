import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3001/admin" })
const ClientRoute = axios.create({ baseURL: "http://localhost:3001/" })


API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile')
  if (profile)
    req.headers.Authorization = `Bearer ${JSON.parse(profile)?.token}`
  return req
})


API.interceptors.response.use(null, (error) => {
  console.log(error.response?.data?.message)

  if (error.response.status === 401 &&
    error.response?.data?.message === 'token expiered') {

    console.warn("axois intercepter", error.response?.data?.message)
    if (localStorage.getItem("profile")) {
      localStorage.clear()
      location.reload(true)
    }
  }
  
  throw new Error(
    error?.response?.data?.message
      ? error?.response?.data?.message 
      : error.message
    )
})


const CancelToken = axios.CancelToken
export const source = CancelToken.source()


export const login = (data) => API.post('/login', data, { cancelToken: source.token })
export const getAllCounts = () => API.get('/counts', { cancelToken: source.token })
export const getChartData = () => API.get('/chartData', { cancelToken: source.token })

export const getPosts = (page) => ClientRoute.get(`/posts?page=${page}`, { cancelToken: source.token })

export const getUsers = (page) => API.get(`/users?page=${page}`, { cancelToken: source.token })


