import React from 'react'
import './landing.css'
import landImg from '../../../assets/images/banner3.webp'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div class="landing">
        <div class="container">
            <div class="text">
                <h1>Welcome, To Auction.</h1>
                <p>This is an auction site for products, and in addition to being an auction site, it is a shopping site for products. Its purpose is to make it easier for Customers to obtain products or enter the auction to obtain the product after bidding.</p>
            </div>
            <div class="image">
                <img src={landImg} />
            </div>
        </div>
        <Link class="go-down"><i class="fas fa-angle-double-down fa-2x land_icon"></i></Link>
    </div>
  )
}

export default Landing