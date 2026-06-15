/* =========================================
   SF QUIZ — ADMIN SYSTEM

   Admin može:
   - vidjeti admin kontrole
   - otključati Secret Level
   - zaključati Secret Level

   Stari month/week admin sustav je uklonjen.
========================================= */

/* =========================================
   SECRET LEVEL STORAGE
========================================= */

const SECRET_LEVEL_UNLOCK_KEY =
    "sfq-secret-level-unlocked";

/* =========================================
   SECRET LEVEL STATUS
========================================= */

function isSecretLevelUnlocked() {
    return (
        localStorage.getItem(
            SECRET_LEVEL_UNLOCK_KEY
        ) === "true"
    );
}

/*
   Administrator uvijek može otvoriti
   Secret Level, čak i kada je zaključan
   za običnog korisnika.
*/

function canOpenSecretLevel() {
    return (
        isSecretLevelUnlocked() ||
        (
            typeof isTrainer === "function" &&
            isTrainer()
        )
    );
}

/* =========================================
   SECRET LEVEL ACCESS
========================================= */

function setSecretLevelAccess(unlocked) {
    if (
        typeof isTrainer !== "function" ||
        !isTrainer()
    ) {
        return;
    }

    localStorage.setItem(
        SECRET_LEVEL_UNLOCK_KEY,
        unlocked.toString()
    );

    /*
       Ako administrator zaključa Secret
       dok se upravo nalazi na Levelu 4,
       vraćamo prikaz na Level 1.
    */

    if (
        !unlocked &&
        typeof activeLevel !== "undefined" &&
        activeLevel === 4
    ) {
        activeLevel = 1;

        localStorage.setItem(
            "sfq-active-level",
            "1"
        );
    }

    if (
        typeof renderApp === "function"
    ) {
        renderApp();
    }
}

function toggleSecretLevelAccess() {
    setSecretLevelAccess(
        !isSecretLevelUnlocked()
    );
}

/* =========================================
   ADMIN CONTROL RENDER
========================================= */

function renderSecretAdminControl() {
    if (
        typeof isTrainer !== "function" ||
        !isTrainer()
    ) {
        return "";
    }

    const secretUnlocked =
        isSecretLevelUnlocked();

    return `
        <div class="secret-admin-control">

            <div class="secret-admin-info">

                <span class="secret-admin-label">
                    Secret Level
                </span>

                <span
                    class="
                        secret-admin-status
                        ${
                            secretUnlocked
                                ? "secret-status-unlocked"
                                : "secret-status-locked"
                        }
                    "
                >
                    ${
                        secretUnlocked
                            ? "🟢 Otključan za korisnika"
                            : "🔴 Zaključan za korisnika"
                    }
                </span>

            </div>

            <button
                type="button"
                id="toggleSecretLevelButton"

                class="
                    secret-admin-button
                    ${
                        secretUnlocked
                            ? "secret-lock-button"
                            : "secret-unlock-button"
                    }
                "
            >
                ${
                    secretUnlocked
                        ? "Zaključaj Secret"
                        : "Otključaj Secret"
                }
            </button>

        </div>
    `;
}

/* =========================================
   ROLE UI
========================================= */

function applyRoleUI() {
    const trainer =
        typeof isTrainer === "function" &&
        isTrainer();

    const adminElements =
        document.querySelectorAll(
            ".admin-only"
        );

    adminElements.forEach(element => {
        element.style.display =
            trainer
                ? ""
                : "none";
    });

    const adminBadge =
        document.getElementById(
            "adminBadge"
        );

    if (adminBadge) {
        adminBadge.style.display =
            trainer
                ? "inline-flex"
                : "none";
    }
}

/* =========================================
   ADMIN CLICK EVENT
========================================= */

document.addEventListener(
    "click",
    event => {
        const toggleButton =
            event.target.closest(
                "#toggleSecretLevelButton"
            );

        if (!toggleButton) {
            return;
        }

        toggleSecretLevelAccess();
    }
);

