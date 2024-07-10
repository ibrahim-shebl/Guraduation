import React, { useState , useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import axios from "axios";
const ReviewsGet = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`https://mohmed.testworks.top/public/api/show_review/${id}`);
            setReviews(response.data);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };
    useEffect(() => {
        fetchReviews();
    }, [id]);
    return (
        <section className="detailsPage mb-5">
            <div className='detailsContainer pt-3 pb-3'>
                <h2 className='main-title'>User reviews</h2>
                <div className='col-md-8 mt-5 mb-5'>
                    <br />
                    <ul>
                        {reviews.map((item, index) => (
                            <div className='card p-4 reviewsCard flex-row' key={index}>
                                <div className='image'>
                                    <span className='text-g d-block text-center font-weight-bold'>{item.userName}</span>
                                </div>

                                <div className='info'>
                                    <div className='d-flex align-items-center w-100'>
                                        <h5 className='text-light'>{item.created_at}</h5>
                                        <div className='ml-auto'>
                                            <Rating className='rate_fill' name="half-rating-read"
                                                value={parseFloat(item.rating)} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                    <p>{item.review} </p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ReviewsGet