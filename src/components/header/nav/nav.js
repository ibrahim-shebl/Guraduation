import React, { useEffect, useContext } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { useState } from 'react';


const Nav = (props) => {


    const [navData, setNavData] = useState([]);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openDropdownMenu, setDropdownMenu] = useState(false);
    const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);
    useEffect(() => {
        setNavData(props.data);
    }, [])

    useEffect(() => {
        setIsOpenNav(props.openNav)
    }, [props.openNav])


    const closeNav = () => {
        props.closeNav();
    }

    const openDropdownFun = (index) => {
        setDropdownMenu(!openDropdownMenu)
        setDropdownMenuIndex(index)
    }

    return (
        <>
            {
                isOpenNav === true && <div className='navbarOverlay' onClick={props.closeNav}></div>
            }
            <div className={`nav d-flex align-items-center ${isOpenNav === true && 'click'}`}>
                <div className='container-fluid'>
                    <div className='row position-relative'>
                        <div className='col-sm-12 part2 position-static'>
                            <nav className={isOpenNav === true ? 'open' : ''}>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <Button><Link to={'/'} onClick={props.closeNav}>Home</Link></Button>
                                    </li>

                                    {
                                        navData.length !== 0 &&
                                        navData.map((item, index) => {
                                            return (
                                                <li className='list-inline-item' key={index}>
                                                    <Button onClick={() => openDropdownFun(index)}>
                                                        <Link to={windowWidth > 992 ? `/cat/${item.cat_name.toLowerCase()}` : '#'}>
                                                            {item.cat_name}
                                                            <KeyboardArrowDownIcon className={`${openDropdownMenu === true && openDropdownMenuIndex === index && 'rotateIcon'}`} />
                                                        </Link>
                                                    </Button>

                                                    {
                                                        item.items.length !== 0 &&
                                                        <div className={`dropdown_menu ${openDropdownMenu === true && openDropdownMenuIndex === index && 'open'}`}>

                                                            <ul>
                                                                {
                                                                    item.items.map((item_, index_) => {
                                                                        return (
                                                                            <li key={index_}>
                                                                                <Button onClick={props.closeNav}>
                                                                                    <Link to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}>
                                                                                        {item_.cat_name}
                                                                                    </Link>
                                                                                </Button>
                                                                            </li>

                                                                        )
                                                                    })
                                                                }


                                                            </ul>
                                                        </div>
                                                    }
                                                </li>
                                            )

                                        })
                                    }


                                    <li className='list-inline-item'>
                                        <Button onClick={props.closeNav}><Link to="/housewares">Housewares</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button onClick={props.closeNav}><Link to="/games">Games</Link></Button>
                                    </li>



                                    <li className='list-inline-item'>
                                        <Button><Link to="/plumbing">Plumbing</Link></Button>
                                    </li>

                                    <li className='list-inline-item'>
                                        <Button><Link to="/perfume">Perfumes</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link to='/cart'>Cart</Link></Button>
                                    </li>

                                    <li className='list-inline-item'>
                                        <Button><Link to='/about'>About</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link to='/contact'>Contact</Link></Button>
                                    </li>

                                </ul>



                            </nav>
                        </div>

                        {/* <div className='col-sm-2 part3 d-flex align-items-center'>
                            <div className='phNo d-flex align-items-center ml-auto'>
                                <span><HeadphonesOutlinedIcon /></span>
                                <div className='info ml-3'>
                                    <h3 className='text-g mb-0'>01025946540</h3>
                                    <p className='mb-0'>Support Center</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Nav;