import React from 'react'

const ProjectsCard = (props:{
    name: string,
    desc: string[],
    repo: string
}) => {
  return (
<div className="bg-blacked text-white rounded-lg shadow-lg p-6 relative max-w-sm mx-auto" >
<p className='text-2xl'>{'>'}{" "}{props.name}</p>
<div className="mt-6 mb-12">
  { props.desc.map((obj,index) => (
                 <p key={index}>{'~'}{" "}{obj}</p>
               ))}
</div>
<a
  href={props.repo}
  className="flex items-center justify-center w-12 h-12  rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 my-4"
  target="_blank"
  rel="noopener noreferrer"
>
<img src="/Github.svg" className='h-8'/>
</a>
</div>
  )
}

export default ProjectsCard