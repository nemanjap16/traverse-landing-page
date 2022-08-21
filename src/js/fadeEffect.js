// FADE UP OBSERVER //
function fadeUpObserverCallback(elsToWatch) {
  elsToWatch.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("faded");
      fadeUpObserver.unobserve(el.target);
      el.target.addEventListener(
        "transitionend",
        () => {
          el.target.classList.remove("fade-up", "faded");
        },
        { once: true }
      );
    }
  });
}

const fadeUpObserverOptions = {
  threshold: 0.6,
};

const fadeUpObserver = new IntersectionObserver(
  fadeUpObserverCallback,
  fadeUpObserverOptions
);

document.querySelectorAll(".fade-up").forEach((item) => {
  fadeUpObserver.observe(item);
});
