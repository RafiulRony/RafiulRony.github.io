import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
import NavLink from '../components/NavLink'
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './icons'
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav>
            <NavLink href="/" title="Home" className='mr-4'/>
            <NavLink href="/about" title="About" className='mx-4'/>
            <NavLink href="/projects" title="Projects" className='mx-4'/>
            <NavLink href="/articles" title="Contact" className='ml-4'/>
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://github.com/RafiulRony" target={"_blank"}
            whileHover={{ y:-2 }}
            whileTap={{ scale:0.9 }}
            className="w-6 mr-3"
            >
              <TwitterIcon/>
            </motion.a>
            <motion.a href="https://github.com/RafiulRony" target={"_blank"}
            whileHover={{ y:-2 }}
            whileTap={{ scale:0.9 }}
            className="w-6 mr-3"
            >
              <GithubIcon/>
            </motion.a>
            <motion.a href="https://github.com/RafiulRony" target={"_blank"}
            whileHover={{ y:-2 }}
            whileTap={{ scale:0.9 }}
            className="w-6 mr-3"
            >
              <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://github.com/RafiulRony" target={"_blank"}
            whileHover={{ y:-2 }}
            whileTap={{ scale:0.9 }}
            className="w-6 mr-3"
            >
              <PinterestIcon/>
            </motion.a>
            <motion.a href="https://github.com/RafiulRony" target={"_blank"}
            whileHover={{ y:-2 }}
            whileTap={{ scale:0.9 }}
            className="w-6 mr-3"
            >
              <DribbbleIcon/>
            </motion.a>
        </nav>
        <div className='absolute left-[50%] translate-x-[-50%]'>
        <Logo/>
        </div>
    </header>
  )
}

export default NavBar