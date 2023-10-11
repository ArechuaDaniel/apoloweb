import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Contactanos from '../page/Contactanos'
import QuienesSomos from '../page/QuienesSomos'

const ClubRoutes = () => {
  return (
    <Routes>
        <Route path='/apoloweb/' element={<Home/>}/>
        <Route path='/apoloweb/contactanos' element={<Contactanos/>}/>
        <Route path='/apoloweb/quienes-somos' element={<QuienesSomos/>}/>
    </Routes>
  )
}

export default ClubRoutes