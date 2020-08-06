function smoothScroll(target, duration) {
  let scrollTarget = document.querySelector(target);
  let targetPosition = scrollTarget.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
}


smoothScroll('.section1', 1000);