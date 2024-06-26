
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Watchhistrory from './pages/Watchhistrory'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'
function App() {


  return (
    <>
    <Header/>
    {/* {slah represents base url} */}
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route> 
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/watch-history' element={<Watchhistrory/>}></Route>
        </Routes> 
      <Footer/>
    </>
  )
}

export default App
