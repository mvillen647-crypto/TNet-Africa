/* ==========================================
   TNET AI - ROUTER ENGINE v1.0
   Pages: Home, Scan, Feed, Analysis, Profile
========================================== */

import { renderHome } from "./pages/home.js";
import { renderScan } from "./pages/scan.js";
import { renderFeed } from "./pages/feed.js";
import { renderAnalysis } from "./pages/analysis.js";
import { renderProfile } from "./pages/profile.js";

const app = document.getElementById("app");

/* =========================
   INIT ROUTER
========================= */

export function initRouter() {

    // load page on first visit
    handleRoute();

    // listen for navigation changes
    window.addEventListener("hashchange", handleRoute);

}

/* =========================
   ROUTE HANDLER
========================= */

function handleRoute() {

    const route = window.location.hash || "#home";

    setActiveNav(route);

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
            break;

    }

}

/* =========================
   ACTIVE NAV STATE
========================= */

function setActiveNav(route) {

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => {

        const page = btn.dataset.page;

        if ("#" + page === route) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }

    });

}

/* =========================
   PROGRAMMATIC NAVIGATION
========================= */

export function navigate(page) {

    window.location.hash = page;

}
