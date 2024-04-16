import React from 'react';
import './footer.css';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/index';
import NewsletterImg from '../../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>

 

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon1} /></span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon2} /></span>
                                    <div className='info'>
                                        <h4>Free delivery</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon3} /></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon4} /></span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <Link to='/'><img src={Logo} className='img' /></Link>
                                <br /><br />
                                <p>An Auction Site For Buying And Selling Products. </p>
                                <br />

                                <p><LocationOnOutlinedIcon /> <strong>Address</strong>: Menoufia, Shebin El-Kom, Stadium Street.</p>
                                <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+20) - 1025946540</p>
                                <p><EmailOutlinedIcon /> <strong>Email:</strong> sale@Auction.com</p>
                                <p><WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 - 18:00, Sat - Thu </p>

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Account</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Sign In</Link></li>
                                            <li><Link to="#">View Cart</Link></li>
                                            <li><Link to="#">My Wishlist</Link></li>
                                            <li><Link to="#">Track My Order</Link></li>
                                            <li><Link to="#">Help Ticket</Link></li>
                                            <li><Link to="#">Shipping Details</Link></li>
                                            <li><Link to="#">Compare Products</Link></li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Become A Vendor</Link></li>
                                            <li><Link to="#">Affiliate Program</Link></li>
                                            <li><Link to="#">Farm Bussiness</Link></li>
                                            <li><Link to="#">Farm Careers</Link></li>
                                            <li><Link to="#">Our Suppliers</Link></li>
                                            <li><Link to="#">Accessibility</Link></li>
                                            <li><Link to="#">Pormotions</Link></li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Popular</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Electronics</Link></li>
                                            <li><Link to="#">Fashion</Link></li>
                                            <li><Link to="#">Groceries</Link></li>
                                            {/* <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Install App</h3>
                                <br className='res-hide'/>
                                <p>From App Store or Google Play</p>

                                <div className='d-flex'>
                                    <Link to={''}><img src={appStore} width={150} /></Link>
                                    <Link to={''}><img src={googlePlay} className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                                <p>Secured Payment Gateways</p>
                                <img src={paymentImage} />
                            </div>

                        </div>


                        <hr />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                                <p>© 2024, Auction - By Full Stack  Developer
                                    All rights reserved</p>
                            </div>

                            <div className='col-md-6 d-flex part_2'>
                                <div className='m-auto d-flex align-items-center phWrap'>
                                    <div className='phNo d-flex align-items-center mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info'>
                                            <h3 className='text-g mb-0'>01025946540</h3>
                                            <p className='mb-0'>Support Center</p>
                                        </div>
                                    </div>

                                    <div className='phNo d-flex align-items-center  mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info'>
                                            <h3 className='text-g mb-0'>01025946540</h3>
                                            <p className='mb-0'>Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                            <Link to={''}><FacebookOutlinedIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><TwitterIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><InstagramIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={''}><YouTubeIcon /></Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;