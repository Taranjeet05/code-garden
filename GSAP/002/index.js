document.getElementById("play").addEventListener("click", () => {
  let tl = gsap.timeline({
    yoyo: true,
    repeat: 4,
  });

  tl.to(
    ".box",
    {
      x: 500,
      rotation: 360,
      duration: 2,
    },
    "duo"
  )
    .to(
      ".circle",
      {
        x: 500,
        rotation: 360,
        duration: 2,
      },
      "duo"
    )
    .to(
      ".box2",
      {
        x: 500,
        rotation: 360,
        duration: 2,
      },
      "-=1"
    );
});
