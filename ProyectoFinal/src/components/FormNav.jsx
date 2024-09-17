import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../img/logo.jpg";
import {Link} from 'react-router-dom';

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="custom_NavBar">
        <Container fluid>
          <Navbar.Brand>
            <img src={Logo} alt="Logo" style={{ height: "70px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} to="/Home" className="text-light1">Home</Nav.Link>
              <Nav.Link as={Link} to="/Login" className="text-light1">Login</Nav.Link>
              <NavDropdown title="Other" id="navbarScrollingDropdown">
                <NavDropdown.Item><Nav.Link as={Link} to="/Productos" className="text-light1">Productos</Nav.Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </NavDropdown>
              <Button variant="primary" onClick={handleShow}>
                <i className="bi bi-cart2"></i>
              </Button>
            </Nav>
            <Form className="d-flex">
              <Form.Control
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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <i className="bi bi-cart2"> Carrito</i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarComponent;

