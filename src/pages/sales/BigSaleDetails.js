import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import CommonSection from "./common-section/CommonSection";
const BigSaleDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [user_email, setUserEmail] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const emailInfo = localStorage.getItem("user-info");
        if (emailInfo) {
            const { data } = JSON.parse(emailInfo);
            setUserEmail(data.user.email);
        }
    }, []);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://mohmed.testworks.top/public/api/get_product_review/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data && data.data) {
                    setProduct(data.data);
                } else {
                    console.error('Invalid response format from API or product not found');
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
                toast.error('Failed to fetch product details. Please try again later.');
            }
        };

        fetchProductDetails();
    }, [id]);

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

            toast.success('Added successfully');
            setQuantity(quantity + 1);
            dispatch(cartActions.addItem(data)); // Assuming cartActions.addItem adds to redux cart state

        } catch (error) {
            console.error('Error adding item to cart:', error);
            toast.error('Failed to add item to cart. Please try again.');
        }
    };

    const addToCartHandler = (product) => {
        if (!user_email) {
            console.error('No user_email available.');
            return;
        }

        addToCartBackend({
            product_id: product.id,
            price: parseInt(product.price),
            quantity: quantity,
            user_email: user_email,
        });
    };

    const stripHtmlTags = (html) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    if (!product) {
        return <p className="container">Loading...</p>;  
    }

    return (
        <>
           <CommonSection title={product.name_en} />
            <section className="pt-5">
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={product.photo} alt="Product" />
                        </Col>
                        <Col lg="6">
                            <div className="product-details">
                                <h2>{product.name_en}</h2>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="product-price">${product.price}</span>
                                    <span className="product-category">Category: {product.category}</span>
                                </div>
                                <p className="des mt-3">{stripHtmlTags(product.description_en)}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="addTOCart__btn mb-8" onClick={() => addToCartHandler(product)}>
                                    Add To Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default BigSaleDetails;
