import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { useEffect } from 'react';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { toast } from "react-toastify";
import Product from '../../components/product';
import axios from 'axios';
import ReviewsGet from '../reviwes/ReviewsGet';
import Reviews2Post from './Reviews2Post';


// Description : This is the Products Details page. It contains everything related to the products. It includes a picture of the product, its name, the old and new price, and a description of the product. Also, if you want to add the product to the shopping list, it contains more than one picture of the product.
const DetailsPage = (props) => {

    const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
    const [smlImageSize, setSmlImageSize] = useState([150, 150]);

    const [activeSize, setActiveSize] = useState(0);
    const [currentProduct, setCurrentProduct] = useState({})
    const [isAdded, setIsAdded] = useState(false);

    const [prodCat, setProdCat] = useState({
        parentCat: sessionStorage.getItem('parentCat'),
        subCatName: sessionStorage.getItem('subCatName')
    })

    const [relatedProducts, setRelatedProducts] = useState([]);
    const { id } = useParams();
    const [tab, setTab] = useState("desc");
    const [isAlreadyAddedInCart, setisAlreadyAddedInCart] = useState(false);

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();




    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };


    var related = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };


    const goto = (index) => {

        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }


    const isActive = (index) => {
        setActiveSize(index);
    }








    useEffect(() => {
        window.scrollTo(0, 0)

        props.data.length !== 0 &&
            props.data.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        item_.products.length !== 0 &&
                            item_.products.map((product) => {
                                if (parseInt(product.id) === parseInt(id)) {
                                    setCurrentProduct(product);
                                }
                            })
                    })
            })








        //related products code

        const related_products = [];

        props.data.length !== 0 &&
            props.data.map((item) => {
                if (prodCat.parentCat === item.cat_name) {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            if (prodCat.subCatName === item_.cat_name) {
                                item_.products.length !== 0 &&
                                    item_.products.map((product, index) => {
                                        if (product.id !== parseInt(id)) {
                                            related_products.push(product)
                                        }

                                    })
                            }
                        })
                }

            })


        if (related_products.length !== 0) {
            setRelatedProducts(related_products)
        }

    }, [id]);

    const { name_en, photo, price } = currentProduct;
    const dispatch = useDispatch();
    const [user_email, setUserEmail] = useState(null); // State to store user_name
    const [quantity, setQuantity] = useState(1); // State for quantity
    useEffect(() => {
        // Retrieve user info from localStorage after signup
        const emailInfo = localStorage.getItem("user-info");
        if (emailInfo) {
            const { data } = JSON.parse(emailInfo);
            setUserEmail(data.user.email); // Assuming 'name' is where the user_name is stored
        }
    }, []);

    const addToCartBackend = async (data) => {
        try {
            const { product_id, price, quantity, user_email } = data;
            const url = `https://mohmed.testworks.top/public/api/addCart/${product_id}?quantity=${quantity}&price=${price}&user_email=${user_email}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error adding item to cart');
            }

        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const addToCart = () => {

        if (!user_email) {
            console.error('No user_email available.'); // Handle case where user_name is not available
            return;
        }

        addToCartBackend({
            product_id: id,
            price: parseInt(price),
            quantity: quantity,
            user_email: user_email, // Pass user_email to addToCartBackend
        });

        dispatch(
            cartActions.addItem({
                id,
                name_en,
                photo,
                price,
                quantity,
            })
        );
        toast.success('Added Successfully')
        setIsAdded(true);
        setQuantity(quantity + 1);
    };
    const stripHtmlTags = (html) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    return (
        <>

            <section className="detailsPage mb-5">
                <div className='breadcrumbWrapper mb-4'>
                    <div className='container-fluid'>
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li><Link>Home</Link>  </li>
                            <li><Link to={`/cat/${prodCat.parentCat.split(' ').join('-').toLowerCase()}`}
                                onClick={() => sessionStorage.setItem('cat', prodCat.parentCat.split(' ').join('-').toLowerCase())} className='text-capitalize'>{prodCat.parentCat}</Link> </li>

                            <li><Link to={`/cat/${prodCat.parentCat.toLowerCase()}/${prodCat.subCatName.replace(/\s/g, '-').toLowerCase()}`}
                                onClick={() => sessionStorage.setItem('cat', prodCat.subCatName.toLowerCase())} className='text-capitalize'>{prodCat.subCatName}</Link> </li>
                            <li>{currentProduct.name_en}</li>
                        </ul>
                    </div>

                </div>





                <div className='detailsContainer pt-3 pb-3'>
                    <div className='row'>

                        {/* productZoom code start here */}
                        <div className='col-md-5'>
                            <div className='productZoom'>
                                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                    {
                                        currentProduct.images !== undefined &&
                                        currentProduct.images.map((imgUrl, index) => {
                                            return (
                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        src={`${imgUrl}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`} />

                                                </div>
                                            )
                                        })
                                    }

                                </Slider>
                            </div>


                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

                                {
                                    currentProduct.images !== undefined &&
                                    currentProduct.images.map((imgUrl, index) => {
                                        return (
                                            <div className='item'>
                                                <img src={`${imgUrl}?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`} className='w-100'
                                                    onClick={() => goto(index)} />
                                            </div>
                                        )
                                    })
                                }


                            </Slider>

                        </div>
                        {/* productZoom code ends here */}


                        {/* product info code start here */}
                        <div className='col-md-7 productInfo'>
                            <h1>{currentProduct.name_en}.</h1>
                            <div className='d-flex align-items-center mb-4 mt-3'>
                                <Rating name="half-rating-read" value={parseFloat(currentProduct.rate)} precision={0.5} readOnly />

                            </div>

                            <div className='priceSec d-flex align-items-center mb-3'>
                                <span className='text-g priceLarge'>Rs {currentProduct.price} EGP</span>
                                <div className='price d-flex flex-column'>
                                </div>
                            </div>

                            <p>{stripHtmlTags(currentProduct.description_en)}</p>


                            <div className='d-flex align-items-center'>


                                <div className='btn_ d-flex align-items-center'>
                                    <Button className='add_cart w-100 transition mt-3' onClick={addToCart}><ShoppingCartOutlinedIcon />
                                        {
                                            isAdded === true ? 'Added' : 'Add'
                                        }
                                    </Button>
                                    <Button className='btn_1 btn-lg addtocartbtn wishlist btn-border'><FavoriteBorderOutlinedIcon /> </Button>
                                    <Button className='btn_2 btn-lg addtocartbtn btn-border'><CompareArrowsIcon /></Button>
                                </div>


                            </div>

                        </div>
                        {/* product info code ends here */}
                    </div>



                    <div className='card mt-5 p-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Button className={`${tab === "desc" ? "active-tab" : ""}`} onClick={() => setTab("desc")}
                                    >Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${tab === "rev" ? "active-tab" : ""}`} onClick={() => setTab("rev")}
                                    >Reviews</Button>
                                </li>

                            </ul>


                            <br />

                            {
                                tab === "desc" ? (
                                    <div className='tabContent'>
                                        <p>{currentProduct.description_en}</p>
                                    </div>

                                ) : (

                                    <Reviews2Post />
                                )}




                        </div>
                    </div>

                    <br />

                    <div className='relatedProducts homeProductsRow2  pt-5 pb-4'>
                        <h2 class="hd mb-0 mt-0">Related products</h2>
                        <br className='res-hide' />
                        <Slider {...related} className='prodSlider'>

                            {

                                relatedProducts.length !== 0 &&
                                relatedProducts.map((product, index) => {

                                    return (
                                        <div className='item' key={index}>
                                            <Product tag={product.type} item={product} />
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>

                </div>


            </section>
            <ReviewsGet />
        </>
    )
}


export default DetailsPage;





