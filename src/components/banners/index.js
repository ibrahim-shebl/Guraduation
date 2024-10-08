import React from 'react';
import Banner1 from '../../assets/images/banner1.webp';
import Banner2 from '../../assets/images/banner2.webp';
import Banner3 from '../../assets/images/banner5.webp';

import './style.css';

const Banners = ()=>{
    return(
        <div className='bannerzoom'>
            <div className='bannerSection'>
                <div className='container-fluid'>
                    <div className='row'>
                    <h2 className='hd'>Banner To The Products</h2>
                        <div className='col'>
                            <div className='box'>
                                <img src={Banner1} className='w-100 h-100 transition' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className='box'>
                                <img src={Banner2} className='w-100 transition' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className='box'>
                                <img src={Banner3} className='w-100 transition' />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banners;