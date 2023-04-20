import React from 'react'

const navElements = [
    {
        text: "About",
        url: "#aboutme"
    },
    {
        text: "Skills",
        url: "/"
    },
    {
        text: "Projects",
        url: "/"
    },
    {
        text: "Resume",
        url: "/"
    },
    {
        text: "Contacts",
        url: "/"
    },
]

const NavBar = () => {
  return (
    <div className='bg-black h-[7vh] text-white p-2  flex flex-row content-center justify-between fixed top-0 left-0 right-0'>
        <p className='my-auto mx-4 text-3xl'><a href='#'>Sudhanshu Srivastava</a></p>
        <div className='flex justify-between text-base '>
            {
                navElements.map(element => (
                    <p className=' my-auto mx-4'>
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