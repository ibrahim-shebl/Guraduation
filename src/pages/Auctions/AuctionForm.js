import React, { useState } from "react";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
const AuctionForm = () => {
    const location = useLocation();
    const auctionIdFromURL = new URLSearchParams(location.search).get('auction_id');
    const [auctionId, setAuctionId] = useState(auctionIdFromURL || "");
    const [price, setPrice] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const navigate = useNavigate();

    async function form() {
        if (!auctionId || !price || !customerEmail) {
            toast.success('Fill Form')
            return;
        }
    
        let item = { auction_id: auctionId, price, customer_gmail: customerEmail };
        try {
            let response = await fetch("https://mohmed.testworks.top/public/api/add-auction", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(item)
            });

            if (response.ok) {
                setAuctionId("");
                setPrice("");
                setCustomerEmail("");
                toast.success('Saved Successfully')
                navigate("/auction");
            } else {
                toast.success('Failed to save data')
            }
        } catch (error) {
            console.error("Error saving form data:", error);
            toast.success('Failed to save form data')
            
        }
    }

    return (
        <div className='signZoom'>
            <section className='signIn mb-5'>
                <div className='loginWrapper'>
                    <div className='card shadow'>
                        <h3>Bid Now.</h3>
                        <form className='mt-4'>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="auctionId" label="Auction ID" className='w-100' type="text" value={auctionId}
                                    onChange={(e) => setAuctionId(e.target.value)}
                                    required />
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="price" type="number" label="Price" className='w-100' value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required />
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="customerEmail" type="email" label="Customer Email" className='w-100' value={customerEmail}
                                    onChange={(e) => setCustomerEmail(e.target.value)}
                                    required />
                            </div>
                            <div className='form-group mt-5 mb-4 w-100'>
                                <Button className='btn btn-g btn-lg w-100' id='send' onClick={form}>Save</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AuctionForm;
