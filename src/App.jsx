import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"


const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default  App