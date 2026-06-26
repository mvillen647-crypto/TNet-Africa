import { initRouter } from "./router.js";
import { initNavigation } from "./navigation.js";

document.addEventListener("DOMContentLoaded", () => {

  initNavigation();
  initRouter();

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 300);

  }, 1200);

});
