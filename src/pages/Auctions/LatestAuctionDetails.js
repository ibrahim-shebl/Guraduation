import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import { useParams,Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import CommonSection from "./common-section/CommonSection";
import LatestPrice from "./LatestPrice";
const LatestAuctionDetails = () => {
    const { auction_id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://mohmed.testworks.top/public/api/get-auction/${auction_id}`) // تغيير الطلب ليكون باستخدام auction_id محدد
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data) {
                    setProduct(data.data);
                } else {
                    console.error('Invalid response format from API or product not found');
                }
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                toast.error('Failed to fetch product details. Please try again later.');
            });
    }, [auction_id]);

    const stripHtmlTags = (html) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    if (!product) {
        return <p>Loading...</p>;   
    }

    return (
        <>
        <   CommonSection title={product.product_name_en} />
            <section className="pt-5">
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={product.photo} alt="" />
                        </Col>
                        <Col lg="6">
                            <div className="product-details">
                                <h2>{product.product_name_en}</h2>
                                <div className="product-rating d-flex align-items-center gap-5 mb-3">
                                </div>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="product-price">The Start Price : {product.start_price}</span>
                                </div>
                                <LatestPrice auctionId={product.auction_id} />
                                <p className="des mt-3">{stripHtmlTags(product.product_description_en)}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="addTOCart__btn mb-8">
                                    <Link to={`/auctionForm?auction_id=${product.auction_id}`}>Bid Now</Link>
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default LatestAuctionDetails;
