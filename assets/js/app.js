// PhyloWAS Client-Side Interactive Engine
document.addEventListener("DOMContentLoaded", function () {
  initTableSearchAndSort();
  initCategoryFilters();
  initImageModal();
});

// Category Filtering on Landing Page
function initCategoryFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".pheno-card");
  const searchInput = document.getElementById("catalogSearch");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  function applyFilters() {
    const activeCat = document.querySelector(".filter-btn.active")?.dataset.category || "all";
    const query = (searchInput ? searchInput.value : "").toLowerCase().trim();

    cards.forEach((card) => {
      const cardCat = card.dataset.category || "";
      const text = card.textContent.toLowerCase();

      const catMatches = (activeCat === "all" || cardCat === activeCat);
      const queryMatches = (query === "" || text.includes(query));

      if (catMatches && queryMatches) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
}

// Interactive Table Search, Sort, and Pagination
function initTableSearchAndSort() {
  const table = document.getElementById("rankingsTable");
  if (!table) return;

  const tbody = table.querySelector("tbody");
  const searchInput = document.getElementById("tableSearch");
  const pageSizeSelect = document.getElementById("pageSize");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const pageInfo = document.getElementById("pageInfo");
  const headers = table.querySelectorAll("th[data-col]");

  let rawRows = Array.from(tbody.querySelectorAll("tr"));
  let filteredRows = [...rawRows];
  let currentPage = 1;
  let pageSize = parseInt(pageSizeSelect ? pageSizeSelect.value : 25);
  let sortCol = "rank";
  let sortAsc = true;

  // Initial render
  renderTable();

  // Search filter
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.toLowerCase().trim();
      filteredRows = rawRows.filter((r) => r.textContent.toLowerCase().includes(q));
      currentPage = 1;
      renderTable();
    });
  }

  // Page size
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener("change", () => {
      pageSize = parseInt(pageSizeSelect.value);
      currentPage = 1;
      renderTable();
    });
  }

  // Pagination buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
      }
    });
    nextBtn.addEventListener("click", () => {
      const maxPages = Math.ceil(filteredRows.length / pageSize) || 1;
      if (currentPage < maxPages) {
        currentPage++;
        renderTable();
      }
    });
  }

  // Sorting
  headers.forEach((th) => {
    th.addEventListener("click", () => {
      const col = th.dataset.col;
      if (sortCol === col) {
        sortAsc = !sortAsc;
      } else {
        sortCol = col;
        sortAsc = true;
      }

      headers.forEach((h) => h.classList.remove("sort-asc", "sort-desc"));
      th.classList.add(sortAsc ? "sort-asc" : "sort-desc");

      filteredRows.sort((a, b) => {
        let valA = a.dataset[col];
        let valB = b.dataset[col];

        let numA = parseFloat(valA);
        let numB = parseFloat(valB);

        if (!isNaN(numA) && !isNaN(numB)) {
          return sortAsc ? numA - numB : numB - numA;
        } else {
          valA = (valA || "").toLowerCase();
          valB = (valB || "").toLowerCase();
          return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
      });

      renderTable();
    });
  });

  function renderTable() {
    const total = filteredRows.length;
    const maxPages = Math.ceil(total / pageSize) || 1;
    if (currentPage > maxPages) currentPage = maxPages;

    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, total);

    rawRows.forEach((r) => (r.style.display = "none"));
    for (let i = start; i < end; i++) {
      filteredRows[i].style.display = "";
    }

    if (pageInfo) {
      pageInfo.textContent = `Showing ${total === 0 ? 0 : start + 1} to ${end} of ${total} entries`;
    }
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= maxPages;
  }
}

// Lightbox modal for high-res plots
function initImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".modal-close");

  if (!modal || !modalImg) return;

  document.querySelectorAll(".zoomable-img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
