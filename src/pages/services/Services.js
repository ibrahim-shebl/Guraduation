import React from "react";
import '../services/services.css'
import services from "../../assets/data/services";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        
          <div className="services" id="our-skills">
                <h2 className="main-title">services</h2>
                <div className="container_">
                {services.map((item, index) => (
                    <div className="box" key={index}>
                        <i className={item.icon}></i>
                        <h3>{item.title}</h3>
                        <div className="info">
                            <Link>Details</Link>
                        </div>
                    </div>
                ))}
                </div>
          </div>
         
    )
}
export default Services