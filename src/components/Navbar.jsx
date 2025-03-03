import { RiCloseLine, RiMenu3Line } from '@remixicon/react';
import logo from '../assets/logo.svg';
import { useState } from 'react';


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="wrapper">
        <div className="container nav-div !sm:px-10">
            <div className="">
                <img src={logo} alt="Logo" className="logo-img sm:mr-2" />
            </div>

            <div className="menu-items">
                <a href="#" className="menu-item">Home</a>
                <a href="#" className="menu-item">About</a>
                <a href="#" className="menu-item">Our Services</a>
                <a href="#" className="menu-item">Blog</a>
                <a href="#" className="menu-item">Testimonies</a>
                <a href="#" className="menu-item">Contact</a>
            </div>

            <div className="block sm:hidden cursor-pointer">
              {
                openMenu 
                ? <RiCloseLine className='' style={{ marginRight: '10px' }} onClick={() => setOpenMenu(false)} />
                : <RiMenu3Line className='' style={{ marginRight: '10px' }} onClick={() => setOpenMenu(true)} />
              }
            </div>
        </div>

        {
          openMenu &&
          (
            <div className="mobile-menu">
              <a href="#" className="menu-item">Home</a>
              <a href="#" className="menu-item">About</a>
              <a href="#" className="menu-item">Our Services</a>
              <a href="#" className="menu-item">Blog</a>
              <a href="#" className="menu-item">Testimonies</a>
              <a href="#" className="menu-item">Contact</a>
            </div>
          )
        }
        
    </div>
  )
}

export default Navbar