import React, { useState, useEffect, useRef } from 'react';
import '../header/header.css';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Logo from '../../assets/images/logo-ibid.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import IconHeart from '../../assets/images/icon-heart.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import IconUser from '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Nav from './nav/nav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import user_icon from '../../assets/images/user-icon.png'
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import products from '../../assets/data/products'
const Header = (props) => {
    // Theme
    const [theme, setTheme] = useState(
        localStorage.getItem("currentMode") ?? "dark"
    );
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isopenSearch, setOpenSearch] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const headerRef = useRef();
    const searchInput = useRef()

    const [categories, setcategories] = useState([
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast food',
        'Baking material',
        'Vegetables',
        'Fresh Fruit',
        'Bread and Juice',
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood',
        'Housware',
        'perfume',
        'plumbing',
        'prayer',
        'bearish',
        'musk',
        'islamicBook'



    ]);



    useEffect(() => {
        window.addEventListener("scroll", () => {
            let position = window.pageYOffset;
            if (position > 100) {
                headerRef.current.classList.add('fixed');
            } else {
                headerRef.current.classList.remove('fixed');
            }
        })
    }, [])


    const openSearch = () => {
        setOpenSearch(true);
        searchInput.current.focus();
    }

    const closeSearch = () => {
        setOpenSearch(false);
        searchInput.current.blur();
        searchInput.current.value = "";
    }

    const openNav = () => {
        setIsOpenNav(true);
        // setIsopenNavigation(true)
    }

    const closeNav = () => {
        setIsOpenNav(false);
        setisOpenAccDropDown(false)

    }

    // // add to cart
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };
    const signOut = () => {
        // Perform sign out actions here
        localStorage.removeItem('isLoggedIn'); // Remove login flag from localStorage
        // Additional sign-out logic as needed
        navigate('/');
    };

    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
    // Description of The Header : In this header, it is a logo for the project name, a search for products, and also a shopping cart. Within this header there is a component for the nav, which contains all the scripts in the project, and there is also a support number.
    return (
        <div className='headerzoom'>
            <div className='headerWrapper' ref={headerRef}>
                <header>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2 part1 d-flex align-items-center'>
                                <Link className="logo" to="/"><img src={Logo} /></Link>
                                {
                                    windowWidth < 992 &&
                                    <div className='ml_auto d-flex align-items-center'>
                                        <div className='navbarToggle search_icon' onClick={openSearch}><SearchIcon /></div>
                                        <ul className='list list-inline mb-0 headerTabs pl-0 mr-4'>
                                            <li className="list-inline-item">
                                                <span>
                                                    <button
                                                        onClick={() => {
                                                            // Send value to LS
                                                            localStorage.setItem(
                                                                "currentMode",
                                                                theme === "dark" ? "light" : "dark"
                                                            );

                                                            // get value from LS
                                                            setTheme(localStorage.getItem("currentMode"));
                                                        }}
                                                        className="mode flex"
                                                    >
                                                        {theme === "dark" ? (
                                                            <span className="icon-moon-o"> </span>
                                                        ) : (
                                                            <span className="icon-sun"> </span>
                                                        )}
                                                    </button>
                                                </span>
                                            </li>
                                            <li className='list-inline-item cartstyle'>
                                                <span>
                                                    <Link to={'/cart'}> <img src={IconCart} />
                                                        <span className='badge bg-success rounded-circle'>
                                                            {totalQuantity}
                                                        </span>
                                                    </Link>
                                                </span>
                                            </li>


                                        </ul>
                                        <div className='myAccDrop menu_icon'><Link to="/signIn"><PersonOutlineOutlinedIcon /></Link></div>
                                        <div className='navbarToggle menu_icon' onClick={openNav}><MenuIcon /></div>

                                    </div>
                                }
                            </div>

                            <div className='col-sm-7 part2'>
                                <div className={`headerSearch d-flex align-items-center ${isopenSearch === true ? 'open' : ''}`}>
                                    {
                                        windowWidth < 992 && <div class="closeSearch" onClick={closeSearch}><ArrowBackIosIcon /></div>
                                    }
                                    <Select data={categories} placeholder={'All Categories'} icon={false} />
                                    <div className='search'>
                                        <input type='text' placeholder='Search for items...' ref={searchInput}  />
                                        <SearchIcon className="searchIcon cursor" />
                                    </div>
                                </div>
                            </div>
                            {/*headerSearch start here */}


                            <div className='col-sm-3 d-flex align-items-center part3 res-hide'>
                                <div className='seach d-flex align-items-center'>
                                    <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            <li className="list-inline-item">
                                                <span>
                                                    <button
                                                        onClick={() => {
                                                            // Send value to LS
                                                            localStorage.setItem(
                                                                "currentMode",
                                                                theme === "dark" ? "light" : "dark"
                                                            );

                                                            // get value from LS
                                                            setTheme(localStorage.getItem("currentMode"));
                                                        }}
                                                        className="mode flex"
                                                    >
                                                        {theme === "dark" ? (
                                                            <span className="icon-moon-o"> </span>
                                                        ) : (
                                                            <span className="icon-sun"> </span>
                                                        )}
                                                    </button>
                                                </span>
                                            </li>


                                            <li className='list-inline-item cartstyle' onClick={toggleCart}>
                                                <span>
                                                    <img src={IconCart} />
                                                    {/* {totalQuantity > 0 ? totalQuantity : 0} */}
                                                    <span className='badge bg-success rounded-circle'>{totalQuantity}</span>

                                                </span>
                                            </li>
                                            {isLoggedIn ? (
                                                <li className='list-inline-item'>
                                                    <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                                                        <img src={IconUser} />
                                                        Account
                                                    </span>

                                                    {isOpenDropDown && (
                                                        <ul className='dropdownMenu'>
                                                            <li><Button onClick={signOut}><LogoutOutlinedIcon /> Sign out</Button></li>
                                                        </ul>
                                                    )}
                                                </li>
                                            ) : (
                                                <li className='list-inline-item'>
                                                    <Link to={'/signIn'}>
                                                        <Button className="btn btn-g">Sign In</Button>
                                                    </Link>
                                                </li>
                                            )}
                                             
                                        </ul>
                                    </ClickAwayListener>
                                </div>

                            </div>

                        </div>
                    </div>
                </header>


                <Nav data={props.data} openNav={isOpenNav} closeNav={closeNav} />

            </div>





        </div>
    )
}

export default Header;



































