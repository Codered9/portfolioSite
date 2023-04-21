import React from 'react'

const navElements = [
    {
        text: "About",
        url: "#aboutme"
    },
    {
        text: "Skills",
        url: "#skills"
    },
    {
        text: "Projects",
        url: "#projects"
    },
    {
        text: "Resume",
        url: "#resume"
    },
    {
        text: "Contacts",
        url: "#contactme"
    },
]

const NavBar = () => {
  return (
    <div className='bg-black h-[7vh] md:h-[7vh] text-white p-2 px-2 md:px-20  flex flex-row content-center justify-between md:fixed md:top-0 md:left-0 md:right-0 '>
        <p className='my-auto mx-2 md:mx-4 text-2xl md:text-3xl'><a href='#'><span className='text-br-red font-black'>//</span><span className=''>Sudhanshu Srivastava</span></a></p>
        <div className='hidden md:flex justify-between text-base '>
            {
                navElements.map(element => (
                    <p className=' my-auto mx-4 hover:text-br-red'>
                     <a href={element.url}>
                        {element.text}
                        </a>   
                    </p>
                ))
            }
        </div>
    </div>
  )
}

export default NavBar