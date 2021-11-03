import React, {useState} from 'react';
import { Accordion } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Container, Collapse, CardBody, Card, CardHeader} from 'reactstrap';

import {Navbar, Nav} from "react-bootstrap";


interface Props {
    
}

export const TopNavbar: React.FC<Props> = () => {
    const [toggleQuestion, setToggequestion] = useState(1);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <LinkContainer to="/">
            <Navbar.Brand>Cyber Cityzens Space Club</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <LinkContainer to="/Traits">
                <Nav.Link>Traits</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}