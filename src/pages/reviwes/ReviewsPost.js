import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Button } from '@mui/material';
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
const ReviewsPost = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id == id);
    const {description_en} = product;
    const [tab, setTab] = useState("desc");
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0.0);
    const [reviewFields, setReviewFields] = useState({
        review: "",
        userName: "",
        email: "",
        rating: 0,
        product_id: 0,
    });
    const changeInput = (name, value) => {
        if (name === "rating") {
            setRating(value);
        }
        setReviewFields(() => ({
            ...reviewFields,
            [name]: value,
            product_id: id,
        }))
    }
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

    const submitReview = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://mohmed.testworks.top/public/api/review-product", reviewFields);
            toast.success("Review Successfully");
            fetchReviews();
            setReviewFields({
                review: "",
                userName: "",
                email: "",
                rating: 0,
                product_id: 0,
            });
        } catch (error) {
            console.error("Failed to submit review:", error);
        }
    };
    const stripHtmlTags = (html) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    return (
        <section className="detailsPage mb-5">
            <div className='detailsContainer pt-3 pb-3'>
                <div className='card mt-5 p-5 detailsPageTabs'>
                    <div className='customTabs'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'>
                                <Button className={`${tab === "desc" ? "active-tab" : ""}`} onClick={() => setTab("desc")}
                                >Description</Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button className={`${tab === "rev" ? "active-tab" : ""}`} onClick={() => setTab("rev")}
                                >Reviews</Button>
                            </li>

                        </ul>


                        <br />

                        {
                            tab === "desc" ? (
                                <div className='tabContent'>
                                    <p>{stripHtmlTags(description_en)}</p>
                                </div>

                            ) : (

                                <div className='tabContent'>
                                    <div className='row'>
                                        <div className='col-md-8'>

                                            <br className='res-hide' />

                                            <br className='res-hide' />





                                            <form className='reviewForm' onSubmit={submitReview}>

                                                <h4>Add a review</h4> <br />

                                                <div className='row'>
                                                    <div className='col-md-8'>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                placeholder="Enter Name"
                                                                name="userName"
                                                                value={reviewFields.userName}
                                                                onChange={(e) => setReviewFields({ ...reviewFields, userName: e.target.value })}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                placeholder="Enter Email"
                                                                name="email"
                                                                value={reviewFields.email}
                                                                onChange={(e) => setReviewFields({ ...reviewFields, email: e.target.value })}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea
                                                                rows={4}
                                                                placeholder="Review Message....."
                                                                name="review"
                                                                value={reviewFields.review}
                                                                onChange={(e) => changeInput(e.target.name, e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='col-md-4'>
                                                        <div className='form-group1'>
                                                            <Rating
                                                                name="rating"
                                                                precision={0.5}
                                                                value={rating}
                                                                onChange={(e) => changeInput(e.target.name, e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>


                                                <br />
                                                <div className='form-group'>
                                                    <Button type='submit' className='btn-g btn-lg'>Submit Review</Button>

                                                </div>

                                            </form>

                                        </div>




                                        <div className='col-md-4 reviewBox'>
                                            <h4>Customer reviews</h4>

                                            <div className='d-flex align-items-center mt-2'>
                                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                <strong className='rate'>4.8 out of 5</strong>
                                            </div>

                                            <br />




                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='rate'>5 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '75%', height: '20px' }}>75%</div>
                                                </div>
                                            </div>


                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='rate'>4 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '50%', height: '20px' }}>50%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='rate'>3 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '55%', height: '20px' }}>55%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='rate'>2 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '35%', height: '20px' }}>35%</div>
                                                </div>
                                            </div>



                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className='rate'>1 star</span>
                                                <div class="progress" style={{ width: '85%', height: '20px' }}>
                                                    <div class="progress-bar bg-success" style={{ width: '25%', height: '20px' }}>25%</div>
                                                </div>
                                            </div>




                                        </div>




                                    </div>
                                </div>
                            )}




                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsPost