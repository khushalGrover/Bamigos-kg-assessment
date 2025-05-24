import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const BackToTop = () => {
  useEffect(() => {
    $(".scroll").on("click", function (event) {
      event.preventDefault();
      const hash = $(this.hash);
      const offset = hash.offset();
      if (offset) {
        $('html,body').animate({
          scrollTop: offset.top - 40
        }, 1100);
      }
    });
    const scrollTop = $(this).scrollTop();
    $(window).on('scroll', function () {
      if (scrollTop && scrollTop > 500) $('.scroll-top-arrow').fadeIn('slow');else $('.scroll-top-arrow').fadeOut('slow');
    });
    $(document).on('click', '.scroll-top-arrow', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }, []);
  return <Link className="scroll-top-arrow" to="">
      <i className="fa fa-angle-up" />
    </Link>;
};
export default BackToTop;