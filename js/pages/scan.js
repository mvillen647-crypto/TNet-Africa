/* ==========================================
   TNET AI - SCAN PAGE v1.0
========================================== */

export function renderScan(app) {

    app.innerHTML = `

        <div class="scan">

            <!-- HEADER -->
            <div class="card">

                <h2>🔍 AI Scan</h2>

                <p>
                    Upload image or paste text for analysis
                </p>

            </div>

            <!-- TAB SWITCH -->
            <div class="card">

                <button class="btn" id="imageTab">
                    🖼 Image Scan
                </button>

                <br><br>

                <button class="btn" id="textTab">
                    📄 Text Scan
                </button>

            </div>

            <!-- DYNAMIC AREA -->
            <div class="card" id="scanArea">

                <p>Select scan type to continue</p>

            </div>

        </div>

    `;

    initScanEvents();

}

/* ==========================================
   EVENTS
========================================== */

function initScanEvents() {

    const imageTab = document.getElementById("imageTab");
    const textTab = document.getElementById("textTab");
    const scanArea = document.getElementById("scanArea");

    /* ================= IMAGE SCAN ================= */

    imageTab.onclick = () => {

        scanArea.innerHTML = `

            <h3>🖼 Upload Image</h3>

            <input type="file" id="imageInput" accept="image/*">

            <br><br>

            <button class="btn" id="scanImageBtn">
                Scan Image
            </button>

            <div id="imageResult"></div>

        `;

        document.getElementById("scanImageBtn")
        .onclick = handleImageScan;

    };

    /* ================= TEXT SCAN ================= */

    textTab.onclick = () => {

        scanArea.innerHTML = `

            <h3>📄 Paste Text</h3>

            <textarea id="textInput" rows="6"
                placeholder="Paste essay or content here..."></textarea>

            <br><br>

            <button class="btn" id="scanTextBtn">
                Scan Text
            </button>

            <div id="textResult"></div>

        `;

        document.getElementById("scanTextBtn")
        .onclick = handleTextScan;

    };

}

/* ==========================================
   IMAGE SCAN LOGIC (API READY)
========================================== */

async function handleImageScan() {

    const fileInput = document.getElementById("imageInput");
    const resultBox = document.getElementById("imageResult");

    if (!fileInput.files.length) {

        resultBox.innerHTML = `
            <p class="badge danger">
                Please select an image
            </p>
        `;

        return;

    }

    const file = fileInput.files[0];

    resultBox.innerHTML = `
        <p class="badge warning">
            Scanning image...
        </p>
    `;

    try {

        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("/api/scan-image", {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        resultBox.innerHTML = `
            <div class="card">

                <h3>Result</h3>

                <p><b>AI Probability:</b> ${data.ai_generated}</p>

                <p><b>Verdict:</b> ${data.verdict}</p>

            </div>
        `;

    } catch (error) {

        resultBox.innerHTML = `
            <p class="badge danger">
                Scan failed. Try again.
            </p>
        `;

    }

}

/* ==========================================
   TEXT SCAN LOGIC (API READY)
========================================== */

async function handleTextScan() {

    const textInput = document.getElementById("textInput");
    const resultBox = document.getElementById("textResult");

    if (!textInput.value.trim()) {

        resultBox.innerHTML = `
            <p class="badge danger">
                Please enter text
            </p>
        `;

        return;

    }

    resultBox.innerHTML = `
        <p class="badge warning">
            Analyzing text...
        </p>
    `;

    try {

        const res = await fetch("/api/scan-text", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: textInput.value
            })
        });

        const data = await res.json();

        resultBox.innerHTML = `
            <div class="card">

                <h3>Analysis Result</h3>

                <p><b>Originality:</b> ${data.originality}</p>

                <p><b>AI Score:</b> ${data.ai_score}</p>

                <p><b>Feedback:</b> ${data.feedback}</p>

            </div>
        `;

    } catch (error) {

        resultBox.innerHTML = `
            <p class="badge danger">
                Analysis failed. Try again.
            </p>
        `;

    }

  }
