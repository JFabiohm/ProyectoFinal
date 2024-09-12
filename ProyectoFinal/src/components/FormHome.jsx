import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  NavDropdown,
  Carousel,
  Offcanvas,
  Card,
} from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/Home.css";
import Olla from "../img/queque_unicornio.jpg";
import Logo from "../img/logo.jpg";
import mitad from "../img/queque_mitad.jpg";
import chocoFresa from "../img/queque_chocoFresa.jpg";
import queque_fresa from "../img/queque_fresa.jpg";
import queque_navidad from "../img/queque_navidad.jpg";

function ExampleCarouselImage({ text }) {
  return <img className="d-block w-100" src={Olla} alt={text} />;
}

function FormHome() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <div className="body_home">
        {/* Navbar code remains the same */}
        <Navbar expand="lg" className="custom_NavBar">
          <Container fluid>
            <Navbar.Brand>
              <img src={Logo} alt="Logo" style={{ height: "70px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Login</Nav.Link>
                <NavDropdown title="Other" id="navbarScrollingDropdown">
                  <NavDropdown.Item>Products</NavDropdown.Item>
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

        <div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="custom_carousel"
          >
            <Carousel.Item>
              <ExampleCarouselImage src={Olla} text="Olla inoxidable" />
              <Carousel.Caption>
                <h3>Olla inoxidable</h3>
                <p>Esta olla a un precio razonable</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage src={mitad} text="Mitad" />
              <Carousel.Caption>
                <h3>Mitad</h3>
                <p>Deliciosa mitad de pastel</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage src={queque_fresa} text="Queque de Fresa" />
              <Carousel.Caption>
                <h3>Queque de Fresa</h3>
                <p>Un sabor dulce y fresco</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage
                src={queque_navidad}
                text="Queque de Navidad"
              />
              <Carousel.Caption>
                <h3>Queque de Navidad</h3>
                <p>Perfecto para las fiestas</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more Carousel.Item here */}
          </Carousel>
        </div>

        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <i className="bi bi-cart2"> Carrito</i>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="move_Cards">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mitad} className="img_Cards" />
            <Card.Body>
              <Card.Title>Mitad</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleAddToCart("Mitad")}
              >
                Añadir al carrito
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={queque_fresa} className="img_Cards" />
            <Card.Body>
              <Card.Title>Queque de Fresa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleAddToCart("Queque de Fresa")}
              >
                Añadir al carrito
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={queque_navidad}
              className="img_Cards"
            />
            <Card.Body>
              <Card.Title>Queque de Navidad</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleAddToCart("Queque de Navidad")}
              >
                Añadir al carrito
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={chocoFresa} className="img_Cards" />
            <Card.Body>
              <Card.Title>ChocoFresa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleAddToCart("ChocoFresa")}
              >
                Añadir al carrito
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FormHome;
