import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Card as BootstrapCard } from 'react-bootstrap';
function EmployeeCard(props){
    return (
      <div>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={props.Img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.bio}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      );
}

export default EmployeeCard;