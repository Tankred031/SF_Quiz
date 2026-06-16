/* =========================================
   SF QUIZ PROGRESSION — SECRET FAILED

   HARDCORE PRAVILO:
   - jedan pogrešan odgovor
   - cijeli Secret Level završava neuspjehom
   - stanje se sprema u localStorage
   - nema ponavljanja za običnog korisnika
========================================= */

/* =========================================
   CONFIG
========================================= */

const SECRET_FAILED_KEY =
    "sfq-secret-level-failed";

const SECRET_FAILED_IMAGE_KEY =
    "sfq-secret-failed-image";

const SECRET_FAILED_OPTIONS = [
    {
        image:
            "assets/images/copyright-risk/ThereCanBeOnly1.png",

        text:
            "THERE CAN BE ONLY ONE!"
    },

    {
        image:
            "assets/images/copyright-risk/YouKnowNothing.png",

        text:
            "YOU KNOW NOTHING." 
            //QUIZ IS ONLY A WORD. REALITY IS MUCH, MUCH WORSE!"
    },

    {
        image:
            "assets/images/copyright-risk/CaseClosed.png",

        text:
            "CASE CLOSED!"
    }
];

/* =========================================
   FAILED STATE
========================================= */

function isSecretFailed() {
    return (
        localStorage.getItem(
            SECRET_FAILED_KEY
        ) === "true"
    );
}

/* =========================================
   RANDOM FAILED OPTION
========================================= */

function getRandomSecretFailedOption() {
    const randomIndex =
        Math.floor(
            Math.random() *
            SECRET_FAILED_OPTIONS.length
        );

    return SECRET_FAILED_OPTIONS[
        randomIndex
    ];
}

function getSecretFailedOption() {
    const savedImage =
        localStorage.getItem(
            SECRET_FAILED_IMAGE_KEY
        );

    if (savedImage) {
        const savedOption =
            SECRET_FAILED_OPTIONS.find(
                option =>
                    option.image === savedImage
            );

        if (savedOption) {
            return savedOption;
        }
    }

    const randomOption =
        getRandomSecretFailedOption();

    localStorage.setItem(
        SECRET_FAILED_IMAGE_KEY,
        randomOption.image
    );

    return randomOption;
}

/* =========================================
   SET FAILED STATE
========================================= */

function setSecretFailed() {
    localStorage.setItem(
        SECRET_FAILED_KEY,
        "true"
    );

    /*
       Slika i pripadajući tekst biraju se
       samo jednom za trenutačni pokušaj.
    */

    if (
        !localStorage.getItem(
            SECRET_FAILED_IMAGE_KEY
        )
    ) {
        const randomOption =
            getRandomSecretFailedOption();

        localStorage.setItem(
            SECRET_FAILED_IMAGE_KEY,
            randomOption.image
        );
    }
}

/* =========================================
   RESET FAILED STATE
========================================= */

function resetSecretFailed(
    shouldRender = true
) {
    localStorage.removeItem(
        SECRET_FAILED_KEY
    );

    localStorage.removeItem(
        SECRET_FAILED_IMAGE_KEY
    );

    localStorage.removeItem(
        "sfq-level-4-multipleChoice-score"
    );

    localStorage.removeItem(
        "sfq-level-4-multipleChoice-completed"
    );

    localStorage.removeItem(
        "sfq-level-4-yesNo-score"
    );

    localStorage.removeItem(
        "sfq-level-4-yesNo-completed"
    );

    if (
        shouldRender &&
        typeof renderApp === "function"
    ) {
        renderApp();
    }
}

/* =========================================
   FAILED RENDER
========================================= */

function renderSecretFailed() {
    if (!isSecretFailed()) {
        return "";
    }

    const failedOption =
        getSecretFailedOption();

    return `
        <div
            class="secret-failed-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="secretFailedTitle"
        >
            <div class="secret-failed-prompt">

                <p class="secret-failed-kicker">
                    ACCESS TERMINATED
                </p>

                <h2
                    id="secretFailedTitle"
                    class="secret-failed-title"
                >
                    SECRET ARCHIVE FAILED
                </h2>

                <img
                    src="${failedOption.image}"
                    alt="Secret Level nije uspješno završen"
                    class="secret-failed-image"
                >

                <p class="secret-failed-message">
                    ${failedOption.text}
                </p>

                <div class="secret-failed-lock">
                    🔒 PRISTUP ARHIVI ZAKLJUČAN
                </div>

                <button
    type="button"
    class="secret-failed-back-btn"
>
    ← Povratak na levele
</button>

            </div>
        </div>
    `;
}