import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Users from "./Pages/users/Users"
import User from "./Pages/users/User"
import Posts from "./Pages/posts/Posts"
import Post from "./Pages/posts/Post"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Auth from "./Pages/auth/Auth"
import { useEffect, useState, useSyncExternalStore } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLocalStroageUser } from "./redux/features/auth/authActions"
import Log from "./Pages/log/Log"


const App = () => {
  const dispatch = useDispatch()
  const [isCancelled, setIsCancelled] = useState(false)
  const { token } = useSelector(state => state.auth)
  useEffect(() => {
    if (!isCancelled)
      dispatch(getLocalStroageUser())
    return () => setIsCancelled(true)
  }, [])





  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={token ? <Home /> : <Navigate to="/auth" />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/users'>
              <Route index element={token ? <Users /> : <Navigate to="/auth" />} />
              <Route path=':userId' element={token ? <User /> : <Navigate to="/auth" />} />
            </Route>
            <Route path='/posts'>
              <Route index element={token ? <Posts /> : <Navigate to="/auth" />} />
              <Route path=':postId' element={token ? <Post /> : <Navigate to="/auth" />} />
            </Route>
            <Route path='/logs' element={token ? <Log /> : <Navigate to="/auth" />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App