'use client'

import '@/components/NavbarStyles.css'
import Link from 'next/link';
import MenuItems from './MenuItems';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react';
import { motion } from "framer-motion"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  
  return (
    <nav className='navbarItems'>
      <Link style={{textDecoration: 'none'}} href={"/"}>
        <h1 className='navbarLogo'><span>T</span>rip.<span>P</span>y</h1>
      </Link>
      <motion.div className='menuIcons'
      whileHover={{ scale: 1.1 }}>
        <button className="toggle" onClick={handleClick}>
          {!showMenu ? <MenuOpenRoundedIcon /> : <CloseRoundedIcon/>}
        </button>
      </motion.div>
      {showMenu ? 
        <ul className='navbarMenu'>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <motion.div
                whileHover={{ scale: 1.1 }}>
                  <Link href={item.url} className={item.className}>
                    {item.icon}{item.title}
                  </Link>
                </motion.div>
              </li>
            )
          })}
          <motion.div
          whileHover={{ scale: 1.1 }}>
            <button id='signUp'><AppRegistrationRoundedIcon/>Sign Up</button>
          </motion.div>
        </ul> : " " }
    </nav>
  )
}

export default Navbar