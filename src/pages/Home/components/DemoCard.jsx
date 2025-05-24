const DemoCard = ({
  demo
}) => {
  const {
    categories,
    image,
    link,
    name
  } = demo;
  return <div className={`cbp-item shopping-box ${categories.map(item => ` ${item} `)}`}>
      <div className="cbp-caption">
        <div className="cbp-caption-defaultWrap owl-theme owl-demos owl-carousel d-block">
          <div className="item">
            <a href={link} target="_blank">
              <img src={image} data-cbp-src={image} />
            </a>
          </div>
        </div>
      </div>
      <a href={link} target="_blank" className="cbp-l-grid-blog-title">
        {name}
      </a>
    </div>;
};
export default DemoCard;