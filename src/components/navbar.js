import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => (
  <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container> 
      <Navbar.Brand className="text-light"><Link className="navbar-brand" to="/">Felix Engineering</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link text-light" to="/biographyPage">Biografía</Link>
          <Link className="nav-link text-light" to="/hobbiesPage" >Pasatiempos</Link>
          <Link className="nav-link text-light" to="/abilitiesPage" >Habilidades</Link>
        </Nav>
      </Navbar.Collapse>
      </Container> 
  </Navbar>
)


export default NavigationBar;
