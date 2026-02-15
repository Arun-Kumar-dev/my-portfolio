import React, { useState } from 'react'
import Service_data from '../assets/ServiceData'
import arrow from '../assets/Right-arr.svg'
import '../CSS/Service.css'

const Services = () => {
    const [openIndex,setOpenIndex] = useState(null);
  return (
    <div id='services' className='service'>
        <div className='service-tittle'>
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="service-container">
            {Service_data.map((service,index)=>{
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{openIndex === index 
                        ? service.s_desc
                        :service.s_desc.substring(0,80)+"..."}</p>
                    <div className='services-readmore'
                      onClick={()=> setOpenIndex(openIndex === index ? null : index)}>
                        <p>{openIndex === index ? "Readless" : "Readmore"}</p>
                        <img src={arrow} alt="" className='arrow'/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services