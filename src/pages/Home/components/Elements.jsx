import { elementsData } from "./data";
const Elements = () => {
  return <section id="elements" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <div className="main-title-opacity-text">
                <h1 className="d-flex justify-content-center">Elements </h1>
              </div>
              <h1 className="color-gradient heading-tooltip-number position-relative d-inline-block"> 200 <sup className="color-gradient fa fa-plus" /> </h1>
              <h2 className="color-black"> Elements inside Templates </h2>
              <p className="color-black font-weight-500 text-uppercase">Power up your pages with these elements.
                Each element comes with a variety of options for your choice.</p>
            </div>
          </div>
        </div>
        <div className="row blog-three-block mx-auto">

          {(elementsData || []).map((ele, index) => <div className="col-lg-2 col-md-2 col-sm-4 col-6 mb-4" key={index + ele.id}>
              <div className="features-one blue">
                <i className={ele.icon} />
                <h6 className="text-capitalize">{ele.title}</h6>
              </div>
            </div>)}

        </div>
      </div>
    </section>;
};
export default Elements;