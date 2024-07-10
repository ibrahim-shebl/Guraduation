import React from "react";
import { Container } from "reactstrap";
import "./common-sectionCompaies.css";

const CommonSection = (props) => {
  return (
    <section className="company__section">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
