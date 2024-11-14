import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Region from './Region';
import regionsData from './RegionList';

const PopularRegions = () => {
  const popularRegions = regionsData.filter((region) => region.Popular);
  return (
    <Container className="pt-4 pb-4">
      <h2 className="section-title">Popular Regions</h2>
      <Row className="g-4">
        {popularRegions.map((region, index) => (
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
};

export default PopularRegions;
