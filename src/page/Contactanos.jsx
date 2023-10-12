import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contactanos = () => {
  return (
    <>
      <Header/>
      <main className='  mx-auto  p-5 md:flex md:justify-center bg-slate-700'>
        <div className="md:w-2/3 lg:w-2/5 ">
          <h1 className='text-red-400  text-4xl capitalize mt-36'>Escribenos</h1>

          <form className='my-10 bg-white shadow rounded-lg p-10'>
          <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                id='nombre'
                placeholder='Tu nombre'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            
            <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='correo@correo.com'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='celular'>Celular</label>
              <input
                type='number'
                id='celular'
                placeholder='0999999999'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            <div className='my-5'>
              <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='mensaje'>Mensaje</label>
              <textarea
                
                id='mensaje'
                placeholder='Tu mensaje'
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
              />
            </div>
            <input
              type='submit'
              value='Enviar'
              className='bg-sky-700 w-full py-3 text-white mb-5 uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
            />
          </form>
        </div>

      </main>

    <Footer/>

    </>
  )
}

export default Contactanos