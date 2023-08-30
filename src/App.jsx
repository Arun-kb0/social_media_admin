import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Users from "./Pages/users/Users"
import User from "./Pages/users/User"
import Posts from "./Pages/posts/Posts"
import Post from "./Pages/posts/Post"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Auth from "./Pages/auth/Auth"
import { useEffect, useState, useSyncExternalStore } from "react"
import { useDispatch } from "react-redux"
import { getLocalStroageUser } from "./redux/features/auth/authActions"


const App = () => {
  const dispatch = useDispatch()
  const [isCancelled, setIsCancelled] = useState(false)

  useEffect(() => {
    if (!isCancelled)
      dispatch(getLocalStroageUser())
    return () => setIsCancelled(true)
  }, [])


  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/users'>
              <Route index element={<Users />} />
              <Route path=':userId' element={<User />} />
            </Route>
            <Route path='/posts'>
              <Route index element={<Posts />} />
              <Route path=':postId' element={<Post />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App