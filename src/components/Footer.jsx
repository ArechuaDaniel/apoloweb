import React from 'react'

const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
    <>
      <div  className='bg-slate-800 text-white'>
        <div className='p-5'>
          <span className='flex justify-center'>Todos los derechos reservados {fecha} </span>
        </div>
      </div>
    </>
  )
}

export default Footer