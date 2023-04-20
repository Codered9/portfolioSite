import React from 'react'
const contactURLS: {
    logo: string, url: string, desc: string
}[] = [
    {
        logo: "/Email.svg",
        url: "mailto:sudhanshusri23@gmail.com",
        desc: "sudhanshusri23@gmail.com"
    },
    {
        logo: "/LinkedIn.svg",
        url: "https://linkedin.com/in/codered9/",
        desc: "linkedin.com/in/codered9/"
    },
    {
        logo: "/Github.svg",
        url: "https://github.com/codered9",
        desc: "github.com/codered9"
    },
    {
        logo: "/Twitter.svg",
        url: "https://twitter.com/sudhanshusri23",
        desc: "twitter.com/sudhanshusri23"
    },
]

const Footer = () => {
  return (
    <div className='h-[14vh] bg-black flex flex-col text-white justify-between'>
        <div className='flex gap-4 justify-between mx-28 my-8'>
             {
                contactURLS.map(url => (
                    <div className='inline-flex gap-6'>
                    <a href={url.url}>
                    <img src={url.logo}/>
                    </a>
                    <span className='mt-1'>{url.desc}</span>
                    </div>
                ))
             }
        </div>

        <div className='m-2'>
            <p className='text-center'>Designed and developed by <a>Sudhanshu Srivastava</a> with {'<'}3.</p>
        </div>
    </div>
  )
}

export default Footer