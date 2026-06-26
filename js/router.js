import { renderHome } from "../features/home/home.js";
import { renderScan } from "../features/scan/scan.js";
import { renderFeed } from "../features/feed/feed.js";
import { renderAnalysis } from "../features/analysis/analysis.js";
import { renderProfile } from "../features/profile/profile.js";

/* =========================
   ROUTES MAP
========================= */
const routes = {
  home: renderHome,
  scan: renderScan,
  feed: renderFeed,
  analysis: renderAnalysis,
  profile: renderProfile
};

let currentPage = "home";

/* =========================
   MAIN NAVIGATION FUNCTION
========================= */
export function navigate(page) {
  const app = document.getElementById("app");

  if (!routes[page]) {
    console.warn("Route not found:", page);
    return;
  }

  currentPage = page;

  // Clear app
  app.innerHTML = "";

  // Render page
  routes[page](app);

  // Update active button UI
  updateActiveNav(page);
}

/* =========================
   NAV INIT
========================= */
export function initRouter() {
  // default page
  navigate("home");

  // handle browser navigation buttons (future-ready)
  window.addEventListener("popstate", () => {
    navigate(currentPage);
  });
}

/* =========================
   ACTIVE NAV UI
========================= */
function updateActiveNav(page) {
  const buttons = document.querySelectorAll("#bottomNav button");

  buttons.forEach(btn => {
    if (btn.dataset.page === page) {
      btn.style.color = "#ff6b00";
    } else {
      btn.style.color = "white";
    }
  });
}

/* =========================
   CLICK EVENTS FROM NAV
========================= */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("#bottomNav button");
  if (btn) {
    navigate(btn.dataset.page);
  }
});
