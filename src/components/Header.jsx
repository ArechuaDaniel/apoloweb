import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const logo = require.context('../assets', true);
  const Links = [
    {name:"Home", link:"/apoloweb/"},
    {name:"Servicios", link:"/apoloweb/"},
    {name:"Acerca", link:"/apoloweb/"},
    {name:"Quienes somos", link:"/apoloweb/quienes-somos"},
    {name:"Contáctanos", link:"/apoloweb/contactanos"},
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-800  text-white uppercase font-bold flex md:flex-row flex-col justify-between  h-24 items-center absolute w-full ">
        {/* Logo del club */}
        <div className="md:w-1/3 w-full">
          <NavLink 
            className='flex flex-row items-center'
            to='/apoloweb/'>
            <img className=" rounded-3xl w-20 h-20 p-2" src={logo(`./logo.jpg`)} />
            <h3 className="hover:text-red-400 text-xs">Club Especializado <span className="text-red-400">Apolo</span></h3>  
          </NavLink>
          
          <div className="text-3xl absolute top-6 right-2 cursor-pointer md:hidden"
            onClick={()=>setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        {/* NavBar */}
        <div className={` md:w-2/3  w-full  md:text-white text-red-400  `}>

          <ul className={`bg-slate-800 bg-opacity-75 md:text-xl text-xs  flex md:flex-row flex-col md:justify-between md:items-center items-start ${open ? "top" : "top-[490px]" }`}>
            {
              Links.map((Link) => (
                <NavLink key={Link.name } className='md:mr-2 p-3 hover:text-red-400' to={Link.link}>{Link.name}</NavLink>
              ))
            }
             <NavLink className='md:mr-2 p-3 hover:text-red-400' to='http://sysrickyj09.pythonanywhere.com/login'><ion-icon name="log-in-outline"></ion-icon></NavLink> 

          </ul>
        </div>
      </div>

    </>
  )
}

export default Header