import React, { useEffect, useState } from 'react';
import './style.css';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

const Product = (props) => {
    const [productData, setProductData] = useState();
    const [isAdded, setIsAdded] = useState(false);
    const [user_email, setUserEmail] = useState(null); // State to store user_name
    const [quantity, setQuantity] = useState(1); // State for quantity

    useEffect(() => {
        setProductData(props.item);
    }, [props.item]);

    useEffect(() => {
        // Retrieve user info from localStorage after signup
        const emailInfo = localStorage.getItem("user-info");
        if (emailInfo) {
            const { data } = JSON.parse(emailInfo);
            setUserEmail(data.user.email); // Assuming 'name' is where the user_name is stored
        }
    }, []);

    const setProductCat = () => {
        sessionStorage.setItem('parentCat', productData.parentCatName);
        sessionStorage.setItem('subCatName', productData.subCatName);
    };

    const dispatch = useDispatch();

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
            // Handle success response if needed
            setIsAdded(true); // Assuming setIsAdded updates UI to indicate item added
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
            product_id: productData.id,
            price: parseInt(productData.price),
            quantity: quantity,
            user_email: user_email, // Pass user_name to addToCartBackend
        });

        dispatch(
            cartActions.addItem({
                id: productData.id,
                name_en: productData.name_en,
                photo: productData.photo,
                price: productData.price,
                quantity: productData.quantity,
            })
        );
        setIsAdded(true);
        toast.success('Added Successfully')
        setQuantity(quantity + 1);
    };

    return (
        <div className='productzoom'>
            <div className='productThumb' onClick={setProductCat}>
                {
                    props.tag !== null && props.tag !== undefined &&
                    <span className={`badge ${props.tag}`}>{props.tag}</span>
                }

                {
                    productData !== undefined &&
                    <>
                        <Link to={`/product/${productData.id}`}>
                            <div className='imgWrapper'>
                                <div className='p-4 wrapper mb-3'>
                                    <img src={productData.photo + '?im=Resize=(420,420)'} className='w-100' />
                                </div>

                                <div className='overlay transition'>
                                    <ul className='list list-inline mb-0'>
                                        <li className='list-inline-item'>
                                            <a className='cursor' tooltip="Add to Wishlist">
                                                <FavoriteBorderOutlinedIcon />
                                            </a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className='cursor' tooltip="Compare">
                                                <CompareArrowsOutlinedIcon />
                                            </a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className='cursor' tooltip="Quick View">
                                                <RemoveRedEyeOutlinedIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </Link>

                        <div className='info'>
                            <span className='d-block catName'>{productData.brand}</span>
                            <h4 className='title'><Link>{productData.name_en}</Link></h4>
                            <Rating className='ratecss' name="half-rating-read"
                                value={parseFloat(productData.rate)} precision={0.5} readOnly />
                            <span className='brand d-block text-g'>By <Link className='text-g'>{productData.brand}</Link></span>

                            <div className='d-flex align-items-center mt-3'>
                                <div className='d-flex align-items-center w-100'>
                                    <span className='price text-g font-weight-bold'>
                                        <span className='rs'>Rs : </span> {productData.price} EGP</span>
                                </div>
                            </div>

                            <Button className='w-100 transition mt-3' onClick={addToCart}><ShoppingCartOutlinedIcon />
                                {
                                    isAdded === true ? 'Added' : 'Add'
                                }
                            </Button>
                        </div>

                    </>
                }
            </div>
        </div>
    )
}

export default Product;
 

 




 





























