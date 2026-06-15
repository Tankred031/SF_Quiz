/* =========================================
   SF QUIZ — LOGIN / AUTH SYSTEM

   Uloge:
   - trainer = administrator
   - user = obični korisnik
========================================= */

/* =========================================
   AUTH CONFIG
========================================= */

const ADMIN_PASSWORD = "admin";
const USER_PASSWORD = "quiz";

const ROLE_STORAGE_KEY = "role";
const ACTIVE_LEVEL_STORAGE_KEY =
    "sfq-active-level";

/* =========================================
   ROLE HELPERS
========================================= */

function getRole() {
    return localStorage.getItem(
        ROLE_STORAGE_KEY
    );
}

function isTrainer() {
    return getRole() === "trainer";
}

function isUser() {
    return getRole() === "user";
}

function hasValidRole() {
    const role = getRole();

    return (
        role === "trainer" ||
        role === "user"
    );
}

/* =========================================
   LOGIN ELEMENT HELPERS
========================================= */

function getLoginElements() {
    return {
        loginView:
            document.getElementById(
                "loginView"
            ),

        appView:
            document.getElementById(
                "appView"
            ),

        hero:
            document.getElementById(
                "hero"
            ),

        logoutButton:
            document.getElementById(
                "logoutBtn"
            ),

        passwordInput:
            document.getElementById(
                "password"
            )
    };
}

/* =========================================
   LOGIN UI
========================================= */

function showLogin() {
    const elements =
        getLoginElements();

    document.body.classList.add(
        "logged-out"
    );

    if (elements.loginView) {
        elements.loginView.style.display =
            "flex";
    }

    if (elements.appView) {
        elements.appView.style.display =
            "none";
    }

    if (elements.hero) {
        elements.hero.style.display =
            "none";
    }

    if (elements.logoutButton) {
        elements.logoutButton.style.display =
            "none";
    }

    if (elements.passwordInput) {
        elements.passwordInput.value = "";

        setTimeout(() => {
            elements.passwordInput.focus();
        }, 50);
    }

    prikaziRandomLoginPoruku();
}

function showApp() {
    const elements =
        getLoginElements();

    document.body.classList.remove(
        "logged-out"
    );

    if (elements.loginView) {
        elements.loginView.style.display =
            "none";
    }

    if (elements.appView) {
        elements.appView.style.display =
            "block";
    }

    if (elements.hero) {
        elements.hero.style.display =
            "block";
    }

    if (elements.logoutButton) {
        elements.logoutButton.style.display =
            "block";
    }

    if (
        typeof applyRoleUI === "function"
    ) {
        applyRoleUI();
    }
}

/* =========================================
   LOGIN
========================================= */

function login() {
    const input =
        document.getElementById(
            "password"
        );

    if (!input) {
        return;
    }

    const password =
        input.value.trim();

    let role = null;

    if (
        password === ADMIN_PASSWORD
    ) {
        role = "trainer";
    } else if (
        password === USER_PASSWORD
    ) {
        role = "user";
    } else {
        alert("Kriva lozinka");

        input.select();

        return;
    }

    localStorage.setItem(
        ROLE_STORAGE_KEY,
        role
    );

    input.value = "";

    /*
       Ako obični korisnik ulazi nakon admina,
       a Secret je zaključan, ne smije ostati
       spremljen Level 4 kao aktivni prikaz.
    */

    if (
        role === "user" &&
        typeof isSecretLevelUnlocked ===
            "function" &&
        !isSecretLevelUnlocked()
    ) {
        const savedLevel =
            Number(
                localStorage.getItem(
                    ACTIVE_LEVEL_STORAGE_KEY
                )
            );

        if (savedLevel === 4) {
            localStorage.setItem(
                ACTIVE_LEVEL_STORAGE_KEY,
                "1"
            );

            if (
                typeof activeLevel !==
                    "undefined"
            ) {
                activeLevel = 1;
            }
        }
    }

    showApp();

    if (
        typeof renderApp === "function"
    ) {
        renderApp();
    }
}

/* =========================================
   RANDOM LOGIN MESSAGE
========================================= */

function prikaziRandomLoginPoruku() {
    const loginSubtitle =
        document.getElementById(
            "loginSubtitle"
        );

    if (!loginSubtitle) {
        return;
    }

    const messages =
        loginSubtitle.querySelectorAll(
            "p"
        );

    if (messages.length === 0) {
        return;
    }

    messages.forEach(message => {
        message.style.display = "none";
    });

    const randomIndex =
        Math.floor(
            Math.random() *
            messages.length
        );

    messages[
        randomIndex
    ].style.display = "block";
}

/* =========================================
   LOGOUT
========================================= */

function logout() {
    localStorage.removeItem(
        ROLE_STORAGE_KEY
    );

    /*
       Ako je admin bio na Secret Levelu,
       nakon odjave vraćamo spremljeni prikaz
       na Level 1.

       Sam status otključanog Secret Levela
       ne brišemo — njime upravlja admin.
    */

    const savedLevel =
        Number(
            localStorage.getItem(
                ACTIVE_LEVEL_STORAGE_KEY
            )
        );

    if (
        savedLevel === 4 &&
        typeof isSecretLevelUnlocked ===
            "function" &&
        !isSecretLevelUnlocked()
    ) {
        localStorage.setItem(
            ACTIVE_LEVEL_STORAGE_KEY,
            "1"
        );

        if (
            typeof activeLevel !==
                "undefined"
        ) {
            activeLevel = 1;
        }
    }

    showLogin();
}

/* =========================================
   LOGIN EVENTS
========================================= */

function initLoginEvents() {
    const input =
        document.getElementById(
            "password"
        );

    if (input) {
        input.addEventListener(
            "keydown",
            event => {
                if (
                    event.key === "Enter"
                ) {
                    login();
                }
            }
        );
    }

    const loginButton =
        document.getElementById(
            "loginBtn"
        );

    if (loginButton) {
        loginButton.addEventListener(
            "click",
            login
        );
    }

    const logoutButton =
        document.getElementById(
            "logoutBtn"
        );

    if (logoutButton) {
        logoutButton.addEventListener(
            "click",
            logout
        );
    }
}

/* =========================================
   INIT
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {
        initLoginEvents();

        if (hasValidRole()) {
            showApp();

            /*
               app.js također može imati svoj
               DOMContentLoaded renderApp().
               Zato ga ovdje ne pozivamo ponovno.
            */

            if (
                typeof applyRoleUI ===
                    "function"
            ) {
                applyRoleUI();
            }
        } else {
            localStorage.removeItem(
                ROLE_STORAGE_KEY
            );

            showLogin();
        }
    }
);

