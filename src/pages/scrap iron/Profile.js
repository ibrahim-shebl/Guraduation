import React from 'react'
import './factoriesAuction.css'
import './framework.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/me.jpg'
import nav_link from '../../assets/data/profile'
const profileData = [
    {
        name: "Ibrahim Shebl",
        gender: "male",
        governorate: "Menoufia",
        email: "ibra7im.shebl@gmail.com",
        phone: "01025946540",
        date: "24/7/2002",
        title: "Programmer & Businessman",
        programmingLanguage: "ReactJs & .Net",
        yearsOfExperience: "fresh",
        desc: "Responsible for Auction",
        profileImg: img1
    },
    {
        name: "Muhammad Etman",
        gender: "male",
        governorate: "Menoufia",
        email: "mo_muhammad@gmail.com",
        phone: "01125845540",
        date: "22/6/2002",
        title: "Programmer & marketer",
        programmingLanguage: "Php",
        yearsOfExperience: "fresh",
        desc: "Storing customer data in the database",
        profileImg: img1
    },
    {
        name: "Ahmed Esmail",
        gender: "male",
        governorate: "Menoufia",
        email: "ahmedesmail@gmail.com",
        phone: "01526145540",
        date: "23/4/2002",
        title: "Programmer & communication",
        programmingLanguage: "Php",
        yearsOfExperience: "fresh",
        desc: "Communicate with merchants",
        profileImg: img1
    },
];
const Profile = () => {
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
                    <h1>Profile</h1>
                    <div className="profile-page">
                        {/* Start Overview */}
                        {profileData.map((item, index) => (
                            <div className="overview rad-10 d-flex align-center" key={index}>
                                <div className="avatar-box txt-c">
                                    <img className="rad-half" src={item.profileImg} alt="" />
                                    <h3 className="m-0"> {item.name}</h3>
                                    <p className="c-grey"> {item.desc}</p>
                                    <div className="level rad-6 bg-eee p-relative">
                                        <span style={{ width: '70%' }}></span>
                                    </div>
                                    <div className="rating">
                                        <i className="fa-solid fa-star c-orange fs-13"></i>
                                        <i className="fa-solid fa-star c-orange fs-13"></i>
                                        <i className="fa-solid fa-star c-orange fs-13"></i>
                                        <i className="fa-solid fa-star c-orange fs-13"></i>
                                        <i className="fa-solid fa-star c-orange fs-13"></i>
                                    </div>
                                </div>
                                <div className="info-box w-full txt-c-mobile">
                                    {/* Start Information Row */}
                                    <div className="box p-20 d-flex align-center">
                                        <h4 className="c-grey fs-15 m-0 w-full">General Information</h4>
                                        <div className="fs-14">
                                            <span className="c-grey">Full Name :</span>
                                            <span className='text'> {item.name}</span>
                                        </div>
                                        <div className="fs-14">
                                            <span className="c-grey">Gender :</span>
                                            <span className='text'> {item.gender}</span>
                                        </div>
                                        <div className="fs-14">
                                            <span className="c-grey">Governorate :</span>
                                            <span className='text'> {item.governorate}</span>
                                        </div>
                                    </div>
                                    {/* End Information Row */}
                                    {/* Start Information Row */}
                                    <div className="box p-20 d-flex align-center">
                                        <h4 className="c-grey w-full fs-15 m-0">Personal Information</h4>
                                        <div className="fs-14">
                                            <span className="c-grey">Email :</span>
                                            <span className='text'> {item.email}</span>
                                        </div>
                                        <div className="fs-14">
                                            <span className="c-grey">Phone :</span>
                                            <span className='text'> {item.phone}</span>
                                        </div>
                                        <div className="fs-14">
                                            <span className="c-grey">Date Of Birth :</span>
                                            <span className='text'> {item.date}</span>
                                        </div>
                                    </div>
                                    {/* End Information Row */}
                                    {/* Start Information Row */}
                                    <div className="box p-20 d-flex align-center">
                                        <h4 className="c-grey w-full fs-15 m-0">Job Information</h4>
                                        <div className="fs-14">
                                            <span className="c-grey">Title :</span>
                                            <span className='text'> {item.title}</span>
                                        </div>
                                        <div className="fs-14">
                                            <span className="c-grey">Programming Language :</span>
                                            <span className='text'> {item.programmingLanguage}</span>
                                        </div>
                                        <div className="fs-14 ml-3">
                                            <span className="c-grey">Years Of Experience :</span>
                                            <span className='text'> {item.yearsOfExperience}</span>
                                        </div>
                                    </div>
                                    {/* End Information Row */}
                                </div>
                            </div>
                        ))}
                        {/* End Overview */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Profile

