import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'
import Sidebar from '../../components/Sidebar';
import Product from '../../components/product';

const Listing = (props) => {
    // const [isOpenDropDown, setisOpenDropDown] = useState(false);
    // const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
    // const [showPerPage, setHhowPerPage] = useState(3);

    const [data, setData] = useState([]);

    // const [currentId, setCurrentId] = useState()

    let { id } = useParams();

    var itemsData = [];


    useEffect(() => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {

                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

        setData(list2);

        window.scrollTo(0,0);

    }, [id])






    const filterByBrand = (keyword) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.map((item__, index__) => {
                                if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                                    //console.log(item__)
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                }


                            })

                        })


                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {
                                    if (item__.brand.toLowerCase() === keyword.toLowerCase()) {
                                        itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                    }

                                })

                            }
                        })
                }

            })



        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        //console.log(itemsData)


        setData(list2);

        window.scrollTo(0, 0)

    }




    const filterByPrice = (minValue, maxValue) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {
                    if (id === item.cat_name.toLowerCase()) {
                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.length !== 0 &&
                                    item_.products.map((product, prodIndex) => {
                                        let price = parseInt(product.price.toString().replace(/,/g, ""))
                                        if (minValue <= price && maxValue >= price) {
                                            itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                        }

                                    })
                            })
                    }
                }

                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((product) => {
                                    let price = parseInt(product.price.toString().replace(/,/g, ""))
                                    if (minValue <= price && maxValue >= price) {
                                        itemsData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                    }
                                })

                            }
                        })
                }

            })

        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
        setData(list2);
    }





    const filterByRating = (keyword) => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {

                //page == single cat
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {

                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
                //page == double cat
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);

        setData(list2);

        data?.map((item)=>{
            if(item.rating===keyword){
                itemsData.push({ ...item, parentCatName: item.cat_name, subCatName: item.cat_name })
            }
        })


        const list3 = itemsData.filter((item, index) => itemsData.indexOf(item) === index);
      
        setData(list2);


        window.scrollTo(0, 0)

    }



    return (
        <> 

            <section className='listingPage'>

                <div className='container-fluid'>

                    {
                        <div className='breadcrumb flex-column'>
                            <h1 className="text-capitalize">{id.split('-').join(' ')}</h1>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Link to={''}>Home </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='text-capitalize'>{sessionStorage.getItem('cat')} </Link>
                                </li>
                                {
                                    props.single === false &&
                                    <li className='list-inline-item'>
                                        <Link to={''} class="text-capitalize">{id.split('-').join(' ')}</Link>
                                    </li>
                                }
                            </ul>
                        </div>

                    }



                    <div className='listingData'>
                        <div className='row'>
                            <div className='col-md-3 sidebarWrapper listzoom'>

                                {
                                    data.length !== 0 && <Sidebar data={props.data} currentCatData={data} filterByBrand={filterByBrand} filterByPrice={filterByPrice} filterByRating={filterByRating} />
                                }

                            </div>


                            <div className='col-md-9 rightContent homeProducts pt-0'>

                                <div className='productRow'>

                                    {
                                        data.length !== 0 &&
                                        data.map((item, index) => {
                                            return (
                                                <div className='item' key={index}>
                                                    <Product tag={item.type} item={item} />
                                                </div>
                                            )
                                        })
                                    }


                                </div>


                            </div>

                        </div>
                    </div>


                </div>
            </section>

        </>

    )
}

export default Listing;