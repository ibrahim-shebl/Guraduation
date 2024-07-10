import React, { useState,useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import rihabalsala from "../../assets/data/rihabalsala";
import "./rihab alsala.css";
import "./pagination.css";
import prayerImg1 from '../../assets/images/rihab/61p3XmzEAeL._AC_UL800_FMwebp_QL65_.webp'
import prayerImg2 from '../../assets/images/rihab/61J9AQ+CS9L._AC_SX679_.jpg'
import prayerImg3 from '../../assets/images/rihab/51bhcZjITUL._AC_UL800_FMwebp_QL65_.webp'
import prayerImg4 from '../../assets/images/rihab/71wlZZ6wSQL.__AC_SX300_SY300_QL70_ML2_.jpg'
import RihabAlsalaCards from "./RihabAlsalaCards";

const RihabAlsala = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(rihabalsala);
  useEffect(() => {
    if (category === "ALL") {
        setAllProducts(rihabalsala);
    }
    if (category === "prayer") {
      const filteredProducts = rihabalsala.filter(
          (item) => item.category === "prayer"
      );

      setAllProducts(filteredProducts);
  }
    if (category === "bearish") {
        const filteredProducts = rihabalsala.filter(
            (item) => item.category === "bearish"
        );

        setAllProducts(filteredProducts);
    }

    if (category === "musk") {
        const filteredProducts = rihabalsala.filter(
            (item) => item.category === "musk"
        );

        setAllProducts(filteredProducts);
    }

    if (category === "islamicBook") {
        const filteredProducts = rihabalsala.filter(
            (item) => item.category === "islamicBook"
        );

        setAllProducts(filteredProducts);
    }
}, [category]);
  return (

    <>
      <Container>
        <Row>
          <Col lg="12" className="text-center textauction">
            <h2 class="main-title">Rihab Alsala</h2>
          </Col>

          <Col lg="12">
            <div className="Auction__category d-flex align-items-center justify-content-center gap-2">
              <button
                className={`all__btn  ${category === "ALL" ? "actionBtnActive" : ""
                  } `}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${category === "prayer" ? "actionBtnActive" : ""
                  } `}
                onClick={() => setCategory("prayer")}
              >
                <img src={prayerImg1} alt="" />
                Prayer Rug
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${category === "bearish" ? "actionBtnActive" : ""
                  } `}
                onClick={() => setCategory("bearish")}
              >
                <img src={prayerImg2} alt="" />
                Bearish
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${category === "musk" ? "actionBtnActive" : ""
                  } `}
                onClick={() => setCategory("musk")}
              >
                <img src={prayerImg3} alt="" />
                Musk
              </button>
              <button
                className={`d-flex align-items-center gap-2 ${category === "islamicBook" ? "actionBtnActive" : ""
                  } `}
                onClick={() => setCategory("islamicBook")}
              >
                <img src={prayerImg4} alt="" />
                Islamic Books
              </button>

              
            </div>
          </Col>
        </Row>
      </Container>
      <div className="plub">
        <div className="rihab" id="rihab">
          <div className="container">
            {allProducts.map((item) => (
              <div key={item.id}>
                <RihabAlsalaCards item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>


  )
}

export default RihabAlsala

