import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="p-half bg-dark2">
      <Container>
        <Row>
          <Col md={12} sm={12} className="text-center">
            <ul className="footer-icons mb-4">
              <li><Link to="" className="wow fadeInUp facebook"><i className="fab fa-facebook-f" /> </Link> </li>
              <li><Link to="" className="wow fadeInDown twitter"><i className="fab fa-twitter" /> </Link> </li>
              <li><Link to="" className="wow fadeInUp google"><i className="fab fa-google" /> </Link> </li>
              <li><Link to="" className="wow fadeInDown linkedin"><i className="fab fa-linkedin-in" /> </Link> </li>
              <li><Link to="" className="wow fadeInUp instagram"><i className="fab fa-instagram" /> </Link> </li>
              <li><Link to="" className="wow fadeInDown pinterest"><i className="fab fa-pinterest-p" /> </Link> </li>
            </ul>
            <p className="copyrights mt-2 mb-2">© {new Date().getFullYear()} Bamigos, Made with love by <Link to="">kg</Link></p>
          </Col>
        </Row>
      </Container>
    </footer>;
};
export default Footer;