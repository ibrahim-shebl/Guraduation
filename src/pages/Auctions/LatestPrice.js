import React, { useEffect, useState } from 'react';

const LatestPrice = ({ auctionId }) => {
  const [price, setPrice] = useState(null);  

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(`https://mohmed.testworks.top/public/api/get-auction-customer/${auctionId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch price');
        }
        const data = await response.json();
        if (data.length > 0) {
          setPrice(data[0].price);
        }
      } catch (error) {
        console.error('Error fetching price:', error);
      }
    };

    fetchPrice();
  }, [auctionId]);  

  return (
    <div>
      <marquee className="mt-3" bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">{price !== null ? `Welcome to Auction The current price is ${price} EGP` : 'Be the first to bid...'}</marquee> {/* عرض السعر إذا تم تحميله */}
    </div>
  );
};

export default LatestPrice;
