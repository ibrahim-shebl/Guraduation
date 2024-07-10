import React, { useState, useRef, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import CommonSection from "./CommonSection";
import products from "../../assets/data/products";
import "./houseDetails.css"
import { motion } from "framer-motion"
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";
import { Button } from '@mui/material';
import axios from "axios";
import ProductCards from "./ProductCards";
import ReviewsPost from "../reviwes/ReviewsPost";
import ReviewsGet from "../reviwes/ReviewsGet";
const HousewaresDetails = () => {
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
    return <>
        <CommonSection title={name_en} />

        <section className="pt-5">
            <Container>
                <Row>
                    <Col lg="6" >
                        <img className="img w-100" src={photo} alt="" />
                    </Col>
                    <Col lg="6">
                        <div className="product-details">
                            <h2>{name_en}</h2>
                            <div className="product-rating d-flex align-items-center gap-5 mb-3">
                                <div>
                                    <Rating className="mb-4" name="half-rating-read" value={parseFloat(rate)} precision={0.5} readOnly />
                                </div>
                                <p>(<span>{rate}</span>ratings)</p>
                            </div>
                            <div className="d-flex align-items-center gap-5">
                                <span className="product-price">${price}</span>
                                <span className="product-category">Category : {category}</span>
                            </div>

                            <motion.button whileTap={{ scale: 1.2 }} className="addTOCart__btn" onClick={addToCart}>Add To Cart</motion.button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <ReviewsPost />
        <section className="plub_Details">
            <h2 className="related__Product-title">You might also like.</h2>
            <div className="container_">
                {relatedProducts.map((item) => (
                    <ProductCards item={item} />
                ))}
            </div>
        </section>
        <ReviewsGet />

       
    </>
}
export default HousewaresDetails