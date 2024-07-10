import React, { useState , useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import CommonSection from "./common-section/CommonSection";
import products from "../../assets/data/products";
import "./plumbingDetails.css"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { toast } from "react-toastify";
import PlumbingCard from "./PlumbingCard";
import { Button } from '@mui/material';
import Slider from "react-slick";
import axios from "axios";
import ReviewsPost from "../reviwes/ReviewsPost";
import ReviewsGet from "../reviwes/ReviewsGet";
const PlumbingDetails = () => {
     
    const dispatch = useDispatch()
    const { id } = useParams();
    const product = products.find((item) => item.id == id);
    const { photo, name_en, price, rate, description_en, category } = product;
    const relatedProducts = products.filter(item => item.category == category);
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
          setQuantity(quantity + 1);
      };
      useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);
    const stripHtmlTags = (html) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
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
    return (
        <>
            <CommonSection title={name_en} />
            <section className="sec_details">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="product__main-img">
                                <img src={photo} alt="" className="w-100" />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="single__product-content">
                                <h2 className="product__title mb-3">{name_en}</h2>
                                <p className="product__price">
                                    {" "}
                                    Price : <span>${price}</span>
                                </p>
                                <p className="category mb-5">
                                    Category : <span>{category}</span>
                                </p>
                                <p className="mb-5 description_">
                                    Description : <span>{stripHtmlTags(description_en)}</span>
                                </p>

                                <motion.button whileTap={{ scale: 1.2 }} onClick={addToCart} className="plumb_cart">
                                    Add to Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
             <ReviewsPost />
            <div className='detailsContainer pt-3 pb-3'>
                <div className="relatedProducts homeProductsRow2  pt-5 pb-4">
                    <h2 className="related__Product-title">You might also like.</h2>
                    <div className="">
                        <Slider {...related} className='prodSlider'>
                            {relatedProducts.map((item) => (
                                <div className='item'>
                                    <PlumbingCard item={item} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <ReviewsGet />
        </>
    )
}
export default PlumbingDetails