import React from 'react'

const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
    <>
      <div className='bg-slate-800 text-white flex md:flex-row flex-col justify-around   uppercase'>
        <div className='m-4 md:w-1/3'>
        <h1 className='text-center mt-4'>CLUB ESPECIALIZADO FORMATIVO <span className='text-red-400'>APOLO</span> </h1>
        <p className='text-justify m-4'>Con más de 30 años de experiencia al servicio de la comunidad, ofreciendo resultados confiables y garantizados.</p>
        </div>
        <div className='m-4 md:w-1/3'>
          <h1 className='text-center mt-4'>Contacto</h1>
          <p className='lowercase mt-4 text-center'><ion-icon name="mail-outline"></ion-icon> club.apolo@hotmail.com</p>
          <p className='mt-4 text-center'><ion-icon name="call-outline"></ion-icon> 0960073310</p>
        </div>
        <div className='m-4 md:w-1/3 '>
          <h1 className='text-red-400 text-center mt-4'>Redes Sociales</h1>
          <div className='flex flex-row justify-around mt-4 text-3xl'>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-tiktok"></ion-icon>
          <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </div>
      </div>
      {/* DERECHOS RESERVADOS */}
      <div className='bg-slate-800 text-white p-5'>
        <span className='flex justify-center text-center'>Todos los derechos reservados PortoSystemsDA {fecha} </span>
      </div>
    </>
  )
}

export default Footer