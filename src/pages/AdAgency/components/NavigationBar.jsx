import { useEffect } from 'react';
import logoPureWhite from '../assets/img/logo-pure-white.png';
import { Col, Row } from 'react-bootstrap';
const NavigationBar = () => {
  useEffect(() => {
    const $window = $(window);

    // make header sticky
    const scrollTop = window.scrollY;
    $(window).on('scroll', function () {
      if (scrollTop >= 80) {
        $('header').addClass('header-appear');
      } else {
        $('header').removeClass('header-appear');
      }
    });

    // Smooth Scroll on link click
    $(".scroll").on("click", function (event) {
      event.preventDefault();
      // TODO type, fix the below type error
      const hash = $(this.hash);
      const offset = hash.offset();
      if (offset) {
        $('html,body').animate({
          // TODO (this) is not working, offset function returns undefined
          scrollTop: offset.top - 40
        }, 1100);
      }
    });

    // bottom menu fix
    if ($("nav.navbar").hasClass("bottom-nav")) {
      const offset = $(".bottom-nav").offset();
      if (offset) {
        const navHeight = offset.top;
        $(window).on("scroll", function () {
          const scrollTop = $window.scrollTop();
          if (scrollTop && scrollTop > navHeight) {
            $('header').addClass('header-appear');
          } else {
            $('header').removeClass('header-appear');
          }
        });
      }
    }

    // TODO active class not working
    if ($(".sidemenu_toggle").length) {
      $(".sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700);
      }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
      }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
      }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
      });
    }
  }, []);
  return <>
      <section className="top-header cursor-light">
        <Row className="no-gutters">
          <Col xs={6} lg={4}>
            <div className="slider-icons">
              <ul className="slider-social banner-social d-flex">
                <li className="animated-wrap"><a className="animated-element" href=""><i className="fab fa-facebook-f" /> </a></li>
                <li className="animated-wrap"><a className="animated-element" href=""><i className="fab fa-twitter" /></a></li>
                <li className="animated-wrap"><a className="animated-element" href=""><i className="fab fa-linkedin-in" /> </a></li>
                <li className="animated-wrap"><a className="animated-element" href=""><i className="fab fa-instagram" /> </a></li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={4} className="d-flex align-items-center justify-content-end justify-content-lg-center">
            <a className="menu_bars menu-bars-setting sidemenu_toggle link mr-3 mr-lg-0">
              <div className="menu-lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <a href="" className="btn-setting link btn-hvr-up btn-hvr-whatsapp color-white mr-lg-4 d-none d-lg-inline-block"><i className="fab fa-whatsapp" /> +1 631 112 1134</a>
          </Col>
        </Row>
      </section>

      <header className="cursor-light">
        <nav className="navbar navbar-top-default navbar-expand-lg nav-three-circles bottom-nav nav-box-shadow no-animation">
          <div className="container-fluid">
            <a className="logo ml-lg-1" href="">
              <img src={logoPureWhite} className="logo-default" alt="logo" title="Logo" />
            </a>
            <div className="collapse navbar-collapse d-none d-lg-block">
              <ul className="nav navbar-nav mx-auto">
                <li className="nav-item"> <a href="#home" className="scroll nav-link link">home</a></li>
                <li className="nav-item"> <a href="#about" className="scroll nav-link link">about</a></li>
                <li className="nav-item"> <a href="#work" className="scroll nav-link link">work</a></li>
                <li className="nav-item"> <a href="#pricing" className="scroll nav-link link">pricing</a></li>
                <li className="nav-item"> <a href="#clients" className="scroll nav-link link">clients</a></li>
                <li className="nav-item"> <a href="#blog" className="scroll nav-link link">blog</a></li>
                <li className="nav-item"> <a href="#contact" className="scroll nav-link link">contact</a></li>
              </ul>
            </div>
            <a href="" className="nav-btn-number btn-setting btn-hvr-up btn-hvr-whatsapp color-white mr-lg-3"><i className="fab fa-whatsapp" /> +1 631 112 1134</a>
            <div className="menu-btn">
              <a className="menu_bars menu-bars-setting animated-wrap sidemenu_toggle">
                <div className="menu-lines animated-element">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div className="side-menu center">
          <div className="quarter-circle">
            <div className="menu_bars2 active" id="btn_sideNavClose">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="inner-wrapper justify-content-center">
            <Col md={12} className="text-center">
              <a href="" className="logo-full mb-4"><img src={logoPureWhite} /></a>
            </Col>
            <nav className="side-nav m-0">
              <ul className="navbar-nav flex-lg-row">
                <li className="nav-item"> <a href="#home" className="scroll nav-link link">home</a></li>
                <li className="nav-item"> <a href="#about" className="scroll nav-link link">about</a></li>
                <li className="nav-item"> <a href="#work" className="scroll nav-link link">work</a></li>
                <li className="nav-item"> <a href="#pricing" className="scroll nav-link link">pricing</a></li>
                <li className="nav-item"> <a href="#clients" className="scroll nav-link link">clients</a></li>
                <li className="nav-item"> <a href="#blog" className="scroll nav-link link">blog</a></li>
                <li className="nav-item"> <a href="#contact" className="scroll nav-link link">contact</a></li>
              </ul>
            </nav>
            <div className="side-footer text-white w-100">
              <ul className="social-icons-simple">
                <li className="side-menu-icons"><a href=""><i className="fab fa-facebook-f color-white" /> </a> </li>
                <li className="side-menu-icons"><a href=""><i className="fab fa-instagram color-white" /> </a> </li>
                <li className="side-menu-icons"><a href=""><i className="fab fa-twitter color-white" /> </a> </li>
              </ul>
              <p className="text-white">© {new Date().getFullYear()} MegaOne. Made With Love by Coderthemes</p>
            </div>
          </div>
        </div>
        <a id="close_side_menu" href="" />
      </header>
    </>;
};
export default NavigationBar;