import { Col, Container, Row } from 'react-bootstrap';
import team1 from '../assets/img/team1.jpg';
import team2 from '../assets/img/team2.jpg';
import team3 from '../assets/img/team3.jpg';
import team4 from '../assets/img/team4.jpg';
const HomeTeam = () => {
  return <section id="team" className="bg-light-gray bg-dark1">
      <Container>
        <Row>
          <Col md={12}>
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <h5> Lorem ipsum dolor sit amet </h5>
              <h2 className="mb-0">Our <span className="color-pink">Creative</span> Team </h2>
            </div>
          </Col>
        </Row>
        <Row className="wow fadeInUp team" data-wow-delay={300}>
          <Col lg={6} xl={3} className="p-0 team-col ml-md-auto mr-md-0 mx-auto">
            <div className="team-image">
              <img src={team1} alt="team1" className="m-image1" />
            </div>
            <div className="team-classic-content hvr-team pink">
              <h3 className="mb-3 text-capitalize color-black">Jessica Jones</h3>
              <h5 className="mb-3 text-capitalize color-pink">Lead Designer</h5>
              <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
              <ul className="team-social">
                <li className="d-inline-block"><a href="" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                <li className="d-inline-block"><a href="" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                <li className="d-inline-block"><a href="" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </Col>
          <Col lg={6} xl={3} className="p-0 team-col2 mr-md-auto ml-md-0 mx-auto">
            <Row>
              <Col md={12} className="order-md-1">
                <div className="team-image">
                  <img src={team2} alt="team2" className="m-image2" />
                </div>
              </Col>
              <Col md={12} className="order-md-0">
                <div className="team-classic-content hvr-team2 blue">
                  <h3 className="mb-3 text-capitalize color-black">Rob Clark</h3>
                  <h5 className="mb-3 text-capitalize color-blue">marketing head</h5>
                  <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
                  <ul className="team-social">
                    <li className="d-inline-block"><a href="" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                    <li className="d-inline-block"><a href="" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li className="d-inline-block"><a href="" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <div className="w-100 d-none d-lg-block d-xl-none" />
          <Col lg={6} xl={3} className="p-0 team-col ml-md-auto mr-md-0 mx-auto team-row2">
            <div className="team-image">
              <img src={team3} alt="team3" className="m-image3" />
            </div>
            <div className="team-classic-content hvr-team yellow">
              <h3 className="mb-3 text-capitalize color-black">Nicole Cross</h3>
              <h5 className="mb-3 text-capitalize color-yellow">Visualizer</h5>
              <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
              <ul className="team-social">
                <li className="d-inline-block"><a href="" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                <li className="d-inline-block"><a href="" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                <li className="d-inline-block"><a href="" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </Col>
          <Col lg={6} xl={3} className="p-0 team-col2 mr-md-auto ml-md-0 mx-auto team-row2">
            <Row>
              <Col md={12} className="order-md-1">
                <div className="team-image2">
                  <img src={team4} alt="team4" className="m-image2" />
                </div>
              </Col>
              <Col md={12} className="order-md-0">
                <div className="team-classic-content hvr-team2 pink">
                  <h3 className="mb-3 text-capitalize color-black">Albert Rodricks</h3>
                  <h5 className="mb-3 text-capitalize color-pink">Creative Lead</h5>
                  <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
                  <ul className="team-social">
                    <li className="d-inline-block"><a href="" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                    <li className="d-inline-block"><a href="" className="twitter-bg-hvr"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li className="d-inline-block"><a href="" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>;
};
export default HomeTeam;