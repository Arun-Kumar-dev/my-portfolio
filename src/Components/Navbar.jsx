import React, { useRef, useState } from 'react'
import Logo from '../assets/Arun_top_logo.jpeg'
import '../CSS/Navbar.css'
import Underline_img from '../assets/under-img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Menu_icon from '../assets/Menu-icon.svg'
import Close_icon from '../assets/Close-icon.svg'

const Navbar = () => {
    const [menu,setMenu] = useState("home")
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right="0";
    }
     const closeMenu = () =>{
        menuRef.current.style.right="-350px";
    }
    return (
        <div className='nav-bar'>
            <img src={Logo} alt="logo" className='logo-img' />
            <img src={Menu_icon} onClick={openMenu} className='nav-mob-open' alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <img src={Close_icon} onClick={closeMenu} alt="" className='nav-mob-close'/>
                <li><AnchorLink className='anchor-link' offset={10} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu ==="home"?<img src={Underline_img} className='under-img'/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={20} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu ==="about"?<img src={Underline_img} className='under-img'/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={30} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu ==="services"?<img src={Underline_img} className='under-img'/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={90} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu ==="work"?<img src={Underline_img} className='under-img'/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu ==="contact"?<img src={Underline_img} className='under-img' />:<></>}</li>
            </ul>
            <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="nav-connect">Connect With Me</div></AnchorLink>
        </div>
    )
}

export default Navbar