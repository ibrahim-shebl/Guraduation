import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/index';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import DetailsPage from './pages/Details';
import data from './data/data';
import Carts from './components/cartProducts/cart/Carts';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp/index'
import Housewares from './pages/Houseware/Housewares';
import HousewaresDetails from './pages/Houseware/HousewaresDetails';
import { useSelector } from "react-redux";
import Plumbing from './pages/Plumbing/Plumbing'
import PlumbingDetails from './pages/Plumbing/PlumbingDetails'
import RihabAlsalaDetails from './pages/rihab alsala/RihabAlsalaDetails'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Checkout from './pages/checkout/Checkout';
import Loader from './assets/images/loading.gif';
import FactoriesAuction from './pages/scrap iron/FactoriesAuction';
import Profile from './pages/scrap iron/Profile';
import Compaines from './pages/scrap iron/Compaines';
import CompanyAuctionDetails from './pages/scrap iron/AuctionDetails/CompanyAuctionDetails';
import Form from './pages/scrap iron/Form';
import Factories from './pages/scrap iron/Factories';
import FactoriesAuctionDetails from './pages/scrap iron/AuctionDetails/FactoriesAuctionDetails';
import Plans from './pages/scrap iron/Plans';
import FooterBottom from './components/footer/FooterBottom';
import Perfum from './pages/perfum/Perfum';
import Games from './pages/games/Games';
import GamesDetails from './pages/games/GamesDetails';
import PerfumDetails from './pages/perfum/PerfumDetails';
import BigSales from './pages/sales/BigSales';
import LatestAuction from './pages/Auctions/LatestAuction';
import LatestAuctionDetails from './pages/Auctions/LatestAuctionDetails';
import AuctionForm from './pages/Auctions/AuctionForm';
import BigSaleDetails from './pages/sales/BigSaleDetails';
import Footer from './components/footer/Footer';




 

function App() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setProductData(data[1]);
      setIsloading(false);
    }, 2000);
  }, []);
   
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (

    data.data.length !== 0 &&

    <BrowserRouter>
        {
          isLoading === true && <div className='loader'><img src={Loader} /></div>
        }
        <Header data={data.data} />
        {showCart && <Carts />}
        <Routes>
          <Route exact={true} path="/" element={<Home data={data.data} />} />
          <Route exact={true} path="/cat/:id" element={<Listing data={data.data} single={true} />} />
          <Route exact={true} path="/cat/:id/:id" element={<Listing data={data.data} single={false} />} />
          <Route exact={true} path="/product/:id" element={<DetailsPage data={data.data} />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
          <Route path="/housewares" element={<Housewares />} />
          <Route path="/housewares/:id" element={<HousewaresDetails />} />
          <Route path="/auction" element={<LatestAuction />} />
          <Route path="/auction/:auction_id" element={<LatestAuctionDetails />} />
          <Route path="/perfume" element={<Perfum />} />
          <Route path="/perfume/:id" element={<PerfumDetails />} /> 
          <Route path="/games" element={<Games />} />
          <Route path="/game/:id" element={<GamesDetails />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/plumbing/:id" element={<PlumbingDetails />} />
          <Route path="/rihAbalsala/:id" element={<RihabAlsalaDetails />} />
          <Route path="/factoriesauction" element={<FactoriesAuction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/compaines" element={<Compaines />} />
          <Route path="/compaines/:id" element={<CompanyAuctionDetails />} />
          <Route path="/factories" element={<Factories />} />
          <Route path="/factories/:id" element={<FactoriesAuctionDetails />} />
          <Route path="/bigsale" element={<BigSales />} />
          <Route path="/bigSale/:id" element={<BigSaleDetails />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/fillForm" element={<Form />} />
          <Route path="/auctionForm" element={<AuctionForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FooterBottom />
    </BrowserRouter>



  );
}

export default App;
 





