import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const logo = require.context('../assets', true);
  const Links = [
    {name:"Home", link:"/apoloweb/"},
    {name:"Servicios", link:"/apoloweb/"},
    {name:"Quienes somos", link:"/apoloweb/quienes-somos"},
    {name:"Contáctanos", link:"/apoloweb/contactanos"},
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-800  text-white uppercase font-bold flex md:flex-row flex-col justify-between  h-24 md:items-center absolute w-full">
        {/* Logo del club */}
        <div className="md:w-1/3 w-64">
           <NavLink 
            className='flex flex-row items-center ml-2'
            to='/apoloweb/'>
            <img className=" rounded-3xl w-20 h-20 p-2" src={logo(`./logo.jpg`)} />
            <h3 className="hover:text-red-400 text-xs">Club Especializado <span className="text-red-400">Apolo</span></h3>  
          </NavLink>
          
          <div className=" text-3xl absolute top-6 right-10 cursor-pointer md:hidden"
            onClick={()=>setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        {/* NavBar */}
        <div className={`w-2/3     md:text-white text-red-400  `}>

          <ul className={`w-full bg-slate-800 bg-opacity-75 md:text-xl text-xs  flex md:flex-row flex-col md:justify-around md:items-center items-start transition-all duration-150 ease-in absolute md:static ${open ? "top-20" : "top-[-490px]" }`}>
            {
              Links.map((Link) => (
                <NavLink key={Link.name } className=' p-4 md:hover:text-red-400 md:hover:bg-transparent hover:bg-red-400 w-full hover:text-white ' to={Link.link}>{Link.name}</NavLink>
              ))
            }
             <NavLink className=' p-4 md:hover:text-red-400 md:hover:bg-transparent hover:bg-red-400 w-full hover:text-white ' to='http://sysrickyj09.pythonanywhere.com/login'><ion-icon name="log-in-outline"></ion-icon></NavLink> 

          </ul>
        </div>
      </div>

    </>
  )
}

export default Header