import React from 'react'

const Details = ({type, time, place, info}) => {
    return<li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p>{info}</p>
        </div>
    </li>
}

const Education = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
        <div className='w-[75%] mx-auto relative'>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="Bachelor Of Science In Computer Science and Engineering" 
                time="Fall 2017 - Fall 2021" 
                place="Southeast University"
                info="Relevant courses included Data Structure, Algorithm, Programming Language C, 
                Discrete Mathematics, Programming Language JAVA, Computer Architecture, Networking, 
                Artificial Intelligence, Cloud Computing, Data Mining, Web and Internet Programming" 
                />
                <Details
                type="Online Coursework" 
                time="2017 - 2022" 
                place="Udemy and Coursera"
                info="Completed coursework in many topics such as database design and management, 
                complex database structures, DOM manipulation, building user interfaces, 
                Building web application, SQL and database querying, " 
                />
            </ul>
        </div>
    </div>
  )
}


export default Education