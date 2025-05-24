import { useEffect, useRef } from 'react';
import "@vendor/js/TweenMax.min.js";
const AnimatedCursor = () => {
  const animatedCursorRef = useRef(null);
  useEffect(() => {
    if (animatedCursorRef.current) {
      let o = !1;
      const e = {
          x: 0,
          y: 0
        },
        t = {
          x: 0,
          y: 0
        },
        n = .25,
        a = document.getElementById("cursor"),
        i = document.getElementById("cursor-loader");
      window.TweenLite.set(a, {
        xPercent: -50,
        yPercent: -50
      }), document.addEventListener("mousemove", function (t) {
        const n = window.pageYOffset || document.documentElement.scrollTop;
        e.x = t.pageX, e.y = t.pageY - n;
      }), window.TweenLite.ticker.addEventListener("tick", function () {
        o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, window.TweenLite.set(a, {
          x: t.x,
          y: t.y
        }));
      }), $(".animated-wrap").mouseenter(function () {
        window.TweenMax.to(this, .3, {
          scale: 2
        }), window.TweenMax.to(a, .3, {
          scale: 2,
          borderWidth: "1px",
          opacity: .2
        }), window.TweenMax.to(i, .3, {
          scale: 2,
          borderWidth: "1px",
          top: 1,
          left: 1
        }), window.TweenMax.to($(this).children(), .3, {
          scale: .5
        }), o = !0;
      }), $(".animated-wrap").mouseleave(function () {
        window.TweenMax.to(this, .3, {
          scale: 1
        }), window.TweenMax.to(a, .3, {
          scale: 1,
          borderWidth: "2px",
          opacity: 1
        }), window.TweenMax.to(i, .3, {
          scale: 1,
          borderWidth: "2px",
          top: 0,
          left: 0
        }), window.TweenMax.to($(this).children(), .3, {
          scale: 1,
          x: 0,
          y: 0
        }), o = !1;
      }), $(".testimonial-images .animated-wrap").mouseenter(function () {
        window.TweenMax.to(this, .3, {
          scale: 2
        }), window.TweenMax.to(a, .3, {
          scale: 2,
          borderWidth: "1px",
          opacity: .2
        }), window.TweenMax.to(i, .3, {
          scale: 2,
          borderWidth: "1px",
          top: 1,
          left: 1
        }), window.TweenMax.to($(this).children(), .3, {
          scale: .5
        }), o = !0;
      }), $(".animated-wrap").mousemove(function (e) {
        let n, o, i, l, r, d, s, h, x, u, w, f, m;
        n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, window.TweenMax.to(a, .3, {
          x: t.x,
          y: t.y
        }), s = e, h = this.querySelector(".animated-element"), x = 20, u = this.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, window.TweenMax.to(h, .3, {
          x: (w - u.width / 2) / u.width * x,
          y: (f - u.height / 2 - m) / u.height * x,
          ease: window.Power2.easeOut
        });
      }), $(".hide-cursor,.btn,.tp-bullets").mouseenter(function () {
        window.TweenMax.to("#cursor", .2, {
          borderWidth: "1px",
          scale: 2,
          opacity: 0
        });
      }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function () {
        window.TweenMax.to("#cursor", .3, {
          borderWidth: "2px",
          scale: 1,
          opacity: 1
        });
      }), $(".link").mouseenter(function () {
        window.TweenMax.to("#cursor", .2, {
          borderWidth: "0px",
          scale: 3,
          backgroundColor: "rgba(255,255,255,0.47)",
          opacity: .15
        });
      }), $(".link").mouseleave(function () {
        window.TweenMax.to("#cursor", .3, {
          borderWidth: "2px",
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0)",
          opacity: 1
        });
      });
    }
  }, []);
  return <div id="animated-cursor" ref={animatedCursorRef}>
      <div id="cursor">
        <div id="cursor-loader" />
      </div>
    </div>;
};
export default AnimatedCursor;