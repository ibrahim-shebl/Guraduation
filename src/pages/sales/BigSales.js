import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import Rating from "@mui/material/Rating";
import { toast } from "react-toastify";
import './bigSale.css'
import CommonSection from './common-section/CommonSection';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const BigSales = () => {

    const [user_email, setUserEmail] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 16;

    useEffect(() => {
        const emailInfo = localStorage.getItem("user-info");
        if (emailInfo) {
            const { data } = JSON.parse(emailInfo);
            setUserEmail(data.user.email);
        }
    }, []);

    useEffect(() => {
        fetch('https://mohmed.testworks.top/public/api/get_product_review')
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    setProducts(data.data); // Set products directly from 'data' array
                } else {
                    console.error('Invalid response format from API');
                }
            })
            .catch(error => console.error('Error fetching products and reviews:', error));
    }, []);

    const addToCartBackend = async (data) => {
        try {
            const { product_id, price, quantity, user_email } = data;
            const url = `https://mohmed.testworks.top/public/api/addCart/${product_id}?quantity=${quantity}&price=${price}&user_email=${user_email}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error adding item to cart');
            }

        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const addToCartHandler = (product) => {
        if (!user_email) {
            console.error('No user_email available.');
            return;
        }

        addToCartBackend({
            product_id: product.id,
            price: parseInt(product.price),
            quantity: quantity,
            user_email: user_email,
        });

        dispatch(cartActions.addItem(product));
        toast.success('Added successfully');
        setQuantity(quantity + 1);
    };

    // Pagination Logic
    const visitedPage = pageNumber * productsPerPage;
    const displayProducts = products.slice(visitedPage, visitedPage + productsPerPage);
    const pageCount = Math.ceil(products.length / productsPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <CommonSection title="30% discount on all products." />
            <h2 className="main-title">Welcome.</h2>
            <div className='w-full -mt-10 xl:mt-14 py-10'>
                <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
                    {displayProducts.map(product => (
                        <div key={product.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 shadow-none hover:shadow-testShadow duration-200 gap-4 flex flex-col relative'>
                            <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>30% discount</span>
                            <div className='w-full h-auto flex items-center justify-center relative group'>
                                <img className='w-52 h-64 object-contain' src={product.photo} alt='productimg' />
                            </div>
                            <div className='px-4 z-10 bg-white'>
                                <div className='flex items-center justify-between'>
                                    <Link to={`/bigSale/${product.id}`}><h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>{product.name_en.substring(0, 50)}</h2></Link>
                                    <p className='text-sm text-gray-600 font-semibold'>{(product.price * 0.7).toFixed(2)} EGP</p>
                                </div>
                                <div>
                                    <Rating className="mb-4" name="half-rating-read" value={parseFloat(product.rating)} precision={0.5} readOnly />
                                </div>
                                <button onClick={() => addToCartHandler(product)} className='bigSale w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-2 rounded-md mt-3 '>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagentPadding">
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </>
    );
};

export default BigSales;
