import { featuresData } from "./data";
const Features = () => {
  return <section id="features" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <div className="main-title-opacity-text style-two">
                <h1 className="d-flex justify-content-start">Core </h1>
                <h1 className="d-flex justify-content-end">Features </h1>
              </div>
              <h2 className="color-gradient"> Core Features </h2>
              <p className="color-black font-weight-500 text-uppercase">MegaOne is ready with tons of features
                which is perfect for your project.</p>
            </div>
          </div>
        </div>
        <div className="row">

          {(featuresData || []).map((feat, index) => <div className="col-md-3 col-sm-6" key={index + feat.id}>
              <div className="process-box mb-5">
                <span className="pro-step d-inline-block bg-black"><i className={feat.icon} /></span>
                <h5 className="font-weight-normal color-black mt-25px mb-15px text-capitalize">{feat.title}</h5>
                <p>{feat.description}</p>
              </div>
            </div>)}

        </div>
      </div>
    </section>;
};
export default Features;