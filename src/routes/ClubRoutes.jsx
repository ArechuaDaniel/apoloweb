import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../page/Home'
import Contactanos from '../page/Contactanos'
import Nosotros from '../page/Nosotros'
import Galeria from '../page/Galeria'

const ClubRoutes = () => {
  return (
    <Routes>
        <Route path='/apoloweb/' element={<Home/>}/>
        <Route path='/apoloweb/contactanos' element={<Contactanos/>}/>
        <Route path='/apoloweb/galeria' element={<Galeria/>}/>
        <Route path='/apoloweb/nosotros' element={<Nosotros/>}/>

        
    </Routes>
  )
}

export default ClubRoutes