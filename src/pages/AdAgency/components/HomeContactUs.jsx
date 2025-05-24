import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../assets/js/maps.min.js';
import { Col, Container, Row } from 'react-bootstrap';
const containerStyle = {
  width: 'auto',
  height: '409px'
};
const center = {
  lat: -33.8826177,
  lng: 151.2287826
};
const HomeContactUs = () => {
  return <section id="contact" className="bg-light-gray bg-dark1">
      <Container>
        <Row className="mx-lg-0">
          <Col lg={6} md={6} sm={12} className="p-0">
            <div className="contact-box bg-dark2">
              <div className="main-title text-center text-md-left mb-4">
                <h2 className="font-weight-normal">Connect With Us </h2>
              </div>
              <div className="text-center text-md-left">
                <p className="mb-3">123 Street New York City , United States Of America. </p>
                <p className="mb-3"> Office Telephone : 001 01085379709 <br />
                  Mobile : 001 63165370895 </p>
                <p className="mb-3"> Email: <a href="mailto:email@website.com" className="color-white">admin@website.com</a> <br />
                  Inquiries: <a href="mailto:email@website.com" className="color-white">email@website.com</a> </p>
                <p className="mb-0">Mon-Sat: 9am to 6pm</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="p-0 col-map box-shadow-map">
            <LoadScript googleMapsApiKey='AIzaSyAgIfLQi8KTxTJahilcem6qHusV-V6XXjw'>
              <GoogleMap mapContainerStyle={containerStyle} mapContainerClassName='bg-light-gray map' zoom={17.01} center={center}>
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomeContactUs;