document.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      start: "2% top",
      end: "+=3000",
      scrub: 2,
      pin: true,
    },
  });

  tl.fromTo(
    "#pics img",
    {
      x: 1600,
    },
    {
      x: -1600,
    }
  );
});
