import React, { useEffect, useContext} from 'react';
import Slider from "react-slick";
import './index.css';
 
import Slide2 from '../../../assets/images/bannerImgFour.jpg';
import Slide3 from '../../../assets/images/bannerImgOne.jpg';
import Slide4 from '../../../assets/images/bannerImgThree.jpg';
import Slide5 from '../../../assets/images/bannerImgTwo.jpg';
// import Button from '@mui/material/Button';

import Newsletter from '../../../components/newsletter';

// import { MyContext } from '../../../App';

const HomeSlider = () => {

    // const context = useContext(MyContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay:true
    };



    return (
        <section className='homeSlider'>
            <div className='container-fluid position-relative'>
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <img src={ Slide5} className='w-100' />
                        {/* <div className='info'>
                            <h2 class="mb-3">
                                Fresh Vegetables<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div> */}
                    </div>
                    <div className="item">
                        <img src={Slide3} className='w-100' />
                        {/* <div className='info'>
                            <h2 class="mb-3">
                                Fresh Vegetables<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div> */}
                    </div>
                    <div className="item">
                        <img src={Slide4} className='w-100' />
                        {/* <div className='info'>
                            <h2 class="mb-3">
                                Fresh Vegetables<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div> */}
                    </div>
                    <div className="item">
                        <img src={Slide2} className='w-100' />
                        {/* <div className='info'>
                            <h2 class="mb-3">
                                Fresh Vegetables<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                        </div> */}
                    </div>
                </Slider>
                {/* <Newsletter /> */}
  
            </div>
        </section>
    )
}

export default HomeSlider;