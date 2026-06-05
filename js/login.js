/* =========================================
AUTH
========================================= */

const adminPassword = "admin";
const userPassword = "quiz";

/* =========================================
ROLE HELPERS
========================================= */

function getRole() {
    return localStorage.getItem("role");
}

function isTrainer() {
    return getRole() === "trainer";
}

function isUser() {
    return getRole() === "user";
}

/* =========================================
LOGIN UI
========================================= */

function showLogin() {
    document.body.classList.add("logged-out");

    const loginView = document.getElementById("loginView");
    const appView = document.getElementById("appView");
    const hero = document.getElementById("hero");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginView) {
        loginView.style.display = "flex";
    }

    if (appView) {
        appView.style.display = "none";
    }

    if (hero) {
        hero.style.display = "none";
    }

    if (logoutBtn) {
        logoutBtn.style.display = "none";
    }
}

function showApp() {
    document.body.classList.remove("logged-out");

    const loginView = document.getElementById("loginView");
    const appView = document.getElementById("appView");
    const hero = document.getElementById("hero");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginView) {
        loginView.style.display = "none";
    }

    if (appView) {
        appView.style.display = "block";
    }

    if (hero) {
        hero.style.display = "block";
    }

    if (logoutBtn) {
        logoutBtn.style.display = "block";
    }

    applyRoleUI();
}

/* =========================================
LOGIN
========================================= */

function login() {
    const input = document.getElementById("password");

    if (!input) {
        return;
    }

    const pass = input.value.trim();

    let role = null;

    if (pass === adminPassword) {
        role = "trainer";
    } else if (pass === userPassword) {
        role = "user";
    } else {
        alert("Kriva lozinka");
        return;
    }

    localStorage.setItem("role", role);

    input.value = "";

    showApp();
    renderApp();
}

/* =========================================
LOGOUT
========================================= */

function logout() {
    localStorage.removeItem("role");
    showLogin();
}

/* =========================================
INIT
========================================= */

window.addEventListener("load", () => {
    const role = getRole();

    if (role) {
        showApp();
        renderApp();
    } else {
        showLogin();
    }

    const input = document.getElementById("password");

    if (!input) {
        return;
    }

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            login();
        }
    });
});