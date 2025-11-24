document.addEventListener("DOMContentLoaded", () => {

  const dados = {
    "2025-01": { desistentes: 5, aprovados: 80, avaliaram: 90 },
    "2024-02": { desistentes: 12, aprovados: 70, avaliaram: 55 }
  };

  const select = document.getElementById("selectSemestre");
  const barraDesist = document.getElementById("barraDesist");
  const barraAprov = document.getElementById("barraAprov");
  const barraAval = document.getElementById("barraAval");
  const valorDesist = document.getElementById("valorDesist");
  const valorAprov = document.getElementById("valorAprov");
  const valorAval = document.getElementById("valorAval");

  select.addEventListener("change", () => {
    const sem = select.value;
    if (!dados[sem]) return;

    const d = dados[sem];
    barraDesist.style.height = d.desistentes * 2 + "px";
    barraAprov.style.height = d.aprovados * 2 + "px";
    barraAval.style.height = d.avaliaram * 2 + "px";

    valorDesist.textContent = d.desistentes + "%";
    valorAprov.textContent = d.aprovados + "%";
    valorAval.textContent = d.avaliaram + "%";
  });

});
