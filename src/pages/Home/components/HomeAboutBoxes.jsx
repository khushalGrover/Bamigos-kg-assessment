import { Col, Container, Row } from "react-bootstrap";
const HomeAboutBoxes = () => {
  return <section className="bg-dark3">
      <Container>
        <Row>
          <Col md={12}>
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <h2>We’re <span className="color-pink">Creative</span> Branding<br />and Corporate Identity <span className="color-blue">Agency</span></h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} xs={12}>
            <div className="about-box mb-5 mb-lg-0 mx-auto bg-blue">
              <span className="pro-step d-inline-block color-white"><i className="fa fa-pencil-alt" /></span>
              <h5 className="font-weight-500 color-white mt-25px mb-15px text-capitalize">branding design</h5>
              <p className="font-weight-light color-white">Lorem dapibus, tortor eget turpis auctor, convallis odio ac.</p>
            </div>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <div className="about-box mb-5 mb-lg-0 mx-auto bg-yellow">
              <span className="pro-step d-inline-block color-white"><i className="fa fa-cog" /></span>
              <h5 className="font-weight-500 color-white mt-25px mb-15px">SEO Marketing</h5>
              <p className="font-weight-light color-white">Etiam luctus, lacus maximus elementum dapibus felis.</p>
            </div>
          </Col>
          <Col lg={4} md={12} xs={12}>
            <div className="about-box mb-0 mx-auto bg-pink">
              <span className="pro-step d-inline-block color-white"><i className="fa fa-code" /></span>
              <h5 className="font-weight-500 color-white mt-25px mb-15px text-capitalize">web development</h5>
              <p className="font-weight-light color-white">Pellentesque habitant morbi tristique senectus et malesuada.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomeAboutBoxes;