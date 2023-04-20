import React from 'react'

const Certifications = (props:{url:string,name:string, startDate:string, endDate:string}) => {
  return (
    <div >
        <h4 className='text-xl md:text-2xl'><a href={props.url}>{props.name}</a></h4>
        <p>Valid from:{" "}{props.startDate}{" "}{"-"}{" "}{props.endDate}</p>
    </div>
  )
}

export default Certifications