import { initRouter } from "./js/router.js";
import { initNavigation } from "./js/navigation.js";

document.addEventListener("DOMContentLoaded", () => {

    console.log("TNET STARTED");

    initNavigation();

    try {
        initRouter();
    } catch (err) {
        console.error("ROUTER ERROR:", err);
    }

    const loader = document.getElementById("loader");

    if (!loader) {
        console.error("LOADER NOT FOUND");
        return;
    }

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.remove();
        }, 300);

    }, 800);

});
