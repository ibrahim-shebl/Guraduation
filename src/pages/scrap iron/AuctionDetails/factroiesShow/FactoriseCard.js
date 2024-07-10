import React from 'react'
import { Link } from "react-router-dom";
const FactoriseCard = (props) => {
    const { id, title, imgUrl, desc } = props.item;
    return (
        <div class="companyActionbox">
            <img src={imgUrl} alt="" />
            <div class="companyContent">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div class="companyinfo">
                    <Link to={`/factories/${id}`}>Read more</Link>
                    <i class="fas fa-long-arrow-alt-right"></i>
                </div>
            </div>
        </div>


    );
}

export default FactoriseCard