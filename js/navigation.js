import { navigate } from "./router.js";

export function initNavigation() {

  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      navigate(btn.dataset.page);

    });

  });

}
