import logo from './logo.svg';
import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link href="#home">Home</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Travel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cooking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Beauty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Life Experience</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
      </header>
      <PostForm/>
    </div>
  );
}

export default App;
