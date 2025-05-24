import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../assets/img/about.jpg';
const HomeAbout = () => {
  return <section className="about overflow-visible bg-dark1" id="about">
      <Container>
        <Row>
          <Col lg={6} className="pr-5 mb-5 mb-lg-0 wow fadeInLeft">
            <div className="rare-box" />
            <img src={aboutImg} className="about-img-small position-relative w-100" />
          </Col>
          <Col lg={6} className="pl-6">
            <div className="main-title text-lg-left offset-md-1 mb-0 wow fadeInUp" data-wow-delay="300ms">
              <h5 className="wow fadeInUp" data-wow-delay="300ms"> Lorem ipsum dolor sit amet consectetur </h5>
              <h2 className="wow fadeInUp font-weight-light" data-wow-delay="400ms"> We are making <span className="text-blue-500">design</span> better for everyone</h2>
              <p className="pb-4 wow fadeInUp" data-wow-delay="500ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue diam, accumsan vitae justo non, euismod aliquam lectus. Etiam elementum tortor quis risus posuere, in cursus arcu lobortis.</p>
              <ul className="pb-5 text-left wow fadeInUp" data-wow-delay="600ms">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Morbi ornare nibh id cursus vestibulum.</li>
                <li>Duis vitae lectus facilisis, tristique lorem sit amet, malesuada diam.</li>
              </ul>
              <a href="" className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-pink text-white link wow fadeInUp" data-wow-delay="700ms">learn more</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomeAbout;