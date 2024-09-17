import React, { useState, useEffect } from "react";
import { Carousel, Offcanvas, Button } from "react-bootstrap"; // Added Button import
import { getProductos } from "../../services/getProductos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Home.css";
import Olla from "../img/queque_unicornio.jpg";
import mitad from "../img/queque_mitad.jpg";
import queque_fresa from "../img/queque_fresa.jpg";
import queque_navidad from "../img/queque_navidad.jpg";

function FormHome() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductos();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="custom_carousel"
      >
        <Carousel.Item>
          <img className="d-block w-100" src={Olla} alt="Olla inoxidable" />
          <Carousel.Caption>
            <h3>Olla inoxidable</h3>
            <p>Esta olla a un precio razonable</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={mitad} alt="Mitad" />
          <Carousel.Caption>
            <h3>Mitad</h3>
            <p>Deliciosa mitad de pastel</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={queque_fresa}
            alt="Queque de Fresa"
          />
          <Carousel.Caption>
            <h3>Queque de Fresa</h3>
            <p>Un sabor dulce y fresco</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={queque_navidad}
            alt="Queque de Navidad"
          />
          <Carousel.Caption>
            <h3>Queque de Navidad</h3>
            <p>Perfecto para las fiestas</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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

      <div className="move_Cards">
        <div className="product_container">
          {products.map((product, index) => (
            <div key={index} className="product_card">
              <img
                src={product.imageLink}
                alt={product.title}
                className="product_image"
              />
              <div className="product_info">
                <h3 className="product_title">{product.title}</h3>
                <p className="product_description">{product.description}</p>
                <Button onClick={() => handleAddToCart(product.title)}>
                <i className="bi bi-cart2">Añade al carrito</i>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormHome;
