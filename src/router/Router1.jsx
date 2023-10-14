import {Routes,Route} from 'react-router-dom'
import Router2 from "./Router2"
import Login from "../paginas/Login"

const Router = () => {
  return (
   <>
   
   <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="/*" element={<Router2/>}/>
   </Routes>
   </>
  )
}

export default Router