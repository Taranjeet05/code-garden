document.getElementById("animate").addEventListener("click", () => {
  gsap.to(".box", {
    x: 900,
    rotation: 360,
    duration: 2,
    ease: "power2.out",
  });
});

document.getElementById("animate2").addEventListener("click", () => {
  gsap.from(".box2", {
    x: 900,
    rotation: 360,
    duration: 2,
    ease: "power1.out",
    duration: 2,
  });
});

document.getElementById("animate3").addEventListener("click", () => {
  gsap.fromTo(
    ".box3",
    {
      x: -700,
    },
    {
      x: 900,
      rotation: 360,
      duration: 2,
      ease: "power2.out",
    }
  );
});
