import Header from '../components/Header'
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';



const Home = () => {
  const sliderCarrousel = require.context('../assets/slider', true);
  const instructores = require.context('../assets/instructores', true);

  return (
    <>
      <Header />
      <div className='bg-slate-700' >

        <div className='flex md:items-center items-end justify-start'>
          <p className='text-white md:text-3xl text-xs text-center md:ml-12  uppercase font-bold absolute  w-48 '>Bienvenidos al Club Especializado <span className='text-red-400'> Apolo </span></p>
          <img className='h-min w-full md:mt-0 mt-20' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' />

        </div>

        {/* //ACERCA DE NOSOTROS */}
        <div className='m-4 text-white flex md:flex-row flex-col-reverse'>
          <div className='md:w-1/3 md:ml-44 m-6'>
            <img className='h-96  ' src={sliderCarrousel(`./2.jpg`)} alt='Imagen' />
          </div>
          <div className='md:w-2/3 md:m-6 m-2'>
            <h1 className='text-2xl uppercase mb-4'>Acerca de nuestro<span className='text-red-400'> club </span></h1>
            <p className='text-justify w:mr-64'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium maxime excepturi nam tenetur dolores. Hic nihil nostrum adipisci quia atque ipsam, explicabo recusandae dicta in debitis sunt unde. Impedit, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ducimus corrupti, hic quibusdam fugiat blanditiis aliquid</p>

          </div>
        </div>

        {/* NUESTROS PROGRAMAS */}
        <div className='m-4 text-white flex md:flex-row flex-col-reverse'>
          <div className='md:w-1/3 md:ml-44 m-6'>
            <img className='h-96  ' src={sliderCarrousel(`./2.jpg`)} alt='Imagen' />
          </div>
          <div className='md:w-2/3 md:m-6 m-2'>
            <h1 className='text-2xl uppercase mb-4'><span className='text-red-400'> Nuestros </span>Programas</h1>
            <p className='text-justify w:mr-64'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium maxime excepturi nam tenetur dolores. Hic nihil nostrum adipisci quia atque ipsam, explicabo recusandae dicta in debitis sunt unde. Impedit, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ducimus corrupti, hic quibusdam fugiat blanditiis aliquid</p>

          </div>
        </div>
        {/* //INSTRUCTORES */}
        <div className=''>
          <h2 className='font-bold md:text-6xl text-2xl flex justify-center text-white mb-4'>Instructores</h2>

          <div className=' text-xl flex flex-col md:flex-row md:justify-around items-center text-white'>
            <div className='bg-slate-800 w-72 rounded-lg m-6'>
              <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={instructores(`./1.jpg`)} alt='Imagen' />
              <h6 className='text-center my-4 font-bold'>Mario Pinto</h6>
            </div>
            <div className='bg-slate-800 w-72 rounded-lg '>
              <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={instructores(`./1.jpg`)} alt='Imagen' />
              <h6 className='text-center my-4 font-bold'>Tatiana Suarez</h6>
            </div>
          </div>
        </div>

        {/* UBICACIÓN*/}

        <h1 className='md:text-6xl text-2xl text-white m-6 uppercase mb-4 text-center'><ion-icon name="navigate-circle-outline"></ion-icon>Ubicación</h1>
        <div className='m-4 text-white flex  md:flex-row flex-col justify-around items-center'>
        
          <div className='md:m-6 m-2'>   
            <NavLink 
            className='flex flex-row items-center m-4'
            to='https://www.google.com/maps/place/Club+Formativo+Apolo/@-0.101196,-78.4549109,17.75z/data=!4m6!3m5!1s0x91d58f12a0be5d2f:0x8c734282396e8ad0!8m2!3d-0.1011077!4d-78.4537148!16s%2Fg%2F11c6lth50z?hl=es&entry=ttu'>
            <img className=" rounded-3xl md:w-96 " src={sliderCarrousel(`./maps.jpg`)} />
          </NavLink>   
          </div>
          <p className='text-center w:mr-64'>Av. Padre Luis Vaccari N9-59 <br></br> Carapungo - Quito - Ecuador</p>
        </div>
        
        <Footer />
      </div>
    </>
  )
}

export default Home