document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".hero-page-img", {
    clipPath:
      "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)",
  });

  gsap.from(".navbar", {
    y: -100,
    duration: 2,
  });

  gsap.fromTo(
    ".nav-button",
    {
      x: -500,
    },
    {
      x: 50,
      duration: 2,
    }
  );

  gsap.from(".logo", {
    y: 100,
    duration: 2,
  });

  gsap.from('#section', {
    y:500,
    duration: 3
  })
});
