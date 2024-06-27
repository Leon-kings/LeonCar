// import React from 'react'
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { Link } from 'react-router-dom';
import { ToolKits } from '../../assets/data/Tools';

function SlideToolKit() {

  return (
   <>
   <div className="container">
   <section className='slider'>
            <div className='text-center '> 
          <h2 className="text">We Offer Toolkit Boxes and Appliances For Maintainace of Our Vehicles</h2>
            
            </div>
           
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {ToolKits.map((img, index) => (
                    <SwiperSlide key={index}>
                                               <h4>Some Info</h4>
                       <div className="xleft">
                      
                       <br />
                       <h4>Info</h4>
                        <p className='slideContent' key={index}>{img.capacity}</p>
                        <br />
                        <h2 className="color text-blue-500">Price:{img.inx} </h2>
                        <br />
                            <Link to={'/ViewPage'}> <button className="button" key={index}>View More</button></Link> 
                       </div>
                        <div className="xleft">
                          <b><h2 className="font-center">{img.head}</h2> </b>
                            <img
                                src={img.URL}
                                alt={`slide-${index + 1}`}
                                className='img w-80 h-70'
                                key={index}
                            />
                            
                       </div>


                    </SwiperSlide>

                ))}

            </Swiper>
        </section>
   </div>
   </>
  )
}

export default SlideToolKit