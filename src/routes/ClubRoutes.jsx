import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Contactanos from '../page/Contactanos'


import Nosotros from '../page/Nosotros'
import Servicios from '../page/Servicios'

const ClubRoutes = () => {
  return (
    <Routes>
        <Route path='/apoloweb/' element={<Home/>}/>
        <Route path='/apoloweb/contactanos' element={<Contactanos/>}/>
        <Route path='/apoloweb/Servicios' element={<Servicios/>}/>
        <Route path='/apoloweb/nosotros' element={<Nosotros/>}/>
    </Routes>
  )
}

export default ClubRoutes