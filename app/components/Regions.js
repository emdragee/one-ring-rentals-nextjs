import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import regionsData from "./RegionList";
import Region from "./Region";

// Regions component (All Regions)
const Regions = () => (
  <Container  className="pt-4 pb-4">
    <h2 className="section-title">Regions</h2>
    <Row className="g-4">
      {regionsData.map((region, index) => (
        <Col md={4} sm={6} xs={12} key={index}>
          <Region
            name={region.name}
            location={region.location}
            image={region.image}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Regions;
