import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CommonSection from './companySection/CommonSectionCompany'
import './compaines.css'
import Card from './companiesShow/Card';
import factories from "../../assets/data/factories";
import FactoriseCard from './AuctionDetails/factroiesShow/FactoriseCard';
import nav_link from '../../assets/data/factory';
const Factories = () => {
    const [allProducts, setAllProducts] = useState(factories);
    return (
        <section>
            <div className="factoryActionpage">
                <div className="sidebar_dashbord">
                    <h3>Auction</h3>
                    <ul>
                        {nav_link.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className={`d-flex align-center fs-14 c-black rad-6 ${item.active ? 'active' : ''}`} >
                                    <i className={item.icon}></i>
                                    <span>{item.display}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="factoryActioncontent">
                    <div className='profile-page'>
                        <CommonSection title="Welcome To Factories Auction" />
                        {/* start Articals */}
                        <div className="articles" id="articles">
                            <h2 className="main-title">Articles</h2>
                            <div className="container">
                                {allProducts.map((item) => (
                                    <div key={item.id}>
                                        <FactoriseCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* End Articals */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Factories