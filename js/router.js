import { renderHome } from "../pages/home.js";
import { renderScan } from "../pages/scan.js";
import { renderFeed } from "../pages/feed.js";
import { renderAnalysis } from "../pages/analysis.js";
import { renderProfile } from "../pages/profile.js";

function getApp() {
  return document.getElementById("app");
}

export function initRouter() {
  handleRoute();
  window.addEventListener("hashchange", handleRoute);
}

function handleRoute() {

  const app = getApp();
  if (!app) return;

  const route = window.location.hash || "#home";

  switch (route) {

    case "#home":
      renderHome(app);
      break;

    case "#scan":
      renderScan(app);
      break;

    case "#feed":
      renderFeed(app);
      break;

    case "#analysis":
      renderAnalysis(app);
      break;

    case "#profile":
      renderProfile(app);
      break;

    default:
      renderHome(app);
  }
}

export function navigate(page) {

  if (!page.startsWith("#")) {
    page = "#" + page;
  }

  window.location.hash = page;

}
