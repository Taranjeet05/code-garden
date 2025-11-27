const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");
const reverse = document.querySelector("#reverse");
const restart = document.querySelector("#restart");

const gtl = gsap.timeline({
  paused: true,
  yoyo: true,
});

gtl
  .to(".box", {
    x: 800,
    duration: 2.5,
    ease: "back.inOut(1.7)",
    rotation: 360,
  })
  .to(
    ".circle",
    {
      x: 900,
      duration: 2.5,
      ease: "back.inOut(1.7)",
      rotation: 360,
    },
    "-=1"
  )
  .to(
    ".box2",
    {
      x: 1000,
      duration: 2.5,
      ease: "back.inOut(1.7)",
      rotation: 360,
    },
    "-=1"
  );

play.addEventListener("click", () => gtl.play());
pause.addEventListener("click", () => gtl.pause());
resume.addEventListener("click", () => gtl.resume());
reverse.addEventListener("click", () => gtl.reverse());
restart.addEventListener("click", () => gtl.restart());
