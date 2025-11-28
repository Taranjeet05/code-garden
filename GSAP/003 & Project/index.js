document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".skills h3", {
    opacity: 0,
    y: 30,
    duration: 2,
    ease: "power3.out",
    filter: "blur(2px)",
    stagger: {
      grid: [3, 3],
      from: "random",
      ease: "power3.inOut",
      amount: 1.5,
    },
  });
});
