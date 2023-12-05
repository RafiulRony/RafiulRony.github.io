import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full  border-t-2 border-solid border-dark p-10
    fond-medium text-lg flex items-center justify-between

    '>
        <>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div>
                Build By <span className='text-primary text-2xl px-1'>&#9825;</span>
                <Link href="https://github.com/RafiulRony" className='underline underline-offset-2 px-1'>Rafiul</Link>
            </div>
            <Link href="https://www.linkedin.com/in/rafiul-islam-620720247/" className='underline underline-offset-2 px-1'>Say hello</Link>
        </>
    </footer>
  )
}

export default Footer