import React, { useState , useEffect } from "react";
import { NavLink , Link } from "react-router-dom";
import "./perfumCard.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
const PerfumCard = (props) => {
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
          toast.success('Added successfully')
          setQuantity(quantity + 1);
      };
     
  return(
          <div className="project-card">
            <img className="plum_img" src={photo} alt="product_img" />
            <h2 className="project-title"><Link to={`/perfume/${id}`}>{name_en}</Link></h2>
            <div className="pro-details">
              <p>{price} EGP</p>
              <div className="pro-btn">
                <NavLink to={props.url} className="btn" onClick={addToCart}>Add To Cart</NavLink>
              </div>
            </div>
          </div>
  )
};

export default PerfumCard;
