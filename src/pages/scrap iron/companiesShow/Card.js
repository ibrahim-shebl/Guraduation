import React from 'react'
import { Link } from "react-router-dom";
const Card = (props) => {
    const { id, title, imgUrl, desc } = props.item;
    return (
        <div className="companyActionbox">
            <img src={imgUrl} alt="" />
            <div className="companyContent">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="companyinfo">
                    <Link to={`/compaines/${id}`}>Read more</Link>
                    <i className="fas fa-long-arrow-alt-right"></i>
                </div>
            </div>
        </div>


    );
}

export default Card