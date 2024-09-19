import React from 'react';
import './footer.css';
import Logo from '../../assets/images/logo-ibid.png';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import footer_link from '../../assets/data/foorer';

const Footer = () => {
    return (
        <>
        <hr className='ml-9 mr-9'></hr>
        <div className='headerzoom'>
            <div className='footerWrapper'>
                <footer>
                    <div className='footer_container'>
                        <div className='row'>
                            <div className='col-md-3 auction_img'>
                                <Link to='/'><img src={Logo} className='img' /></Link>
                                <br /><br />
                                <p>This is an electronic site for electronic commerce, in addition to being an auction site, and it has a section for auctions of companies and factories in the scrap trade. </p>
                                <br />
                                <p><EmailOutlinedIcon /> <strong>Email :</strong> Auction@gmail.com</p>
                                <p><WatchLaterOutlinedIcon /> <strong>Hours :</strong> 10:00 - 18:00, Sat - Thu </p>

                            </div>


                            <div className='col-md-9'>
                                <div className='row'>
                                    <div className='col-md-3 ml-5'>
                                        <h3 className="text-xl uppercase text-designColor tracking-wider">
                                            Quick Link.
                                        </h3>
                                        <div className='footer_box'>
                                            <ul className="links">
                                                {footer_link.map((item, index) => (
                                                    <li key={index}>
                                                        <Link to={item.path}>
                                                            {item.display}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>




                                    <div className='col ml-6 footer_contact'>
                                        <h3 className="text-xl uppercase text-designColor tracking-wider">
                                            Contact.
                                        </h3>
                                        <div className="footer_box">
                                            <div className="line">
                                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                                <div className="info">Address : Menoufia, Shebin El-Kom, Stadium Street.</div>
                                            </div>
                                            <div className="line">
                                                <i className="far fa-clock fa-fw"></i>
                                                <div className="info">Business Hours: From 10:00 To 18:00</div>
                                            </div>
                                            <div className="line">
                                                <i className="fas fa-phone-volume fa-fw"></i>
                                                <div className="info">
                                                    <span>+201025946540</span>
                                                    <span>+201150609077</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col'>
                                        <div className="footer_box">
                                            <h3 className="text-xl uppercase text-designColor tracking-wider">Social Media.</h3>
                                            <ul className="social">
                                                <li>
                                                    <Link to="https://www.facebook.com/?ref=homescreenpwa" className="facebook">
                                                    <i class="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" className="twitter">
                                                        <i class="fa-brands fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.linkedin.com/in/ebrahim-shebl-0ab761276/" className="linkedin">
                                                        <i className="ri-linkedin-line"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <hr />
                    </div>
                </footer>


            </div>
        </div>
        </>
    )
}

export default Footer;
































