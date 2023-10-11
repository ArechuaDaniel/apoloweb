import { NavLink } from "react-router-dom";


const Header = () => {
  const logo = require.context('../assets', true);
  return (
    <>
      <div className=" text-white uppercase font-bold flex justify-between  h-24 items-center absolute w-full">

        <div className="w-1/3 ">

          <NavLink 
            className='flex flex-row items-center'
            to='/'>
            <img className=" rounded-3xl w-20 h-20 p-2" src={logo(`./logo.jpg`)} />
            <h3 className="hover:text-red-400">Club Especializado Apolo</h3>  
          </NavLink>
          
        </div>
        <div className="w-2/3 ">

          <ul className="p-10 md:text-3xl   flex justify-between">
            <NavLink className='mr-2 hover:text-red-400' to='/'>Home</NavLink>
            <NavLink className='mr-2 hover:text-red-400' to='/quienes-somos'>Quienes somos</NavLink>
            <NavLink className='mr-2 hover:text-red-400' to='/contactanos'>Contáctanos</NavLink>

          </ul>
        </div>
      </div>

    </>
  )
}

export default Header