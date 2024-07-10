import React, { useState } from "react";
import CommonSection from './common-section/CommonSection';
import { Container, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import products from "../../assets/data/products";
import PerfumCard from "./PerfumCard";
 
const Perfum = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const housewareProducts = products.filter(item => item.category === "perfume");
    const displayPage = housewareProducts.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(housewareProducts.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            <CommonSection title="Welcome to the house of perfumes." />
            <div className="work-container">
            <h2 className="company_Auction game_heading">Perfumes</h2>
                <div className="project-container">
                    {displayPage.map((item, index) => (
                         
                            <PerfumCard
                            key={index} item={item}
                            />
                        
                    ))}
                </div>
            </div >
            <Container>
                <Row>
                    <div className="pagentPadding">
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={changePage}
                            previousLabel={"Prev"}
                            nextLabel={"Next"}
                            containerClassName="paginationBttns"
                        />
                    </div>
                </Row>
            </Container>
        </>
    )
};
export default Perfum