/* ==========================================
   TNET AI - HOME PAGE
========================================== */

export function renderHome(app) {

    app.innerHTML = `

        <div class="home">

            <!-- HERO -->
            <div class="card hero">

                <h1>🟠 TNet AI</h1>

                <p>
                    Socio-economic Content Analysis Platform
                </p>

                <span class="badge safe">
                    Analyze • Verify • Trust
                </span>

            </div>

            <!-- QUICK ACTIONS -->
            <div class="card">

                <h2>Quick Scan</h2>

                <button class="btn" id="scanImageBtn">
                    <i class="fa-solid fa-image"></i>
                    Scan Image
                </button>

                <br><br>

                <button class="btn" id="scanTextBtn">
                    <i class="fa-solid fa-file-lines"></i>
                    Scan Text
                </button>

            </div>

            <!-- STATUS -->
            <div class="card">

                <h2>AI Status</h2>

                <p>
                    <i class="fa-solid fa-circle" style="color:#1db954;"></i>
                    Systems Online
                </p>

                <p class="muted">
                    Sightengine + Winston AI connected
                </p>

            </div>

            <!-- INSIGHT CARD -->
            <div class="card">

                <h2>Insight</h2>

                <p>
                    TNet AI helps detect fake content, AI-generated media,
                    and analyzes socio-economic impact of information.
                </p>

            </div>

        </div>

    `;

    attachHomeEvents();

}

/* ==========================================
   EVENTS
========================================== */

function attachHomeEvents() {

    const scanImageBtn =
        document.getElementById("scanImageBtn");

    const scanTextBtn =
        document.getElementById("scanTextBtn");

    if (scanImageBtn) {
        scanImageBtn.onclick = () => {
            window.location.hash = "#scan-image";
        };
    }

    if (scanTextBtn) {
        scanTextBtn.onclick = () => {
            window.location.hash = "#scan-text";
        };
    }

}
