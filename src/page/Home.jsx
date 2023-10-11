import Header from '../components/Header'
import Footer from '../components/Footer';



const Home = () => {
  const sliderCarrousel = require.context('../assets/slider', true);
  const instructores = require.context('../assets/instructores', true);

  return (
    <>
      <Header />
      <div className='bg-slate-700 ' >
        
          <div className=''>
            <p className='text-white text-3xl text-center items-center ml-6 uppercase font-bold absolute w-48 mt-44'>Bienvenidos al Club Especializado <span className='text-red-400'> Apolo </span></p>
            <img className='h-min w-full' src={sliderCarrousel(`./6.jpg`)} alt='Imagen' />

          </div>
          
        <div className='m-4 text-white flex'>
          <div className='w-1/3 ml-44'>
            <img className='h-96  ' src={sliderCarrousel(`./2.jpg`)} alt='Imagen' />
          </div>
          <div className='w-2/3 m-6'>
            <h1 className='text-2xl uppercase mb-4'>Acerca de nuestro<span className='text-red-400'> club </span></h1>
            <p className='text-justify mr-64'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium maxime excepturi nam tenetur dolores. Hic nihil nostrum adipisci quia atque ipsam, explicabo recusandae dicta in debitis sunt unde. Impedit, ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ducimus corrupti, hic quibusdam fugiat blanditiis aliquid</p>
            
          </div>
        </div>

        <div className=''>
          <h2 className='font-bold text-6xl flex justify-center text-white mb-4'>Instructores</h2>

          <div className=' text-xl flex justify-around text-white'>
            <div className='bg-slate-800 w-72 rounded-lg '>
              <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={instructores(`./1.jpg`)} alt='Imagen' />
              <h6 className='text-center my-4 font-bold'>Mario Pinto</h6>
            </div>
            <div className='bg-slate-800 w-72 rounded-lg '>
              <img className='h-80 w-52 mx-auto my-4 rounded-md ' src={instructores(`./1.jpg`)} alt='Imagen' />
              <h6 className='text-center my-4 font-bold'>Tatiana Suarez</h6>
            </div>
          </div>
        </div>


        <div className='m-4 text-white'>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed a sit harum repudiandae exercitationem cumque tempore impedit, autem at facere id praesentium eos consequuntur quae repellat non ex, incidunt vero?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia blanditiis harum illum eum temporibus quis in, modi ut minima quaerat ullam iste nemo perspiciatis dolor nostrum. Voluptas sequi molestiae voluptates?</p>
        </div>
        <div>
          <p>Dirección</p>
          
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home