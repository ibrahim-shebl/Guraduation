import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './latestAuction.css';
import CommonSection from './common-section/CommonSection';
import ReactPaginate from 'react-paginate';
import LatestPrice from './LatestPrice';

const LatestAuction = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); 
  const productsPerPage = 16; 

  useEffect(() => {
    fetch('https://mohmed.testworks.top/public/api/get-all-auction')
      .then(response => response.json())
      .then(data => {
        if (data && data.data) {
          setProducts(data.data);
        } else {
          console.error('Invalid response format from API');
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products. Please try again later.');
      });
  }, []);

  // Function to calculate countdown
  const calculateCountdown = endTime => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  // Set up intervals for countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedProducts = products.map(product => ({
        ...product,
        countdown: calculateCountdown(product.end_time)
      }));
      setProducts(updatedProducts);
    }, 1000);

    return () => clearInterval(interval);
  }, [products]);

  // Pagination logic
  const visitedPage = pageNumber * productsPerPage;
  const displayProducts = products.slice(visitedPage, visitedPage + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <CommonSection title="Welcome to the auctions page." />
      <h2 className="main-title">Welcome.</h2>
      <div className='w-full -mt-10 xl:mt-14 py-10'>
        <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
          {displayProducts.map(product => (
            <div key={product.auction_id} className="product__item">
              <div className="product__img">
                <img src={product.photo} alt="product-img" className="plum_img" />
              </div>
              <div className="product__content">
                <Link to={`/auction/${product.auction_id}`}>
                  <h5>{product.product_name_en.substring(0, 60)}</h5>
                </Link>
                <div className="d-flex align-items-center justify-content-between cart_info">
                  <span className="product__price">Starts With: {product.start_price} EGP</span>
                  <button className="addTOCart__btn_pro">
                    <Link to={`/auctionForm?auction_id=${product.auction_id}`}>Bid Now</Link>
                  </button>
                </div>
                <LatestPrice auctionId={product.auction_id} />
                <div className="time_left">
                  <h2>Time Left</h2>
                  {product.countdown && (
                    <div className="clock-wrapper d-flex align-items-center gap-3">
                      <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                          <h1 className="color size1 mb-2">{product.countdown.days}</h1>
                          <h5 className="color size2">Days</h5>
                        </div>
                        <span className="color spn_">:</span>
                      </div>
                      <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                          <h1 className="color size1 mb-2">{product.countdown.hours}</h1>
                          <h5 className="color size2">Hours</h5>
                        </div>
                        <span className="color spn_">:</span>
                      </div>
                      <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                          <h1 className="color size1 mb-2">{product.countdown.minutes}</h1>
                          <h5 className="color size2"> Minutes</h5>
                        </div>
                        <span className="color spn_">:</span>
                      </div>
                      <div className="clock-data d-flex align-items-center gap-3">
                        <div className="text-center">
                          <h1 className="color size1 mb-2">{product.countdown.seconds}</h1>
                          <h5 className="color size2">Seconds</h5>
                        </div>
                        <span className="color spn_">:</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="pagentPadding">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"paginationBttns"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default LatestAuction;
