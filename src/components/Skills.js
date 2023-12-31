import React from 'react'
import { motion } from "framer-motion"

const Skill = ({name, x, y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        '
        whileHover={{ scale:1.05 }}
        initial={{ x:0,y:0 }}
        animate={{ x:x, y:y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bond text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full sm:h-96 lg:h-screen relation flex items-center justify-center rounded-full bg-circularLight '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer
            '
            whileHover={{ scale:1.05 }}
            >
                Web
            </motion.div>
            
            <Skill name="HTML" x="-23vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="JavaScript" x="21vw" y="6vw" />
            <Skill name="ReactJS" x="0vw" y="14vw" />
            <Skill name="NextJS" x="-22vw" y="-16vw" />
            <Skill name="PHP" x="14vw" y="-11vw" />
            <Skill name="Web Design" x="33vw" y="-5vw" />
            <Skill name="Figma" x="0vw" y="-21vw" />
            <Skill name="DotNet" x="-26vw" y="18vw" />
            <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        </div>
    </>
  )
}

export default Skills