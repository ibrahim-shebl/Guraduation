import React, { useState, useEffect, useRef } from 'react';
import Banners from '../../components/banners';
import './style.css';
import Product from '../../components/product';
import { Row, Col, Container } from "reactstrap";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import products from "../../assets/data/products.js";
import Services from '../../pages/services/Services.js'
import Landing from './landing/Landing.js';
import RihabAlsala from '../rihab alsala/RirhabAlsala.js';
import heroImg from "../../assets/images/hero-img.png"
import SaleTime from '../timesale/SaleTime.js';
import { toast } from "react-toastify";
import testionalImg from '../../assets/images/Testi 1.png'
//  Description the Popular Product : These products are available within the offer, and there is a filter so that if you want specific products and search for them for a long time, it will show you a picture of the product, the name of the product, the new price, and its old price, which is owned by any company or factory, and it will also rate the customers who bought it before, and after that, if you like it and want to buy it, you will go to AddToCart.
const Home = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = 'https://mohmed.testworks.top/public/api/add-testimonial';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                email: email,
                commit: message,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                toast.success('Added successfully');
                setUsername('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to send data. Please try again later.');
            });
    };
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://mohmed.testworks.top/public/api/get-testimonial');
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);


    const year = new Date().getFullYear();
    const [prodData, setprodData] = useState(props.data)
    const [catArray, setcatArray] = useState([])
    const [activeTab, setactiveTab] = useState();
    const [activeTabIndex, setactiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);

    const [bestSells, setBestSells] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    const productRow = useRef();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };


    const catArr = [];

    useEffect(() => {

        prodData.length !== 0 &&
            prodData.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catArr.push(item_.cat_name);
                    })
            })

        const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
        setcatArray(list2)

        setactiveTab(list2[0])

        window.scrollTo(0, 0);

    }, [])





    useEffect(() => {
        var arr = [];
        setActiveTabData(arr);
        prodData.length !== 0 &&
            prodData.map((item, index) => {
                item.items.map((item_, index_) => {
                    if (item_.cat_name === activeTab) {
                        {
                            item_.products.length !== 0 &&
                                item_.products.map((product) => {
                                    arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            setActiveTabData(arr)
                            setTimeout(() => {
                                setIsLoadingProducts(false);
                            }, [1000]);
                        }
                    }
                })

            })

    }, [activeTab, activeTabData])





    const bestSellsArr = [];

    useEffect(() => {
        prodData.length !== 0 &&
            prodData.map((item) => {
                if (item.cat_name === "Electronics") {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.map((product, index) => {
                                    bestSellsArr.push(product);
                                })
                        })
                }

            });


        setBestSells(bestSellsArr);

    }, [])


    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);


    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "sofa") {
            const filteredProducts = products.filter(
                (item) => item.category === "sofa"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "mobile") {
            const filteredProducts = products.filter(
                (item) => item.category === "mobile"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "watch") {
            const filteredProducts = products.filter(
                (item) => item.category === "watch"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "labtop") {
            const filteredProducts = products.filter(
                (item) => item.category === "labtop"
            );

            setAllProducts(filteredProducts);
        }
    }, [category]);


    return (
        <div style={{ display: 'block' }}>
            <Landing />
            <Banners />
            <section>
                <SaleTime />
            </section>
            <section className='homeProducts homeProductWrapper'>
                <div className='container-fluid'>
                    <h2 class="main-title">Popular Products</h2>
                    <div className=' align-items-center homeProductsTitleWrap'>
                        <ul className='list list-inline filterTab mb-0 res-full'>

                            {
                                catArray.length !== 0 &&
                                catArray.map((cat, index) => {
                                    return (
                                        <li className="list list-inline-item">
                                            <a className={`cursor text-capitalize 
                                                ${activeTabIndex === index ? 'act' : ''}`}
                                                onClick={() => {
                                                    setactiveTab(cat)
                                                    setactiveTabIndex(index);
                                                    productRow.current.scrollLeft = 0;
                                                    setIsLoadingProducts(true);
                                                }}
                                            >
                                                {cat}
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>


                    <div className={`productRow ${isLoadingProducts === true && 'loading'}`} ref={productRow}>

                        {
                            activeTabData.length !== 0 &&
                            activeTabData.map((item, index) => {
                                return (
                                    <div className='item' key={index}>

                                        <Product tag={item.type} item={item} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>



            <Services />
            <section className="hero-section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero-content">
                                <p className="hero-subtitle">Trending Product In {year} </p>
                                <h2>Welcome To Auction on A Wide Range of Products</h2>
                                <p>Welcome to an auction on a wide range of products. For those who wish to attend the auction and bidding, please enter through the link.</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn">
                                    <Link to="/auction">SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero-img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='Auction-product' id="auction">
                <RihabAlsala />
            </section>

            <section id="banner" class="my-5 py-5">
                <div class="container">
                    <h1>Welcome to our customers.</h1>
                    <h4>Here is the view of factory and corporate auctions.</h4>
                    <button class="text-uppercase"><Link to='/factoriesauction'>Go To Mazad</Link></button>
                </div>
            </section>

            <section className='end_testionial'>
                <h2 className='main-title'>Testimonials</h2>
                <div className="testimonials">
                    <div className='testionial-container'>
                        <h2>Testimonials</h2>
                        {testimonials.map((testimonial, index) => (
                            <div className="ts-box" key={index}>
                                <p>{testimonial.description}</p>
                                <div className="person-info">
                                    <img src={testionalImg} alt="" />
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="clearfix"></div>
                </div>

            </section>
            <section>
                <div className="testional_contact">
                    <div className="overlay"></div>
                    <div className="container">
                        <h2>Leave your message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="left">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <input type="submit" value="Send" />
                            </div>
                            <div className="right">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={handleMessageChange}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;






