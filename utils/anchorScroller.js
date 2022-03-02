const anchorScroller = (href, speed, offsetTop = 125) => {
  // V скорость, может иметь дробное значение через точку
  const V = speed || 0.5;
  const headerHeight =
    offsetTop ||
    document.querySelector("#b-header").offsetHeight +
      document.querySelector("#subheader").offsetHeight;
  const w = window.pageYOffset; // прокрутка
  let t;
  let hash;
  if (isNaN(href)) {
    hash = href.replace(/[^#]*(.*)/, "$1"); // id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top - headerHeight;
  } else {
    t = href - headerHeight;
  }
  let start = null;
  let progress;
  let r;
  function step(time) {
    if (start === null) {
      start = time;
    }
    progress = time - start;
    r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
    window.scrollTo(0, r);
    if (r !== w + t) {
      requestAnimationFrame(step);
    } else {
      // URL с хэшем
    }
  }
  requestAnimationFrame(step);
};
export default anchorScroller;
