import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3001/admin" })


API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile')
  if (profile)
    req.headers.Authorization = `Bearer ${JSON.parse(profile)?.token}`
  return req
})


API.interceptors.response.use(null, (error) => {
  console.log(error.response?.data?.message)

  if (error.response?.status === 401 &&
    error.response?.data?.message === 'token expiereded') {

    console.warn("axois intercepter", error.response?.data?.message)
    if (localStorage.getItem("profile")) {
      localStorage.clear()
      location.reload(true)
    }
  }
})


const CancelToken = axios.CancelToken
export const source = CancelToken.source()


export const login = (data) => API.post('/login', data, { cancelToken: source.token })
export const getAllCounts = (token) => API.get('/counts', { cancelToken: source.token })
export const getChartData = (token) => API.get('/chartData', { cancelToken: source.token })

