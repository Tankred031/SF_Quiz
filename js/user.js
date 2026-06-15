/* =========================================
   SF QUIZ — USER ACCESS SYSTEM

   Novi sustav:
   - Level 1 dostupan
   - Level 2 dostupan
   - Level 3 dostupan
   - Secret Level ovisi o admin kontroli

   Stari month/week access sustav je uklonjen.
========================================= */

/* =========================================
   LEVEL ACCESS
========================================= */

function canUserOpenLevel(level) {
    const numericLevel =
        Number(level);

    /*
       Leveli 1–3 uvijek su dostupni.
    */

    if (
        numericLevel >= 1 &&
        numericLevel <= 3
    ) {
        return true;
    }

    /*
       Secret Level:
       - administrator ga uvijek može otvoriti
       - korisnik samo kada ga admin otključa
    */

    if (numericLevel === 4) {
        if (
            typeof canOpenSecretLevel ===
                "function"
        ) {
            return canOpenSecretLevel();
        }

        return false;
    }

    return false;
}

/* =========================================
   SECRET LEVEL USER STATUS
========================================= */

function getSecretLevelUserStatus() {
    const trainer =
        typeof isTrainer === "function" &&
        isTrainer();

    const unlocked =
        typeof isSecretLevelUnlocked ===
            "function" &&
        isSecretLevelUnlocked();

    if (trainer) {
        return {
            visible: true,
            disabled: false,
            labelSuffix:
                unlocked
                    ? " — otključan"
                    : " — admin pristup"
        };
    }

    if (unlocked) {
        return {
            visible: true,
            disabled: false,
            labelSuffix: ""
        };
    }

    return {
        visible: true,
        disabled: true,
        labelSuffix: " 🔒"
    };
}

