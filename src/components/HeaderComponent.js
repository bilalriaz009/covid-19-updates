import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Jumbotron,
  Container
} from 'reactstrap';
import '../header.css'
const Header = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src="../img/corona.png" width="40px" height="40px" alt="covid logo"/>
        </NavbarBrand>
          <NavbarText>Covid-19 Updates</NavbarText>
      </Navbar>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">
            COVID-19 Statistics - <b>PAKISTAN</b> <img src="https://disease.sh/assets/img/flags/pk.png" className="pakFlag"/>
          </h1>
          <p className="lead">Wash your hands, wear a mask and try to stay at home! </p>
        </Container>
      </Jumbotron>    
      
    </div>
  );
}

export default Header;