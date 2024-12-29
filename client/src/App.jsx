import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Profile from './pages/profile'
import Aboutus from './pages/Aboutus'
import Signup from './pages/Signup'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
  </Routes>
  </BrowserRouter>
}
