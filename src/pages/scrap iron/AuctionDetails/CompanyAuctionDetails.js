import React from 'react'
import CommonSection from '../companySection/CommonSectionCompany'
import compaines from "../../../assets/data/compaines";
import { Link, useParams } from "react-router-dom";
import adverstise from '../../../assets/images/aderstsment.jpg'
import './CompanyAuctionDetails.css'
const CompanyAuctionDetails = () => {
  const { id } = useParams();
  const compainy = compaines.find((item) => item.id == id);
  const {title, companyName, img1, img2, img3, img4, img5, img6, img7, description, subDescription } = compainy;
  return (
    <div className='details'>
      <CommonSection title={title} />
      <h2 class="company_Auction">Welcome to {companyName} auction</h2>
      {/* Start advertisements */}
      <div class="advertisement">
        <div class="container">
          <h2 class="special-heading">Advertisement</h2>
          <div class="advertisement-content">
            <div class="advertisement-image">
              <img src={adverstise} alt="" />
            </div>
            <div class="text">
              <p>{description}</p>
              <hr />
              <p>{subDescription}</p><Link to='/fillForm'><input class="save d-block bg-blue c-white b-none w-fit btn-shape" type="submit" value="Go To Fill Form"/></Link>
            </div>
          </div>
        </div>
      </div>
      {/* End advertisements */}

      {/* End Gallery */}
      <div class="gallery" id="gallery">
        <h2 class="main-title">Gallery Goods</h2>
        <div class="container">
          <div class="box">
            <div class="image">
            <img src={img1} alt="" />
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src={img2} alt="" />
            </div>
          </div>
          <div class="box">
            <div class="image">
            <img src={img3} alt="" />
            </div>
          </div>
          <div class="box">
            <div class="image">
            <img src={img4} alt="" />
            </div>
          </div>
          <div class="box">
            <div class="image">
            <img src={img5} alt="" />
            </div>
          </div>
          <div class="box">
            <div class="image">
            <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* End Gallery */}
    </div>
  )
}

export default CompanyAuctionDetails