document.addEventListener("DOMContentLoaded", () => {
  const gtl = gsap.timeline({
    scrollTrigger: {
      trigger: ".display2",
      start: "40% 70%",
      end: "20% 20%",
      markers: true,
      scrub: 1,
    },
  });

  gtl
    .to(
      ".left",
      {
        x: -1700,
      },
      "bro"
    )
    .to(
      ".right",
      {
        x: 1700,
      },
      "bro"
    );
});
