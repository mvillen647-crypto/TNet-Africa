/* ==========================================
   TNET AI - ROUTER ENGINE v1.1 (FIXED)
========================================== */

import { renderHome } from "./pages/home.js";
import { renderScan } from "./pages/scan.js";
import { renderFeed } from "./pages/feed.js";
import { renderAnalysis } from "./pages/analysis.js";
import { renderProfile } from "./pages/profile.js";

/* =========================
   SAFE APP ACCESS
========================= */

function getApp() {
    return document.getElementById("app");
}

/* =========================
   INIT ROUTER
========================= */

export function initRouter() {
    handleRoute();
    window.addEventListener("hashchange", handleRoute);
}

/* =========================
   ROUTE HANDLER
========================= */

function handleRoute() {

    const app = getApp();

    // safety check (prevents splash freeze)
    if (!app) {
        console.error("❌ #app not found in DOM");
        return;
    }

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

    if (!buttons.length) return;

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

    if (!page) return;

    if (!page.startsWith("#")) {
        page = "#" + page;
    }

    window.location.hash = page;
}
