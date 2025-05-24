import { useEffect } from 'react';
import { splitArray } from '@/utils';
import { demosData } from './data';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  useEffect(() => {
    $('.side-menu').removeClass('d-none');
    if ($("#sidemenu_toggle").length) {
      $("#sidemenu_toggle").on("click", function () {
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
  const splitData = splitArray(demosData, 6);
  return <header className="megamenu pt-5">
      <nav className="navbar navbar-top-default navbar-expand-lg static-nav transparent-bg fixed-menu">
        <div className="container container-width">
          <Link className="logo" to="">
            <img src={logo} alt="logo" title="Logo" />
          </Link>
          <div id="menu" className="collapse navbar-collapse d-none d-lg-block mod-menu">
            <ul className="nav navbar-nav mx-auto">
              <li className="nav-item mega-menu active"> <Link to="" className="nav-link dropdown-arrow">demos </Link>
                <ul className="hide-cursor bg-white text-left d-flex">

                  {splitData.map((chunk, idx) => <li className="p-0" key={idx}>
                      <ul>
                        {chunk.map(item => <li key={item.link}>
                            <a className="dropdown-items" target="_blank" href={item.link}> {item.name}</a>
                          </li>)}
                      </ul>
                    </li>)}

                </ul>
              </li>
              <li className="nav-item"> <a href="#features" className="scroll nav-link link">features</a></li>
              <li className="nav-item"> <a href="#elements" className="scroll nav-link link">elements</a></li>
              <li className="nav-item"> <a href="mailto:support@coderthemes.com" className="nav-link link">support</a></li>
            </ul>
            <a href="" target="_blank" className="btn-setting btn-summer-sky"><i className="fa fa-shopping-cart" /> Buy Now</a>
          </div>
          <a className="menu_bars d-inline-block d-lg-none menu-bars-setting" id="sidemenu_toggle">
            <div className="menu-lines">
              <span />
              <span />
              <span />
            </div>
          </a>
        </div>
      </nav>
      <Link id="close_side_menu" to="" />
    </header>;
};
export default NavigationBar;