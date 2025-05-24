import { useEffect } from 'react';
import { toggleDocumentAttribute } from '@/utils';
import WOW from 'wow.js';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Elements from './components/Elements';
import Features from './components/Features';
import Content from './components/Content';
import '@vendor/css/plugins.min.css';
import '@vendor/css/megamenu.css';
import './assets/css/style.css';
const Home = () => {
  useEffect(() => {
    const width = $(window).width();
    if (width && width > 767) {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      }).init();
    }
    toggleDocumentAttribute('data-offset', '90', 'body');
    toggleDocumentAttribute('data-spy', 'scroll', 'body');
    toggleDocumentAttribute('data-target', '.navbar-nav', 'body');
    return () => {
      toggleDocumentAttribute('data-offset', '90', 'body', true);
      toggleDocumentAttribute('data-spy', 'scroll', 'body', true);
      toggleDocumentAttribute('data-target', '.navbar-nav', 'body', true);
    };
  }, []);
  return <>
      <NavigationBar />

      <Content />

      <Features />

      <Elements />

      <Footer />
    </>;
};
export default Home;