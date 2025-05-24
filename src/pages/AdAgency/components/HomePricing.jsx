import { Col, Container, Row } from "react-bootstrap";
const HomePricing = () => {
  return <section id="pricing" className="bg-light-gray pricing-padding bg-dark2">
      <Container>
        <Row>
          <Col md={12}>
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <h5> Lorem ipsum dolor sit amet </h5>
              <h2 className="mb-0">Flexible<span className="color-pink"> Pricing</span> Packages </h2>
            </div>
          </Col>
        </Row>
        <Row className="mt-66px mt-xs-4rem">
          <Col lg={4} md={6} sm={12} className="text-center mb-xs-5 wow fadeInUp">
            <div className="pricing-item hvr-bg-blue">
              <div className="price-box clearfix">
                <div className="price_title">
                  <h4 className="text-capitalize">Basic</h4>
                </div>
              </div>
              <div className="price">
                <h2 className="position-relative"><span className="dollar">$</span>19<span className="month">/ month</span></h2>
              </div>
              <div className="price-description">
                <p>Full Access</p>
                <p>Unlimited Bandwidth</p>
                <p>Email Accounts</p>
                <p>8 Free Forks Every Months</p>
              </div>
              <div className="text-center">
                <a href="" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-white">learn more</a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center mb-xs-5 wow fadeInUp">
            <div className="pricing-item price-transform hvr-bg-yellow">
              <div className="quarter-triangle" />
              <div className="triangle-inner-content">
                <i className="fa fa-star" />
                <span> SPECIAL </span>
              </div>
              <div className="price-box2 clearfix">
                <div className="price_title">
                  <h4 className="text-capitalize m-0">Standard</h4>
                  <p className="price-sub-heading text-capitalize">the most popular</p>
                </div>
              </div>
              <div className="price">
                <h2 className="position-relative"><span className="dollar">$</span>29<span className="month">/ month</span></h2>
              </div>
              <div className="price-description">
                <p> Full Access</p>
                <p>Unlimited Bandwidth</p>
                <p>Email Accounts</p>
                <p>8 Free Forks Every Months</p>
              </div>
              <div className="text-center">
                <a href="" className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-white">learn more</a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="text-center wow fadeInUp">
            <div className="pricing-item hvr-bg-pink">
              <div className="price-box clearfix">
                <div className="price_title">
                  <h4 className="text-capitalize">Advance</h4>
                </div>
              </div>
              <div className="price">
                <h2 className="position-relative"><span className="dollar">$</span>49<span className="month">/ month</span></h2>
              </div>
              <div className="price-description">
                <p> Full Access</p>
                <p>Unlimited Bandwidth</p>
                <p>Email Accounts</p>
                <p>8 Free Forks Every Months</p>
              </div>
              <div className="text-center">
                <a href="" className="btn-setting color-black btn-hvr-up btn-pink btn-hvr-white">learn more</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomePricing;