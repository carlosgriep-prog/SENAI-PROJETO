document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function () {

        const pagina = this.getAttribute("data-target");

        if (pagina === "inicio") {
            window.open("inicio.html", "_blank");
        }

        if (pagina === "estrutura") {
            window.open("estrutura.html", "_blank");
        }

        if (pagina === "io") {
            window.open("io.html", "_blank");
        }

        if (pagina === "creditos") {
            window.open("credito.html", "_blank");
        }

    });
});