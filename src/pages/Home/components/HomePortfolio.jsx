import { useEffect } from 'react';
import "@vendor/js/jquery.fancybox.min.js";
import "@vendor/js/jquery.cubeportfolio.min.js";
import work1 from '../assets/img/work1.jpg';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';
import work5 from '../assets/img/work5.jpg';
import work6 from '../assets/img/work6.jpg';
import { Col, Container, Row } from 'react-bootstrap';
const HomePortfolio = () => {
  useEffect(() => {
    $('#js-grid-mosaic-flat').cubeportfolio({
      filters: '#js-filters-mosaic-flat',
      layoutMode: 'mosaic',
      defaultFilter: '*',
      animationType: 'scaleSides',
      gapHorizontal: -1,
      gapVertical: -1,
      gridAdjustment: 'responsive',
      caption: 'zoom',
      displayType: 'fadeIn',
      displayTypeSpeed: 100,
      sortByDimension: true,
      mediaQueries: [{
        width: 1500,
        cols: 4
      }, {
        width: 1100,
        cols: 4
      }, {
        width: 768,
        cols: 2
      }, {
        width: 480,
        cols: 1
      }, {
        width: 320,
        cols: 1
      }],
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
      plugins: {
        loadMore: {
          element: '#js-loadMore-mosaic-flat',
          action: 'click',
          loadItems: 3
        }
      }
    });
  }, []);
  return <section id="shop" className="pb-0 bg-dark1 ">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <h5> Lorem ipsum dolor sit amet </h5>
              <h2 className="mb-0">Arcade Games<span className="color-pink"> Collection</span> </h2>
            </div>
          </Col>
        </Row>
        <Row className="d-block">
          <div id="js-filters-mosaic-flat" className="cbp-l-filters-alignCenter">
            <div data-filter="*" className="cbp-filter-item-active cbp-filter-item cbp-filter-style">
              All <div className="cbp-filter-counter" />
            </div>
            <div data-filter=".graphic-designs" className="cbp-filter-item cbp-filter-style">
              Racing <div className="cbp-filter-counter" />
            </div>
            <div data-filter=".web-designs" className="cbp-filter-item cbp-filter-style">
              VR <div className="cbp-filter-counter" />
            </div>
            <div data-filter=".seo" className="cbp-filter-item cbp-filter-style">
              Ticket Redemption Game <div className="cbp-filter-counter" />
            </div>
            <div data-filter=".marketing" className="cbp-filter-item">
              New Launches <div className="cbp-filter-counter" />
            </div>
          </div>
          <div id="js-grid-mosaic-flat" className="cbp cbp-l-grid-mosaic-flat no-transition">
            <div className="cbp-item web-designs marketing">
              <a href={work1} className="cbp-caption cbp-lightbox" data-title="Bolt UI<br>by Tiberiu Neamu">
                <div className="cbp-caption-defaultWrap">
                  <img src={work1} alt="work" />
                </div>
                <div className="cbp-caption-activeWrap">
                  <div className="cbp-l-caption-alignCenter">
                    <div className="cbp-l-caption-body">
                      <p>Elegant | Images</p>
                      <div className="cbp-l-caption-title">We are digital agency</div>
                      <span className="work-icon">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cbp-item graphic-designs seo">
              <a href={work2} className="cbp-caption cbp-lightbox" data-title="World Clock<br>by Paul Flavius Nechita">
                <div className="cbp-caption-defaultWrap">
                  <img src={work2} alt="work" />
                </div>
                <div className="cbp-caption-activeWrap">
                  <div className="cbp-l-caption-alignCenter">
                    <div className="cbp-l-caption-body">
                      <p>Elegant | Images</p>
                      <div className="cbp-l-caption-title">Creative art work</div>
                      <span className="work-icon">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cbp-item graphic-designs web-designs">
              <a href={work3} className="cbp-caption cbp-lightbox" data-title="WhereTO App<br>by Tiberiu Neamu">
                <div className="cbp-caption-defaultWrap">
                  <img src={work3} alt="work" />
                </div>
                <div className="cbp-caption-activeWrap">
                  <div className="cbp-l-caption-alignCenter">
                    <div className="cbp-l-caption-body">
                      <p>Elegant | Images</p>
                      <div className="cbp-l-caption-title">Modern portfolio</div>
                      <span className="work-icon">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cbp-item seo marketing">
              <a href={work6} className="cbp-caption cbp-lightbox" data-title="Remind~Me Widget<br>by Tiberiu Neamu">
                <div className="cbp-caption-defaultWrap">
                  <img src={work6} alt="work" />
                </div>
                <div className="cbp-caption-activeWrap">
                  <div className="cbp-l-caption-alignCenter">
                    <div className="cbp-l-caption-body">
                      <p>Elegant | Images</p>
                      <div className="cbp-l-caption-title">Digital art works</div>
                      <span className="work-icon">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cbp-item web-designs seo">
              <a href={work4} className="cbp-caption cbp-lightbox" data-title="Seemple* Music<br>by Tiberiu Neamu">
                <div className="cbp-caption-defaultWrap">
                  <img src={work4} alt="work" />
                </div>
                <div className="cbp-caption-activeWrap">
                  <div className="cbp-l-caption-alignCenter">
                    <div className="cbp-l-caption-body">
                      <p>Elegant | Images</p>
                      <div className="cbp-l-caption-title">Photography</div>
                      <span className="work-icon">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="cbp-item web-designs marketing">
              <a href={work5} className="cbp-caption cbp-lightbox" data-title="iDevices<br>by Tiberiu Neamu">
                <div className="cbp-caption-defaultWrap">
                  <img src={work5} alt="work" />
                </div>
                <div className="cbp-caption-activeWrap">
                  <div className="cbp-l-caption-alignCenter">
                    <div className="cbp-l-caption-body">
                      <p>Elegant | Images</p>
                      <div className="cbp-l-caption-title">Modern workspace</div>
                      <span className="work-icon">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </section>;
};
export default HomePortfolio;