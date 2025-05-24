import '@vendor/js/parallaxie.min.js';
import '@vendor/js/owl.carousel.min.js';
import "../assets/js/owl.carousel.js";
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import testimonial1 from '../assets/img/testimonial1.png';
import testimonial2 from '../assets/img/testimonial2.png';
import testimonial3 from '../assets/img/testimonial3.png';
import testimonial4 from '../assets/img/testimonial4.png';
import testimonial5 from '../assets/img/testimonial5.png';
import testimonial6 from '../assets/img/testimonial6.png';
import testimonial7 from '../assets/img/testimonial7.jpg';
import testimonial8 from '../assets/img/testimonial8.jpg';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomeClients = () => {
  useEffect(() => {
    const windowsize = $(window).width();
    if (windowsize && windowsize > 992) {
      $(".parallaxie").parallaxie({
        speed: 0.4,
        offset: 0
      });
    }
    $('.testimonial-two').owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 500,
      responsiveClass: true,
      nav: false,
      dots: true,
      dotsContainer: ".owl-thumbs",
      autoplay: false,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
          margin: 30
        },
        480: {
          items: 1,
          margin: 30
        },
        992: {
          items: 1,
          margin: 30
        }
      }
    });
  }, []);
  return <section id="clients" className="bg-white p-0 cursor-light no-transition">
      <h2 className="d-none">heading</h2>
      <div className="section-padding parallax-setting parallaxie parallax2">
        <Container>
          <Row>
            <Col md={12}>
              <div className="main-title wow fadeIn" data-wow-delay="300ms">
                <h5> Lorem ipsum dolor sit amet </h5>
                <h2 className="mb-0">Valuable<span className="color-pink"> Clients</span></h2>
              </div>
            </Col>
          </Row>
          <div className="testimonial-images">
            <div className="owl-thumbs owl-dots d-lg-block d-none">
              <div className="owl-dot animated-wrap active"><img src={testimonial1} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial2} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial3} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial4} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial5} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial6} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial7} className="animated-element" /></div>
              <div className="owl-dot animated-wrap"><img src={testimonial8} className="animated-element" /></div>
            </div>
          </div>
          <Row className="align-items-center position-relative">
            <Col md={12}>
              <div className="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn" data-wow-delay="400ms">
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial1} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">David Walker</h5>
                      <p className="color-white"> Chairman, AcroEx </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item hide-cursor">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial2} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Christina Williams</h5>
                      <p className="color-white"> HR Manager </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial3} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Sarah Jones</h5>
                      <p className="color-white"> Sales Executive </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial4} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Chris Gorgano</h5>
                      <p className="color-white"> Photographer </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial5} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Kate Carter</h5>
                      <p className="color-white"> Model </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial6} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Alex Curtis </h5>
                      <p className="color-white"> Manager </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial7} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Ashley Wilson</h5>
                      <p className="color-white"> Actor </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <p className="color-white testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                  <div className="testimonial-post">
                    <Link to="" className="post"><img src={testimonial8} alt="image" /></Link>
                    <div className="text-content">
                      <h5 className="color-white text-capitalize">Johnny Perkins</h5>
                      <p className="color-white"> Athlete </p>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>;
};
export default HomeClients;