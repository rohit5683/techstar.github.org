import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/s1.jpg"
import img2 from "../assets/s2.png"
import img3 from "../assets/s3.png"

const Service = () => {
  return (
    <div className='services'>
      <Carousel 
      infiniteLoop 
      autoPlay 
      showStatus={false} 
      showArrows={false}
      showThumbs={false}
      interval={2000}>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer-to-Peer Service</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Front End Development</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Service