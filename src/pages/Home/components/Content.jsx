import { useEffect } from 'react';
import DemoCard from './DemoCard';
import { demosData } from './data';
import "@vendor/js/jquery.cubeportfolio.min.js";
const Content = () => {
  useEffect(() => {
    $('#js-grid-blog-posts').cubeportfolio({
      filters: '#js-filters-mosaic-flat',
      search: '#js-search-blog-posts',
      defaultFilter: '*',
      layoutMode: 'mosanary',
      animationType: "scaleSides",
      gapVertical: 40,
      gapHorizontal: 40,
      sortByDimension: true,
      gridAdjustment: 'responsive',
      mediaQueries: [{
        width: 1800,
        cols: 4
      }, {
        width: 1500,
        cols: 3
      }, {
        width: 1100,
        cols: 3
      }, {
        width: 600,
        cols: 2
      }, {
        width: 320,
        cols: 1
      }],
      caption: 'none',
      displayType: 'fadeIn',
      displayTypeSpeed: 400
    });
  }, []);
  return <section id="demos" className="shop">
      <div className="container demo-container-width">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <div className="main-title-opacity-text">
                <h1 className="d-flex justify-content-start">Unique </h1>
                <h1 className="d-flex justify-content-end">Demos </h1>
              </div>
              <h1 className="color-black heading-tooltip-number position-relative d-inline-block"> 20<sup className="color-black fa fa-plus" /> </h1>
              <h2 className="color-black"> Pre-Built Demos </h2>
              <p className="color-black font-weight-500 text-uppercase">
                {/* THE BIGGEST TEMPLATE OF 2024 WITH */}
                BEAUTIFUL AND TRULY UNIQUE PRE-BUILT <span className="font-weight-bold color-summer-sky">complete websites</span> FOR YOUR PERSONAL AND
                BUSINESS NEED.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row mt-0 mx-0 mb-4 d-block d-md-flex justify-content-center">
              <div id="js-filters-mosaic-flat" className="cbp-l-filters-alignCenter">
                <div data-filter="*" className="cbp-filter-item-active cbp-filter-item cbp-filter-style">
                  All
                </div>
                <div data-filter=".creative" className="cbp-filter-item cbp-filter-style">
                  Creative
                </div>
                <div data-filter=".corporate" className="cbp-filter-item cbp-filter-style">
                  Corporate
                </div>
                <div data-filter=".portfolio" className="cbp-filter-item cbp-filter-style">
                  Portfolio
                </div>
                <div data-filter=".shop" className="cbp-filter-item cbp-filter-style">
                  Shop
                </div>
                <div data-filter=".onepage" className="cbp-filter-item cbp-filter-style">
                  One Page
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div id="js-grid-blog-posts" className="demo-setting cbp no-transition">
              {/* <div className="cbp-wrapper-outer"> */}
              {/* <div className="cbp-wrapper d-flex flex-wrap" style={{ gap: 40 }}> */}

              {demosData.map((demo, idx) => <DemoCard key={demo.link + idx} demo={demo} />)}

              {/* </div> */}
              {/* </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Content;