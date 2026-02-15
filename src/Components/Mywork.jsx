import React from 'react'
import mywork_data from '../assets/Mywork.js'
import '../CSS/Mywork.css'
const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-tittle">
          <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
          {
            mywork_data.map((image,index)=>{
              return <img key={index} src={image.w_img} alt="" />
            })
          }
        </div>
    </div>
  )
}

export default Mywork