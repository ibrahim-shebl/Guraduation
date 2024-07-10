import React from 'react'
import './factoriesAuction.css'
import './framework.css'
import { Link } from 'react-router-dom'
import nav_link from '../../assets/data/plan'
const planData = [
    {
        title: "Client",
        desc1: "Providing all available auctions.",
        desc2: "Providing the process of searching for auctions.",
        desc3: "Facilitating the process of entering auctions.",
        desc4: "Inform him of the required documents.",
        desc5: "Inform him of the auction date.",
        desc6: "Attendance is not random.",
        desc7: "Failure to attend without fulfilling the agreed upon conditions.",
    },

    {
        title: "Companies",
        desc1: "Auction marketing.",
        desc2: "Attendance of the largest number of merchants.",
        desc3: "Get the best possible price.",
        desc4: "Organizing the auction in professional ways.",
        desc5: "Find out how many dealers are attending the auction.",
        desc6: "No chaos and randomness in attendance.",
        desc7: "Do not be lax in applying the auction conditions.",
    },
    {
        title: "Auction Teams",
        desc1: "Continuous Improvement.",
        desc2: "Contracting with the largest number of companies.",
        desc3: "Using the best and latest marketing methods.",
        desc4: "Making it easier for merchants to access auctions.",
        desc5: "Ease of communication between us and merchants and providing everything they want.",
        desc6: "Difficulty communicating with merchants.",
        desc7: "Randomness in auction management and organization.",
    },
];

const Plans = () => {
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
                    <h1 className="p-relative">Plans</h1>
                    <div className="plans-page d-grid m-20 gap-20">
                        {/* start Plan */}
                        {planData.map((item, index) => (
                            <div className="plan green p-20" key={index}>
                                <div className="top bg-blue txt-c p-20">
                                    <h2 className="m-0 c-white">{item.title}</h2>
                                </div>
                                <ul className="list-none p-0">
                                    <li>
                                        <i className="fa-solid fa-check fa-fw yes"></i>
                                        <span>{item.desc1}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check fa-fw yes"></i>
                                        <span>{item.desc2}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check fa-fw yes"></i>
                                        <span>{item.desc3}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check fa-fw yes"></i>
                                        <span>{item.desc4}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check fa-fw yes"></i>
                                        <span>{item.desc5}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>

                                    <li>
                                        <i className="fa-solid fa-xmark fa-fw"></i>
                                        <span>{item.desc6}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-xmark fa-fw"></i>
                                        <span>{item.desc7}</span>
                                        <i className="fa-solid fa-circle-info help"></i>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        {/* End Plan */}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Plans

