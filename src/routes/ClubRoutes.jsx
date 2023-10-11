import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Contactanos from '../page/Contactanos'
import QuienesSomos from '../page/QuienesSomos'

const ClubRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='/quienes-somos' element={<QuienesSomos/>}/>
    </Routes>
  )
}

export default ClubRoutes