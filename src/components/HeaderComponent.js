import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Jumbotron,
  Container
} from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src="../img/corona.png" width="40px" height="40px"/>
        </NavbarBrand>
          <NavbarText>Covid-19 Updates for Pakistan</NavbarText>
      </Navbar>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Latest Updates about COVID-19</h1>
          <p className="lead">Wash your hands, wear a mask and stay at home! </p>
        </Container>
      </Jumbotron>    
      
    </div>
  );
}

export default Header;