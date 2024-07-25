import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { ReactComponent as PexelsIcon} from '../../Assets/pexels_icon.svg';
import { ReactComponent as PexelsName} from '../../Assets/pexels_name.svg';

const Header = () => {

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function onSearch(e) {
    navigate('/movies/?search=' + inputValue)
  }

  return (
    <Navbar style={{backgroundColor: '#000000'}} >
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

          <Form className="d-flex center" onSubmit={e => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={inputValue}
              onChange={handleInputChange} 
            />

            <Button 
              type="submit"
              className='btn-small btn-success'
              onClick={()=>onSearch()}
            >
              <i className="bi bi-search"></i>
            </Button>

            <Button  
              type="submit"
              className='btn-small btn-success'
            >
              <i className="bi bi-funnel-fill"></i>
            </Button>
          </Form>

        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default Header;
