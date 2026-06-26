/* ==========================================
   TNET AI Router
========================================== */

const app = document.getElementById("app");

export function initRouter() {

    renderHome();

}

export function navigate(page){

    switch(page){

        case "home":
            renderHome();
            break;

        case "scan":
            renderScan();
            break;

        case "feed":
            renderFeed();
            break;

        case "analysis":
            renderAnalysis();
            break;

        case "profile":
            renderProfile();
            break;

        default:
            renderHome();

    }

}

/* ========================= */

function renderHome(){

    app.innerHTML = `

        <div class="card">

            <h2>Welcome to TNet AI</h2>

            <p>
                Analyze. Verify. Trust.
            </p>

        </div>

    `;

}

function renderScan(){

    app.innerHTML = `
        <div class="card">

            <h2>Scan</h2>

            <p>Select Image or Text.</p>

        </div>
    `;

}

function renderFeed(){

    app.innerHTML = `
        <div class="card">

            <h2>Feed</h2>

        </div>
    `;

}

function renderAnalysis(){

    app.innerHTML = `
        <div class="card">

            <h2>Analysis</h2>

        </div>
    `;

}

function renderProfile(){

    app.innerHTML = `
        <div class="card">

            <h2>Profile</h2>

        </div>
    `;

}
