import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const Contactanos = () => {
  const sliderCarrousel = require.context('../assets/slider', true);
  const logo = require.context('../assets', true);
  return (
    <>
      <Header />
      <div className='flex md:items-center items-end justify-center bg-slate-700'>
        <p className='absolute text-white decoration-sky-600 md:text-9xl text-2xl   text-center  uppercase font-bold   '>Contáctanos</p>
        <img className='w-full   mt-24 ' src={sliderCarrousel(`./10.jpg`)} alt='Imagen' />
      </div>


      <div className=' flex md:flew-row lg:flex-row flex-col p-5  bg-slate-700'>


        {/* INFORMACION */}
        <div className='text-white md:w-1/2 bg-slate-800 rounded-3xl m-4'>
          <div className='m-10'>

            <p className='my-4'>COMUNÍCATE CON NOSOTROS</p>
            <p className='md:text-3xl text-xl '>ESTAMOS EN EL NORTE DE QUITO  </p>


            {/* MATRIZ */}
            <p className='text-red-400 md:text-3xl text-xl mt-4'><span className='text-white'>MATRIZ</span> CARAPUNGO</p>
            <p className='text-justify'>Sobre la Avenida Padre Luis Vacari y Galo Plaza Lazo esquina a unos pocos metros de FONVIDA, segundo Piso</p>

            <div className='flex justify-between'>

              {/* INFORMACIÓN */}
              <div className='my-4 '>
                <h1 className='text-center mt-4'>Contacto</h1>
                <p className='lowercase mt-4 text-center'><ion-icon name="mail-outline"></ion-icon> club.apolo@hotmail.com</p>
                <p className='mt-4 text-center'><ion-icon name="call-outline"></ion-icon> 0960073310</p>
              </div>
              {/* UBICACIÓN */}
            <div className=' '>
                <NavLink
                  className=''
                  to='https://www.google.com/maps/place/Club+Formativo+Apolo/@-0.101196,-78.4549109,17.75z/data=!4m6!3m5!1s0x91d58f12a0be5d2f:0x8c734282396e8ad0!8m2!3d-0.1011077!4d-78.4537148!16s%2Fg%2F11c6lth50z?hl=es&entry=ttu'>
                  <img className=" rounded-3xl md:w-44 " src={sliderCarrousel(`./maps.jpg`)} />
                </NavLink>
            </div>
            
            </div>

            {/* SUCURSAL */}
            <p className='text-red-400 md:text-3xl text-xl'><span className='text-white'>SUCURSAL</span> MARIANAS</p>
            <p className='text-justify'>Sobre la Avenida Padre Luis Vacari y Galo Plaza Lazo esquina a unos pocos metros de FONVIDA, segundo Piso</p>

            <div className='flex justify-between'>

              {/* INFORMACIÓN */}
              <div className='my-4 '>
                <h1 className='text-center mt-4'>Contacto</h1>
                <p className='lowercase mt-4 text-center'><ion-icon name="mail-outline"></ion-icon> club.apolo@hotmail.com</p>
                <p className='mt-4 text-center'><ion-icon name="call-outline"></ion-icon> 0960073310</p>
              </div>
              {/* UBICACIÓN */}
              <div className=' '>
                <NavLink
                  className=''
                  to='https://www.google.com/maps/place/Club+Formativo+Apolo/@-0.101196,-78.4549109,17.75z/data=!4m6!3m5!1s0x91d58f12a0be5d2f:0x8c734282396e8ad0!8m2!3d-0.1011077!4d-78.4537148!16s%2Fg%2F11c6lth50z?hl=es&entry=ttu'>
                  <img className=" rounded-3xl md:w-44 " src={sliderCarrousel(`./maps.jpg`)} />
                </NavLink>
            </div>
            </div>


          </div>
        </div>
        {/* FORMULARIO */}
        <div className="md:w-1/2 bg-slate-800 pt-10 rounded-3xl md:m-4">
          <h1 className='text-white md:text-2xl text-center text-sm capitalize '>DÉJANOS TUS MENSAJES Y SUGERENCIAS
          </h1>
          <p className='text-white  m-6 md:text-xl text-sm'>Será un gusto poder ayudarte</p>

          <form className='m-6  shadow rounded-lg p-4'>
            <div className=''>
              <label className='uppercase text-white block text-xl font-bold' htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                id='nombre'
                placeholder='Tu nombre'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>

            <div className='my-5'>
              <label className='uppercase text-white block text-xl font-bold' htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='correo@correo.com'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            <div className='my-5'>
              <label className='uppercase text-white block text-xl font-bold' htmlFor='celular'>Celular</label>
              <input
                type='number'
                id='celular'
                placeholder='0999999999'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            <div className='my-5'>
              <label className='uppercase text-white block text-xl font-bold' htmlFor='mensaje'>Mensaje</label>
              <textarea

                id='mensaje'
                placeholder='Tu mensaje'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            <input
              type='submit'
              value='Enviar'
              className='bg-sky-700 w-full py-3 text-white mb-5 uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
            />
          </form>
        </div>

      </div>

      <Footer />

    </>
  )
}

export default Contactanos