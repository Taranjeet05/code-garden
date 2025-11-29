// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin);

  //section 1
  document
    .querySelector("a[href='#section1']")
    .addEventListener("click", (e) => {
      e.preventDefault();

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#section1",
          //   offsetY: -200,
        },
      });
    });

  //section 2
  document
    .querySelector("a[href='#section2']")
    .addEventListener("click", (e) => {
      e.preventDefault();

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#section2",
          //   offsetY: -200,
        },
      });
    });

  //section 3
  document
    .querySelector("a[href='#section3']")
    .addEventListener("click", (e) => {
      e.preventDefault();

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#section3",
          //   offsetY: -200,
        },
      });
    });

  //section 4
  document
    .querySelector("a[href='#section4']")
    .addEventListener("click", (e) => {
      e.preventDefault();

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: "#section4",
          //   offsetY: -200,
        },
      });
    });
});
