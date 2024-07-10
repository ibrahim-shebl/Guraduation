import React, { useState , useEffect } from 'react'
import PlumbingCard from './PlumbingCard'
import { Container, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import products from '../../assets/data/products';
import './Plumbingcard.css'
import CommonSection from './common-section/CommonSection'
const Plumbing = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const plumbProducts = products.filter(item => item.category === "plumbing");
  const displayPage = plumbProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(plumbProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <CommonSection title="Welcome." />
      <div className="articles" id="articles">
        <h2 className="main-title">Plumbing</h2>
        <div className="container">
          {displayPage.map((item) => (
            <div key={item.id}>
              <PlumbingCard item={item} />
            </div>
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
  )
}

export default Plumbing