import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import CommonSection from './companySection/CommonSectionCompany'
import './compaines.css'
import Card from './companiesShow/Card';
import compaines from "../../assets/data/compaines";
import nav_link from '../../assets/data/company';
const Compaines = () => {
    const [allProducts, setAllProducts] = useState(compaines);
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
                        <CommonSection title="Welcome To Compaines Auction" />
                        {/* start Articals */}
                        <div className="articles" id="articles">
                            <h2 className="main-title">Articles</h2>
                            <div className="container">
                                {allProducts.map((item) => (
                                    <div key={item.id}>
                                        <Card item={item} />
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

export default Compaines