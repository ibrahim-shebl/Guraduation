import React from "react";
import { Container } from "reactstrap";
import "./commonSection.css";

const CommonSection = (props) => {
  return (
    <section className="houseware__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
