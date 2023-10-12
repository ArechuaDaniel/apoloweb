import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';

const Nosotros = () => {
    const sliderCarrousel = require.context('../assets/slider', true);
    const logo = require.context('../assets', true);
    return (
        <>
            <Header />
            <div className='flex md:items-center items-end justify-center bg-slate-700'>
                <p className='absolute text-white decoration-sky-600 md:text-9xl text-2xl   text-center  uppercase font-bold   '>Contáctanos</p>
                <img className='w-full   mt-24 ' src={sliderCarrousel(`./niños1.jpg`)} alt='Imagen' />
            </div>
            <div className='bg-slate-700 text-white'>

                <div className=''>
                    {/* VISION */}
                    <div className='flex md:flex-row flex-col justify-around items-center'>
                        <div className='md:w-1/3 md:ml-48 m-6'>
                            <h1 className='md:text-3xl text-2xl'>VISIÓN</h1>
                            <p className='text-justify mt-4'>
                                Nuestra visión es convertirnos en una academia líder en taekwondo reconocida a nivel local y nacional. Nos esforzamos por ser un referente en la formación de atletas de alto rendimiento, así como en la promoción de estilos de vida saludables a través de la práctica del taekwondo. Buscamos generar un impacto positivo en la comunidad, fomentando valores de respeto, responsabilidad y superación personal. Aspiramos a ser un centro de excelencia en la enseñanza del taekwondo, brindando programas de calidad y oportunidades de crecimiento para nuestros estudiantes.</p>

                        </div>
                        <div className='md:w-2/3 rounded-lg m-6 '>
                            <img className='rounded-md ' src={sliderCarrousel(`./7.jpg`)} alt='Imagen' />
                        </div>
                    </div>

                    {/* MISION */}
                    <div className='flex md:flex-row-reverse flex-col justify-center items-center'>
                        <div className='md:w-1/2 md:mr-48 m-6'>
                            <h1 className='md:text-3xl text-2xl text-red-400'>MISIÓN</h1>
                            <p className='text-justify mt-4'>
                                Nuestra misión es proporcionar a nuestros estudiantes una educación integral en taekwondo, promoviendo el desarrollo físico, mental y espiritual. Nos comprometemos a enseñar las técnicas y valores fundamentales del taekwondo, fomentando el respeto, la disciplina y el trabajo en equipo. Buscamos formar atletas competentes y personas de carácter íntegro que puedan enfrentar los desafíos de la vida con confianza y determinación.</p>

                        </div>
                        <div className='md:w-1/2 rounded-lg m-6 '>
                            <img className='rounded-md ' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' />
                        </div>
                    </div>
                </div>
                <div className='md:mx-auto mx-6 md:w-1/2'>
                    <h1 className='md:text-3xl text-xl'>ÚNETE A NUESTRO <span className='text-red-400'>CLUB</span> </h1>
                    <p className='uppercase text-justify my-6'>Forma parte de nuestra institución, CON MÁS DE 30 AÑOS DE EXPERIENCIA AL SERVICIO DE LA COMUNIDAD, OFRECIENDO RESULTADOS CONFIABLES Y GARANTIZADOS.</p>

                    <NavLink
                        className='flex justify-center'
                        to='https://api.whatsapp.com/send?phone=593960073310&text=hola,%20m%C3%A1s%20informaci%C3%B3n%20por%20favor%20'>
                        <h1 className='bg-sky-700 md:w-56 w-full text-center py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'>Más Información</h1>

                    </NavLink>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Nosotros