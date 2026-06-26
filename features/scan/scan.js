export function renderScan(app) {
  app.innerHTML = `
    <div class="page">

      <h1>📷 Scan Image</h1>

      <input type="file" id="imageInput" accept="image/*" />

      <button id="scanBtn">Start Scan</button>

      <div id="preview"></div>
      <div id="result"></div>

    </div>
  `;

  const input = document.getElementById("imageInput");
  const preview = document.getElementById("preview");
  const btn = document.getElementById("scanBtn");
  const result = document.getElementById("result");

  let file = null;

  input.addEventListener("change", (e) => {
    file = e.target.files[0];

    if (file) {
      preview.innerHTML = `
        <img src="${URL.createObjectURL(file)}" width="200" />
      `;
    }
  });

  btn.addEventListener("click", async () => {
    if (!file) return alert("Select image first");

    const formData = new FormData();
    formData.append("media", file);

    result.innerHTML = "Scanning... 🔄";

    const res = await fetch("/api/scan", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    result.innerHTML = `
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  });
}
