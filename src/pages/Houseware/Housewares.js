import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import CommonSection from './CommonSection';
import "./housewares.css";
import "./pagination.css";
import ProductCards from './ProductCards';
import products from '../../assets/data/products';
const Housewares = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const housewareProducts = products.filter(item => item.category === "Houseware");
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
    <div className="house">
      <CommonSection title="Welcome to the household appliances section." />
      <h2 className="main-title gap_sales">House Wares</h2>
      <div className="pro-container">
        {displayPage.map((item, index) => (
          <ProductCards key={index} item={item} />
        ))}
      </div>
    </div>
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
  );
};

export default Housewares;


