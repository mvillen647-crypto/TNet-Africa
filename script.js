import { initRouter } from "./js/router.js";
import { initNavigation } from "./js/navigation.js";

document.addEventListener("DOMContentLoaded", () => {

  console.log("TNET STARTED");

  initNavigation();
  initRouter();

  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.remove();
      }, 300);

    }, 800);
  }

});
