import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmployeeCard from './employeeCard.jsx';
import Employees from './Employees.js';

function createCard(contact) {
  return (
    <Col >
      <EmployeeCard 
        name={contact.name}
        Img={contact.Img}
        bio={contact.bio}
      />
    </Col>
  );
}

function CardFlex() {
  return (
    <Container>
      <Row>
        {Employees.slice(0, 2).map(createCard)} {/* First row */}
      </Row>
      <Row>
        {Employees.slice(2, 4).map(createCard)} {/* Second row */}
      </Row>
    </Container>
  );
}

export default CardFlex;
