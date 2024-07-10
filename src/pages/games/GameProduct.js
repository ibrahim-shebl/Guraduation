import React, { useState , useEffect } from 'react'
import "./game.css";
import {motion} from "framer-motion";
import Rating from '@mui/material/Rating';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link } from 'react-router-dom';
import games from "../../assets/data/games";
import { toast } from "react-toastify";
const GameProduct = (props) => {
    const { id , name_en, photo, price} = props.item;
    const Games = games.find((Games) => Games.id === id);
    const {rate} = Games;
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
        setQuantity(quantity + 1);
    };
    return (
        <motion.article
            layout
            initial={{ transform: "scale(0.4)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", damping: 8, stiffness: 50 }}
            className="gameProductcard"
        >
            <img width={266} className='plum_img' src={photo} alt="" />

            <div style={{ width: "350px"}} className="game_box">
                <h1 className="title">{name_en.substring(0, 60)}</h1>
                <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                        <div className="game_price">price :</div>
                        <div className="game_price">{price} EGP</div>
                    </div>

                    <Rating name="half-rating-read" value={parseFloat(rate)} precision={0.5} readOnly />
                </div>
                <div className="game-btn">
                    <Link className="btn" onClick={addToCart}>Add To Cart</Link>
                    <Link to={`/game/${id}`} className="btn">Details</Link>
                </div>
            </div>
        </motion.article>
    )
}

export default GameProduct