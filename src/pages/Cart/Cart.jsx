import React, {useState ,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import './cart-page.css'
import emptyCart from '../../assets/images/emptyCart.png'
import axios from 'axios';
import { resetCart } from '../../store/shopping-cart/cartSlice'
import CommonSection from './common-section/CommonSection'
const Cart = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = '/signIn';
    }
  }, []);
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const userEmail = localStorage.getItem('userEmail'); // Retrieve user's email from localStorage

  const deleteItemFromBackend = async (productId) => {
    try {
      const response = await axios.post(`https://mohmed.testworks.top/public/api/remove-product-from-cart/${productId}?email=${userEmail}`);
      console.log(response.data);   
    } catch (error) {
      console.error('error to add :', error);
    }
  };

  const dispatch = useDispatch();

  const deleteProduct = (productId) => {
    dispatch(cartActions.deleteItem(productId));  
    deleteItemFromBackend(productId);
  };
  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0); 
  }, [cartItems]);


  const deleteAllItemsFromCart = async () => {
    try {
      const response = await axios.post(`https://mohmed.testworks.top/public/api/delete-all?email=${userEmail}`);
      console.log(response.data);   
      dispatch(resetCart());   
    } catch (error) {
      console.error('error', error);
    }
  };
  
  const handleResetCart = () => {
    deleteAllItemsFromCart();
  };
  return (
    <>
      <CommonSection title="Shopping" />
      <h2 className="company_Auction">Welcome To Shopping</h2>
      <section className="cart_product">
        <Container fluid>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? (
                  <>
                  <h2 className="no_product fs-4 text-center">Now Item Added To The Cart</h2>
                  <motion.div
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex justify-center items-center gap-4 py-10">
                    <div>
                      <img className="w-80 rounded-lg p-4 mx-auto" src={emptyCart} alt="emptyCart" />
                    </div>
                  </motion.div>
                </>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th className="color_table1">Image</th>
                        <th className="color_table1">Title</th>
                        <th className="color_table1">Price</th>
                        <th className="color_table1">Qty</th>
                        <th className="color_table1 det">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <Tr key={index} item={item} deleteProduct={deleteProduct} />
                        ))
                      }
                    </tbody>

                  </table>

                )
              }
              <div className="w-full py-4">
                {!isCartEmpty && (
                  <button
                    onClick={handleResetCart}
                    className="px-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide active:bg-red-500"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            </Col>
            <Col lg='3'>
              <div className="left">
                <h6 className="d-flex align-items-center justify-content-between">Subtotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="fs-6 mt-2 taxes">Taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buyCart-btn w-100"><Link className="cartText" to='/checkout'>Checkout</Link></button>
                <button className="buyCart-btn w-100 mt-3"><Link className="cartText" to='/'>Continue Shopping</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = ({ item, deleteProduct }) => {
  return (
    <tr>
      <td>
        <img src={item.photo} alt={item.name_en} />
      </td>
      <td className="color_table2 prod_title">{item.name_en}</td>
      <td className="color_table2">${item.price}</td>
      <td className="color_table2">{item.quantity}px</td>
      <td className="color_table2">
        <motion.i className="ri-delete-bin-line" whileTap={{ scale: 1.2 }} onClick={() => deleteProduct(item.id)}></motion.i>
      </td>
    </tr>
  );
};

export default Cart;




























 