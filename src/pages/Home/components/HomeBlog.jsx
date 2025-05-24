import { Col, Container, Row } from 'react-bootstrap';
import splitBlog from '../assets/img/split-blog.jpg';
import { Link } from 'react-router-dom';
const HomeBlog = () => {
  return <section id="blog" className="half-section p-0 bg-change bg-yellow">
      <h2 className="d-none">heading</h2>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="p-0">
            <div className="hover-effect">
              <img alt="blog" src={splitBlog} className="about-img" />
            </div>
          </Col>
          <Col lg={6} md={12} className="p-lg-0">
            <div className="split-container-setting style-three text-center">
              <div className="main-title mb-5 wow fadeIn" data-wow-delay="300ms">
                <h5 className="font-18 text-blue"> Oct 12, 2019</h5>
                <h2 className="mb-0 font-weight-normal"> Agency Blog </h2>
              </div>
              <p className="color-black mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi ut aliquip.</p>
              <Link to="" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-pink">learn more</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomeBlog;