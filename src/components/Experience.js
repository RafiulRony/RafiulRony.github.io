import React from 'react'

const Details = ({position, company, companyLink, time, address, work}) =>{
    return<li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p>{work}</p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <div className='w-[75%] mx-auto relative'>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Intern" 
                company="SoftwindTech" 
                companyLink="https://www.softwindtech.com/"
                time="January2023 - March2023" 
                address="Level 4 House, 73 Rd No 13A, Dhaka 1213"
                work="In my office internship, I'm immersed in mastering PHP with Laravel. 
                Learning hands-on, I contribute to projects and collaborate with the team, 
                focusing on web development tasks. My role involves coding, debugging, and 
                implementing functionalities using PHP and the robust Laravel framework."
                />

                <Details
                position="Trainee" 
                company="BrainStation-23" 
                companyLink="https://brainstation-23.com/"
                time="October2023 - December2023" 
                address="8th Floor, 2 Bir Uttam AK Khandakar Road, Dhaka 1212"
                work="During my traineeship, I immersed myself in mastering a range of 
                technologies, including C#, ASP.NET, JavaScript, React.js, and Next.js. 
                Engaging hands-on with diverse projects, I collaborated closely with the team, 
                focusing on learning web development intricacies. My responsibilities encompassed 
                coding, debugging, and implementing functionalities across these languages and 
                frameworks, allowing me to evolve into a versatile developer with proficiency 
                in a wide range of cutting-edge technologies."
                />

            </ul>
        </div>
    </div>
  )
}

export default Experience