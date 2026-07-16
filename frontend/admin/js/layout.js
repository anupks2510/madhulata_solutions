async function loadComponent(id, file) {

    const response = await fetch(file);

    document.getElementById(id).innerHTML =
        await response.text();

}

document.addEventListener("DOMContentLoaded", () => {

    loadComponent(
        "sidebar",
        "components/sidebar.html"
    );

    loadComponent(
        "navbar",
        "components/navbar.html"
    );

});