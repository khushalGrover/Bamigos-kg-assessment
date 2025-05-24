import sliderImg from '../assets/img/slider-img.jpg';
import logoYellow from '../assets/img/logo-yellow.png';
import sliderVideo from '../assets/video/slider-video.mp4';
const HomeHero = () => {
  return <section id="home" className="p-0 h-100vh cursor-light">
      <h2 className="d-none">heading</h2>
      <div id="rev_slider_8_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="weone" data-source="gallery" style={{
      background: 'transparent',
      padding: 0
    }}>
        <div id="rev_slider_8_1" className="rev_slider fullscreenbanner" style={{
        display: 'none'
      }} data-version="5.4.8.1">
          <ul>
            <li data-index="rs-36" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
              <img src={sliderImg} data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" alt="slider-image" data-no-retina />
              <div className="banner-overlay" />
              <div className="rs-background-video-layer" data-forcerewind="on" data-volume="mute" data-videowidth="100%" data-videoheight="100vh" data-videomp4={sliderVideo} data-videopreload="auto" data-videoloop="loopandnoslidestop" data-forcecover={1} data-aspectratio="16:9" data-autoplay="true" data-autoplayonlyfirsttime="false" />
              <div className="tp-caption color-yellow" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['270','200','100','15']" data-fontsize="['60','50','40','40']" data-lineheight="['75','75','75','40']" data-width="['556','556','556','300']" data-height="['none','none','none','87']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:100,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:1480,&quot;split_direction&quot;:&quot;random&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;sX:1;sY:1;opacity:0;fb:20px;&quot;,&quot;color&quot;:&quot;rgba(0,0,0,0)&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:350,&quot;frame&quot;:&quot;999&quot;,&quot;color&quot;:&quot;transparent&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{
              zIndex: 10,
              minWidth: 556,
              maxWidth: 556,
              whiteSpace: 'nowrap',
              fontSize: 60,
              lineHeight: 75,
              fontWeight: 300,
              letterSpacing: 0,
              fontFamily: '"Montserrat", sans-serif'
            }}><img src={logoYellow} className="link" alt="logo" /></div>
              <div className="tp-caption color-white" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['368','260','155','105']" data-fontsize="['62','50','40','40']" data-lineheight="['75','75','45','45']" data-width="['556','556','556','350']" data-height="['none','none','none','87']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:150,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{
              zIndex: 10,
              minWidth: 556,
              maxWidth: 556,
              whiteSpace: 'nowrap',
              fontWeight: 500,
              letterSpacing: 0,
              fontFamily: '"Montserrat", sans-serif'
            }}><div id="js-rotating">Digital Ad Agency, Modern Works, Elegant Ad Design </div> </div>
              <div className="tp-caption color-white" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','middle','middle','middle']" data-voffset="['470','95','0','20']" data-whitespace="normal" data-width="['580','630','550','440']" data-fontsize="['20','15','15','15']" data-lineheight="['30','25','22','22']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:100,&quot;speed&quot;:1480,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:350,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{
              zIndex: 10,
              minWidth: 650,
              maxWidth: 650,
              whiteSpace: 'nowrap',
              fontWeight: 300,
              letterSpacing: 1,
              fontFamily: '"Source Sans Pro", sans-serif'
            }}>Lorem ipsum is simply dummy text of the printing and typesetting.  Lorem Ipsum has been the industry’s standard dummy.
              </div>
              <div className="tp-caption tp-resizeme" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['170','200','90','120']" data-frames="[{&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:800,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:2px 2px 2px 2px;&quot;}]" data-textalign="['center','center','center','center']" data-width="['160','160','160','160']" style={{
              zIndex: 10,
              minWidth: 960,
              maxWidth: 960
            }}>
                <a href="" className="btn-setting color-white btn-hvr-up btn-hvr-yellow link">learn more</a>
              </div>
            </li>
          </ul>
          <div className="tp-bannertimer" style={{
          height: 5,
          background: 'rgba(0,0,0,0.15)'
        }} />	</div>
      </div>
    </section>;
};
export default HomeHero;