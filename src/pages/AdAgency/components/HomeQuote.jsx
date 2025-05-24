import { useEffect } from 'react';
import '@vendor/js/parallaxie.min.js';
import { Col, Container, Row } from 'react-bootstrap';
const HomeQuote = () => {
  useEffect(() => {
    const windowsize = $(window).width();
    if (windowsize && windowsize > 992) {
      $(".parallaxie").parallaxie({
        speed: 0.4,
        offset: 0
      });
    }
  }, []);
  return <section className="parallax-setting parallaxie parallax1">
      <h2 className="d-none">heading</h2>
      <Container>
        <Row className="align-items-center position-relative">
          <Col md={12}>
            <div className="quote-text text-center wow fadeInRight" data-wow-delay="300ms">
              <div className="quote d-flex justify-content-start mb-2rem"><i className="fa fa-quote-left" /></div>
              <h2 className="font-weight-light mb-5 line-height-normal text-white"><span className="color-yellow">Creativity</span> is allowing yourself to make mistakes Art is knowing which ones to keep.</h2>
              <h3 className="color-pink">Alice Johnson</h3>
              <div className="quote d-flex justify-content-end mb-3"><i className="fa fa-quote-right" /></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomeQuote;