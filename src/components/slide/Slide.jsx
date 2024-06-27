
// import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { Link } from 'react-router-dom';
import { sells } from '../../assets/data/Cars';

const Slide = () => {

    return (
        <section className='slider'>
            <div className='text-center '>OUR SHOP</div>
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {sells.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="xleft">
                          <b><h2 className="font-center">{img.head}</h2> </b>
                            <img
                                src={img.URL}
                                alt={`slide-${index + 1}`}
                                className='img'
                                key={index}
                            />
                            
                       </div>
                       <h4>Some Info</h4>
                       <div className="xleft">
                       <p className='slideContent' key={index}> {img.inx}</p>
                       <br />
                       <h4>Capacity</h4>
                        <p className='slideContent' key={index}>{img.capacity}</p>
                             <Link to={'/ViewPage'}> <button className="button" key={index}>View More</button></Link>
                       </div>

                    </SwiperSlide>

                ))}

            </Swiper>
        </section>
    );
};

export default Slide;


