// Función para abrir el modal
function openModal(reportajeId) {
    let modal = document.getElementById("modal");
    let title = document.getElementById("modal-title");
    let description = document.getElementById("modal-description");

    if (reportajeId === "reportaje-1") {
        title.textContent = "Reportaje 1";
        description.textContent = "Detalles sobre el reportaje 1: Enfoque crítico y objetivo sobre diversos temas.";
    } else if (reportajeId === "reportaje-2") {
        title.textContent = "Reportaje 2";
        description.textContent = "Detalles sobre el reportaje 2: Experiencia en eventos y temas importantes.";
    } else if (reportajeId === "reportaje-3") {
        title.textContent = "Reportaje 3";
        description.textContent = "Detalles sobre el reportaje 3: Trabajo en prensa escrita y digital.";
    } else if (reportajeId === "reportaje-4") {
        title.textContent = "Reportaje 4";
        description.textContent = "Detalles sobre el reportaje 4: Enfoque innovador.";
    } else if (reportajeId === "reportaje-5") {
        title.textContent = "Reportaje 5";
        description.textContent = "Detalles sobre el reportaje 5: Investigación profunda.";
    } else if (reportajeId === "reportaje-6") {
        title.textContent = "Reportaje 6";
        description.textContent = "Detalles sobre el reportaje 6: Análisis de eventos.";
    } else if (reportajeId === "reportaje-7") {
        title.textContent = "Reportaje 7";
        description.textContent = "Detalles sobre el reportaje 7: Datos concretos sobre [tema].";
    } else if (reportajeId === "reportaje-8") {
        title.textContent = "Reportaje 8";
        description.textContent = "Detalles sobre el reportaje 8: Fuentes verificadas.";
    } else if (reportajeId === "reportaje-9") {
        title.textContent = "Reportaje 9";
        description.textContent = "Detalles sobre el reportaje 9: Análisis de repercusiones.";
    } else if (reportajeId === "reportaje-10") {
        title.textContent = "Reportaje 10";
        description.textContent = "Detalles sobre el reportaje 10: Reportaje a fondo sobre [tema].";
    }

    modal.classList.remove("hidden");
}

// Función para cerrar el modal
function closeModal() {
    let modal = document.getElementById("modal");
    modal.classList.add("hidden");
}