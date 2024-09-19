import React, { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ApiIcon from '@mui/icons-material/Api';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import './rihabAlsalaCard.css';
import {motion} from 'framer-motion'
import { toast } from "react-toastify";
const RihabAlsalaCards = (props) => {
    const { id, name_en, photo, price } = props.item;
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
          setQuantity(quantity + 1);
          toast.success('Added Successfully')
      };
  return (
       <>
           
            <div className="box">
              <div className="data">
                <img src={photo} alt="product_img"/>
              </div>
              <div className="des">
                <h3><Link to={`/rihAbalsala/${id}`}>{name_en}</Link></h3>
              </div>
              <div className = "product-card-bottom d-flex align-items-center justify-content-between p-2">
                <span className="price">{price} EGP</span>
                <motion.span whileTap={{scale: 1.2}} ><i class = "ri-add-line" onClick={addToCart}></i></motion.span>
              </div>
            </div>
        </>
       
  )}

 









export default RihabAlsalaCards;