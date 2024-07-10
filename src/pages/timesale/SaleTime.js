import React,{useEffect,useState} from 'react'
import './saleTime.css'
import saleImg from '../../assets/images/sale1.webp'
import { Link } from 'react-router-dom'
const SaleTime = () => {
  const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    let interval;
    const countDown = () => {

        const destination = new Date ('jul 8, 2025')
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different = destination - now 
            const days = Math.floor(different / (1000  * 60 * 60 * 24))
            const hours = Math.floor(different % (1000  * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(different % (1000  * 60 * 60 ) / (1000 * 60 ))
            const seconds = Math.floor(different % (1000  * 60  ) / 1000 )


            if(destination < 0 ) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        });
    };
     
    



    useEffect(() => {
        countDown()
    })
  return (
    <div class="events" id="events">
      <div class="dots dots-up"></div>
      <div class="dots dots-down"></div> 
      <h2 class="main-title">Big Sale</h2>
      <div class="container">
        <img decoding="async" src={saleImg} alt="" />
        <div class="info">
          <div class="time">
            <div class="unit">
              <span>{days}</span>
              <span>Days</span>
            </div>
            <div class="unit">
              <span>{hours}</span>
              <span>Hours</span>
            </div>
            <div class="unit">
              <span>{minutes}</span>
              <span>Minutes</span>
            </div>
            <div class="unit">
              <span>{seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
          <h2 class="title">All products are included in the offer.</h2>
          <p class="description">
          On the occasion of Black Friday offers, all products within this section have discounts, and the offer is valid for three days as shown.
          </p>
        </div>
        <div class="subscribe">
          <form action="">
            <p>If you want to go to product offers</p>
            <Link to="/bigsale">Go To Offers</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SaleTime