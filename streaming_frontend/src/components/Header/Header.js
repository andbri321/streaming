import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { ReactComponent as PexelsIcon} from '../../Assets/pexels_icon.svg';
import { ReactComponent as PexelsName} from '../../Assets/pexels_name.svg';

const Header = () => {
  return (
    <Navbar className="navbar-dark bg-dark" >
    <Container fluid>
        <Navbar.Brand href="#">
          <PexelsIcon/>
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <PexelsName/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button 
            type="submit"
            className='btn-small btn-success'
            >
              <i class="bi bi-search"></i>
            </Button>
            <Button  
              type="submit"
              className='btn-small btn-success'
            >
              <i class="bi bi-funnel-fill"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
