const createToaster = (config) => {
  return (str) => {
    let div = document.createElement("div");
    div.textContent = str;

    // Base classes
    let baseClasses = "p-5 rounded shadow text-white mb-2 fixed z-50 transition-all duration-500";

    // Theme
    let themeClass =
      config.theme === "dark"
        ? "bg-gray-700"
        : config.theme === "light"
        ? "bg-white text-black"
        : "bg-gray-700";

    // Widths (responsive)
    let widthClasses =
      "sm:w-[70%] lg:w-[40%] xl:w-[35%] 2xl:w-[25%] w-[60%]";

    // Position classes
    let positionClasses = "";

    // Vertical position
    if (config.positionY === "top") positionClasses += " top-5";
    else if (config.positionY === "bottom") positionClasses += " bottom-5";

    // Horizontal position
    if (config.positionX === "left") positionClasses += " left-5";
    else if (config.positionX === "center") positionClasses += " left-1/2 transform -translate-x-1/2";
    else if (config.positionX === "right") positionClasses += " right-5";

    // Combine all classes
    div.className = `${baseClasses} ${themeClass} ${widthClasses} ${positionClasses}`;

    // Append to body (not parent) for proper floating
    document.body.appendChild(div);

    // Remove after duration
    setTimeout(() => {
      div.remove();
    }, (config.duration || 3) * 1000);
  };
};

// Example usage
const toaster = createToaster({
  positionX: "left",  // left, center, right
  positionY: "top",    // top, bottom
  theme: "dark",       // dark, light
  duration: 3,         // in seconds
});

toaster("Downloaded Successfully");
setTimeout(() => {
  toaster("Login Successfully");
}, 2000);

setTimeout(() => {
  toaster("Liked");
}, 3000);
