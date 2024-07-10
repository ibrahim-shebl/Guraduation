import React ,{useState} from 'react'
import './factoriesAuction.css'
import './framework.css'
import { Link, useNavigate } from 'react-router-dom'
import welcomeImg from '../../assets/img/images/welcome.png'
import avatar from '../../assets/images/me.jpg'
import nav_link from '../../assets/data/dashboard'

import { toast } from "react-toastify";
const FactoriesAuction = () => {

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone number is required!');
    } else if (email === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email!');
    }else if (massage === '') {
      setErrMsg('Message is required!');
    } else {
      const formData = new FormData();
      formData.append('name', username);
      formData.append('email', email);
      formData.append('phone', phoneNumber);
      formData.append('massage', massage);

      fetch('https://mohmed.testworks.top/public/api/add-contact', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
          
        })
        toast.success('Added Successfully')
        navigate("/");
    }
  };

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
          <h1>Home Page</h1>
          <div className="factoryActionwrapper">
            {/* Start Welcome Widget */}
            <div className="welcome rad-10 txt-c-mobile block-mobile">
              <div className="intro">
                <div>
                  <h2 className="m-0">Welcome</h2>
                  <p className="c-grey">Customers</p>
                </div>
                <img className="hide-mobile" src={welcomeImg} alt="" />
              </div>
              <img decoding="async" src={avatar} alt="" className="avatar" />
              <div className="body block-mobile">
                <div>Auction Teams <span className="d-block c-grey fs-14 mt-10">Developers</span></div>
                <div>80 <span className="d-block c-grey fs-14 mt-10">Number of Auctions</span></div>
                <div>600 <span className="d-block c-grey fs-14 mt-10">Number of clients</span></div>
              </div>
              <Link to="/profile" className="visit bg-blue c-white">Profile</Link>
            </div>
            {/* End Welcome Widget */}
            {/* Start Latest Post Widget*/}
            <div className="latest-post rad-10 p-relative">
              <h2>Support Center</h2>
              <div className="top d-flex align-center">
                <img decoding="async" className="avatar" src={avatar} alt="" />
                <div className="info">
                  <span className="sp_info text d-block fw-bold">Team communication.</span>
                  <span className="sp_info c-grey">You will be answered within moments.</span>
                </div>
              </div>
              <div className="post-content txt-c-mobile">
                We are here to help you know how to enter auctions with ease, and we will inform you of the required papers and the system and conditions of each auction.
              </div>
            </div>
            {/* End Latest Post Widget*/}
            {/* start Last Project Progress Widget */}
            <div className="last-project rad-10 p-relative">
              <h2>Paper Work</h2>
              <ul className="m-0 p-relative">
                <li className="d-flex align-center done">Tax card.</li>
                <li className="d-flex align-center done">Auction brochure.</li>
                <li className="d-flex align-center done">Fill the auction form you want.</li>
                <li className="d-flex align-center current">Auction insurance.</li>
                <li className="d-flex align-center">Attendance on time.</li>
              </ul>
              <img decoding="async" className="launch-icon hide-mobile" src="image/project.png" alt="" />
            </div>
            {/* End Last Project Progress Widget */}
            {/* Start companies Widget */}
            <div className="companies rad-10">
              <h2>Companies Statistics.</h2>
              <p>The number of companies and factories we deal with.</p>
              <div className="d-flex txt-c gap-20 f-wrap">
                <div className="box rad-10 c-grey">
                  <i className="fa-regular fa-rectangle-list fa-2x c-orange"></i>
                  <span className="d-block c-black fw-bold">200</span>
                  Total
                </div>
                <div className="box rad-10 c-grey">
                  <i className="fa-solid fa-spinner fa-2x c-blue"></i>
                  <span className="d-block c-black fw-bold">50</span>
                  Pending
                </div>
                <div className="box rad-10 c-grey">
                  <i className="fa-regular fa-circle-check fa-2x c-green"></i>
                  <span className="d-block c-black fw-bold">170</span>
                  Continue
                </div>
                <div className="box rad-10 c-grey">
                  <i className="fa-regular fa-rectangle-xmark fa-2x c-red"></i>
                  <span className="d-block c-black fw-bold">30</span>
                  Deleted
                </div>
              </div>
            </div>
            {/* End companies Widget */}
            {/* Start Quick Draft Widget */}
            <div className="quick-draft rad-10">
              <h2>Quick Draft</h2>
              <p className="c-grey">Write us your opinion on our website.</p>
              <form>
                <input className="_input rad-6" type="text"
                  placeholder="Enter Name"
                  name="userName"
                  onChange={(e) => setUsername(e.target.value)}
                        value={username}
                  required />
                <input className="_input rad-6" type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required />
                  <input className="_input rad-6" type="number"
                  placeholder="Enter Phone"
                  name="email"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  required />
                <textarea className="d-block w-full bg-eee rad-6" placeholder="Your Thought" name="review"
                   onChange={(e) => setMessage(e.target.value)}
                   value={massage}
                  required></textarea>
                <input className="save d-block bg-blue c-white b-none w-fit btn-shape" type="submit" value="Save" onClick={handleSend}/>
              </form>
            </div>
            {/* End Quick Draft Widget */}
            
          </div>
        </div>
      </div>
    </section>

  )
}

export default FactoriesAuction

