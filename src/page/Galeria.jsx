import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Galeria = () => {
    const sliderCarrousel = require.context('../assets/slider', true);
    const logo = require.context('../assets', true);
    const Links = [
        { name: "Home", link: "/apoloweb/" },
        { name: "Galeria", link: "/apoloweb/galeria" },
        { name: "Nosotros", link: "/apoloweb/nosotros" },
        { name: "Contáctanos", link: "/apoloweb/contactanos" },
      ];



  return (
    <>    
            <div className='bg-slate-700'>

            <Header />
            <div className='flex md:items-center items-end justify-center bg-slate-700'>
                <p className='absolute text-white decoration-sky-600 md:text-9xl text-2xl   text-center  uppercase font-bold   '>Galería</p>
                <img className='w-full   mt-24 ' src={sliderCarrousel(`./niños1.jpg`)} alt='Imagen' />
            </div>

              {/* IMAGENES */}

             {/* ASCENSOS  */}
            <div>
            <h1 className='text-white md:text-3xl uppercase m-4'>Ascensos de <span className='text-red-400'> cinturón </span></h1>

            <div className='bg-slate-700 grid md:grid-cols-4 m-4 w-full '>
            
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./5.jpg`)} alt='Imagen' />
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' />
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./7.jpg`)} alt='Imagen' />
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./10.jpg`)} alt='Imagen' />
            </div>
            </div>

            {/* COMPETENCIAS  */}
            <div>
            <h1 className='text-white md:text-3xl uppercase m-4'>CAMPEONATOS</h1>

            <div className='bg-slate-700 grid md:grid-cols-4 m-4 w-full '>
            
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./11.jpg`)} alt='Imagen' />
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./7.jpg`)} alt='Imagen' />
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' />
            <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={sliderCarrousel(`./8.jpg`)} alt='Imagen' />
            </div>
            </div>

            
            <div className='md:mx-auto text-white m-6 md:w-1/2 bg-slate-800 rounded-xl mb-6'>
                    <h1 className='md:text-3xl text-xl m-4 pt-4'>ÚNETE A NUESTRO <span className='text-red-400'>CLUB</span> </h1>
                    <p className='uppercase text-justify m-4'>Forma parte de nuestra institución, CON MÁS DE 30 AÑOS DE EXPERIENCIA AL SERVICIO DE LA COMUNIDAD, OFRECIENDO RESULTADOS CONFIABLES Y GARANTIZADOS.</p>

                    <NavLink
                        className='flex justify-center'
                        to='https://api.whatsapp.com/send?phone=593960073310&text=hola,%20m%C3%A1s%20informaci%C3%B3n%20por%20favor%20'>
                        <h1 className='bg-sky-700 m-6 md:mb-6 md:w-56  w-full text-center py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'>Más Información</h1>

                    </NavLink>
          </div>


          
            
           
            <Footer />
            </div>
        </>
  )
}

export default Galeria