import { Container, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import Logo from "../img/logo_Code.jpeg";

const FormFooter = () => {
  return (
    <>
      <div>
        <br />
        <br />
      </div>
      <footer className="footer">
        <Container>
          <Row className="mb-4">
            <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
              <h5>Información</h5>
              <p>
                Si quieres saber más de nosotros o de nuestros productos, por
                favor comunícate por medio de nuestras redes sociales.
              </p>
              <div className="logo_Code">
                <img src={Logo} alt="logo_code" />
              </div>
            </Col>

            <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <Link as={Link} to="/Home" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="/AboutUs" className="text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link as={Link} to="/Home" className="text-white"></Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="text-center">
              <h5>Redes Sociales</h5>
              <Row className="justify-content-center">
                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://wa.me/+50686735928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="whatsapp"
                  >
                    <FaWhatsapp className="footer-icon-img" />
                    <span className="footer-icon-text">WhatsApp</span>
                  </a>
                </Col>
                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://instagram.com/daniel_gonzalez_fuentes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="instagram"
                  >
                    <FaInstagram className="footer-icon-img" />
                    <span className="footer-icon-text">Instagram</span>
                  </a>
                </Col>
                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="facebook"
                  >
                    <FaFacebookF className="footer-icon-img" />
                    <span className="footer-icon-text">Facebook</span>
                  </a>
                </Col>
                <Col xs="auto" className="footer-icon-col mb-3">
                  <a
                    href="https://www.google.com/maps/@9.9948717,-84.6590483,16.76z?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon"
                    id="address"
                  >
                    <FaMapMarkerAlt className="footer-icon-img" />
                    <span className="footer-icon-text">Dirección</span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <p>
                &copy; {new Date().getFullYear()} Indi Cake. Todos los derechos
                reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FormFooter;
