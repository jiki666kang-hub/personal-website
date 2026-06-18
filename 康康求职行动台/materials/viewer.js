(function () {
  const materials = window.MATERIALS || [];
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "survey-overseas-resume";
  const current = materials.find(item => item.id === id) || materials[0];

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  function renderNav() {
    const root = document.getElementById("materialNav");
    const groups = [...new Set(materials.map(item => item.group))];
    root.innerHTML = groups.map(group => {
      const links = materials
        .filter(item => item.group === group)
        .map(item => `
          <a class="nav-link ${item.id === current.id ? "active" : ""}" href="viewer.html?id=${encodeURIComponent(item.id)}">
            <strong>${item.title}</strong>
            <span>${item.description}</span>
          </a>
        `).join("");
      return `<section><h2 class="nav-group">${group}</h2>${links}</section>`;
    }).join("");
  }

  if (!current) return;
  document.title = `${current.title} - 材料预览`;
  setText("materialGroup", current.group);
  setText("materialTitle", current.title);
  setText("materialDescription", current.description);
  document.getElementById("openPdf").href = current.pdfPath;
  document.getElementById("openDocx").href = current.sourceDocxPath;
  document.getElementById("pdfObject").data = current.pdfPath;
  renderNav();
})();
