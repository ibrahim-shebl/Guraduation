import React, { useState } from "react";
import CommonSection from './common-section/CommonSection';
import './checkout.css';
import {useNavigate} from "react-router-dom";
import { Col,Form, FormGroup, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Checkout = () => {
    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goverment: '',
        city: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, goverment, city, address } = formData;
    
        try {
            const url = `https://mohmed.testworks.top/public/api/add-order?phone=${phone}&goverment=${goverment}&city=${city}&address=${address}&email=${email}&name=${name}`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                 
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Order placed successfully:', data);
                navigate("/");
                toast.success("Saved successfully");
                // Handle success or any other actions (e.g., redirect, notification)
            } else {
                toast.success("Failed to place order");
                console.error('Failed to place order:', response.status);
                // Handle error (e.g., show error message)
            }
        } catch (error) {
            console.error('Error placing order:', error);
            // Handle error (e.g., show error message)
        }
    };
    

    return (
        <>
            <CommonSection title="checkout" />
            <section className="checkout">
                <div className="container-fluid">
                    <Row>
                        <Col lg="8">
                            <h6 className="mb-4 mt-4 fw-bold heading">Billing Information.</h6>
                            <Form className="billing_form" onSubmit={handleSubmit}>
                                <FormGroup className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input
                                        type="number"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Governorate"
                                        name="goverment"
                                        value={formData.goverment}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Shipping Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <button type="submit" className="buyCart-btn auth_btn w-25 text-center">
                                    Place an Order
                                </button>
                            </Form>
                        </Col>
                        <Col lg="4">
                            <div className="checkout_cart mt-4">
                                <h6>Total Qty: <span>{totalQty}</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6>
                                    <span>
                                        Shipping: <br />
                                        Free Shipping
                                    </span>
                                    <span>$0</span>
                                </h6>
                                <h4>Total Cost: <span>${totalAmount}</span></h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default Checkout;
