import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Galeria = () => {
  const sliderCarrousel = require.context('../assets/slider', true);
  const logo = require.context('../assets', true);
  const Links = [
    { name: "Home", link: "/apoloweb/" },
    { name: "Galeria", link: "/apoloweb/galeria" },
    { name: "Nosotros", link: "/apoloweb/nosotros" },
    { name: "Contáctanos", link: "/apoloweb/contactanos" },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }


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
          <h1 className='text-white md:text-3xl uppercase m-10'>Ascensos de <span className='text-red-400'> cinturón </span></h1>
          <div className='h-96 md:mx-32 mx-10'>
          <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img className='' src={sliderCarrousel(`./2.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./3.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./4.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./5.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./7.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./8.jpg`)} alt='Imagen' /></SwiperSlide>

      </Swiper>
          </div>

        </div>

        {/* COMPETENCIAS  */}
        <div>
          <h1 className='text-white md:text-3xl uppercase m-10'>CAMPEONATOS</h1>
          <div className='h-96 md:mx-32 mx-10'>
          <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img className='' src={sliderCarrousel(`./2.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./3.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./4.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./5.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./7.jpg`)} alt='Imagen' /></SwiperSlide>
        <SwiperSlide> <img className='' src={sliderCarrousel(`./8.jpg`)} alt='Imagen' /></SwiperSlide>

      </Swiper>
          </div>
          
        </div>

        {/* INFORMACIÓN */}
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