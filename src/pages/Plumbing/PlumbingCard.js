import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import './Plumbingcard.css';
import { toast } from "react-toastify";

const PlumbingCard = (props) => {
    const { id, name_en, photo, price } = props.item;
    const dispatch = useDispatch();
    const [user_email, setUserEmail] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showFullName, setShowFullName] = useState(false);

    useEffect(() => {
        const emailInfo = localStorage.getItem("user-info");
        if (emailInfo) {
            const { data } = JSON.parse(emailInfo);
            setUserEmail(data.user.email);
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
            console.error('No user_email available.');
            return;
        }

        addToCartBackend({
            product_id: id,
            price: parseInt(price),
            quantity: quantity,
            user_email: user_email,
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
        toast.success('Added Successfully');
        setQuantity(quantity + 1);
    };

    return (
        <div className='plumb overflow-hidden'>
            <div className="box">
                <Link to={`/plumbing/${id}`}>
                    <img className='plum_img' src={photo} alt="product_img" />
                </Link>
                <div className="plum_content">
                    <h3 onClick={() => setShowFullName(!showFullName)}>
                        {showFullName ? name_en : `${name_en.slice(0, 40)}${name_en.length > 40 ? '...' : ''}`}
                    </h3>
                    <div className="price">{price} EGP</div>
                    <Link onClick={addToCart} className="plum_btn">Add To Cart</Link>
                </div>
            </div>
        </div>
    );
}

export default PlumbingCard;
