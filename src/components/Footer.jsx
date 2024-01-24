import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
    <>

      <div className='bg-slate-800 text-white flex md:flex-row flex-col justify-around   uppercase'>
        <div className='m-4 md:w-1/3'>
        <h1 className='text-center mt-4'>CLUB ESPECIALIZADO FORMATIVO <span className='text-red-400'>APOLO</span> </h1>
        <p className='text-justify m-4'>Con más de 30 años de experiencia al servicio de la comunidad, ofreciendo resultados confiables y garantizados.</p>
        </div>
        {/* CONTACTO */}
        <div className='m-4 md:w-1/3'>
          <h1 className='text-center mt-4'>Contacto</h1>
          <p className='lowercase mt-4 text-center'><ion-icon name="mail-outline"></ion-icon> club.apolo@hotmail.com</p>
          <p className='mt-4 text-center'><ion-icon name="call-outline"></ion-icon> 0960073310</p>
        </div>
        {/* REDES SOCIALES */}
        <div className='m-4 md:w-1/3 '>
          <h1 className='text-center mt-4'>Redes Sociales</h1>
          <div className='flex flex-row justify-around mt-4 text-3xl'>
          <NavLink 
            className='flex flex-row items-center ml-2 hover:text-red-400 '
            target="_blank"
            to='https://www.facebook.com/club.apolo1'>
            <ion-icon name="logo-facebook"></ion-icon>
          </NavLink>
          <NavLink 
            className='flex flex-row items-center ml-2 hover:text-red-400 '
            target="_blank"
            to='https://www.tiktok.com/@club.apolo?_t=8YtMmXggyWc&_r=1'>
            <ion-icon name="logo-tiktok"></ion-icon>
          </NavLink>
          <NavLink 
            className='flex flex-row items-center ml-2 hover:text-red-400 '
            target="_blank"
            to='https://www.instagram.com/club.apolo/?igshid=YmMyMTA2M2Y%3D'>
            <ion-icon name="logo-instagram"></ion-icon>
          </NavLink>
          <NavLink 
            className='flex flex-row items-center ml-2 hover:text-red-400 '
            target="_blank"
            to='https://api.whatsapp.com/send?phone=593960073310&text=hola,%20m%C3%A1s%20informaci%C3%B3n%20por%20favor%20'>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </NavLink>
          
          
          
          </div>
        </div>
      </div>
      {/* DERECHOS RESERVADOS */}
      <div className='bg-slate-800 text-white p-5'>
        <span className='flex justify-center text-center'>Todos los derechos reservados ODSMARTECH {fecha} </span>
      </div>
    </>
  )
}

export default Footer