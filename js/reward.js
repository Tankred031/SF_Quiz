/* =========================================
   QUIZ REWARD SYSTEM
========================================= */

/* =========================================
   REWARD PATHS / KEYS
========================================= */

function getRewardKey(year, month, week) {
    return `quiz-reward-${year}-${month}-${week}`;
}

function getRewardImage(year, month, week) {
    return `assets/images/copyright-risk/reward-${year}-${month}-${week}.png`;
}

/* =========================================
   REWARD RENDER
========================================= */


function renderQuizReward(year, month, week) {
    const frontImage = getRewardImage(
        year,
        month,
        week
    );

    const backImage =
        "assets/images/rewards/back.png";

    const placeholderImage =
        "assets/images/rewards/placeholder.png";

    return `
        <div
            class="quiz-reward-card locked"
            data-reward-year="${year}"
            data-reward-month="${month}"
            data-reward-week="${week}"
            data-has-reward="true"
        >
            <div class="reward-inner">

                <div class="reward-face reward-back">

                    <img
                        src="${backImage}"
                        alt="Zaključana nagrada"
                    >

                </div>

                <div class="reward-face reward-front">

                    <img
                        src="${frontImage}"
                        alt="Otključana nagrada"
                        class="zoomable-image reward-zoom-image"

                        onerror="
                            this.onerror = null;
                            this.src = '${placeholderImage}';

                            const card =
                                this.closest('.quiz-reward-card');

                            if (card) {
                                card.dataset.hasReward = 'false';

                                card.classList.add(
                                    'placeholder-reward'
                                );

                                card.classList.remove(
                                    'unlocked'
                                );

                                card.classList.remove(
                                    'newly-unlocked'
                                );

                                card.classList.add(
                                    'locked'
                                );

                                localStorage.removeItem(
                                    'quiz-reward-' +
                                    card.dataset.rewardYear +
                                    '-' +
                                    card.dataset.rewardMonth +
                                    '-' +
                                    card.dataset.rewardWeek
                                );
                            }
                        "
                    >

                </div>

            </div>
        </div>
    `;
}



/* =========================================
   PLACEHOLDER CHECK
========================================= */

function isPlaceholderRewardCard(rewardCard) {
    if (!rewardCard) {
        return true;
    }

    const frontImage =
        rewardCard.querySelector(
            ".reward-front img"
        );

    return (
        rewardCard.dataset.hasReward === "false" ||
        rewardCard.classList.contains(
            "placeholder-reward"
        ) ||
        (
            frontImage &&
            frontImage.src.includes(
                "placeholder.png"
            )
        )
    );
}

/* =========================================
   LOCK REWARD
========================================= */

function lockRewardCard(rewardCard) {
    if (!rewardCard) {
        return;
    }

    rewardCard.classList.remove(
        "unlocked"
    );

    rewardCard.classList.remove(
        "newly-unlocked"
    );

    rewardCard.classList.add(
        "locked"
    );
}

/* =========================================
   UNLOCK REWARD
========================================= */

function unlockQuizReward(rewardCard) {
    if (!rewardCard) {
        return;
    }

    if (isPlaceholderRewardCard(rewardCard)) {
        lockRewardCard(rewardCard);
        return;
    }

    const year =
        rewardCard.dataset.rewardYear;

    const month =
        rewardCard.dataset.rewardMonth;

    const week =
        rewardCard.dataset.rewardWeek;

    rewardCard.classList.remove("locked");
    rewardCard.classList.add("unlocked");
    rewardCard.classList.add("newly-unlocked");

    localStorage.setItem(
        getRewardKey(
            year,
            month,
            week
        ),
        "unlocked"
    );

    /*
       Označava trenutni kviz završenim
       i aktivira sljedeći tjedan ili mjesec.
    */

    if (
        typeof completeQuizProgress ===
        "function"
    ) {
        completeQuizProgress(
            year,
            month,
            week
        );
    }

    /*
       Najprije ostavimo animaciju nagrade,
       a zatim ponovno prikažemo aplikaciju
       kako bi se vidio sljedeći otključani dio.
    */

    setTimeout(() => {
        rewardCard.classList.remove(
            "newly-unlocked"
        );

        if (
            typeof renderApp ===
            "function"
        ) {
            renderApp();
        }
    }, 1200);
}

/* =========================================
   CHECK QUIZ RESULT
========================================= */

function checkQuizReward(weekBlock) {
    if (!weekBlock) {
        return;
    }

    const quizCards =
        weekBlock.querySelectorAll(
            ".quiz-card"
        );

    const rewardCard =
        weekBlock.querySelector(
            ".quiz-reward-card"
        );

    if (
        quizCards.length === 0 ||
        !rewardCard
    ) {
        return;
    }

    if (
        rewardCard.classList.contains(
            "unlocked"
        )
    ) {
        return;
    }

    if (
        isPlaceholderRewardCard(
            rewardCard
        )
    ) {
        lockRewardCard(
            rewardCard
        );

        return;
    }

    const allAnswered =
        [...quizCards].every(card => {
            return Boolean(
                card.querySelector(
                    ".quiz-answer-btn:disabled"
                )
            );
        });

    const allCorrect =
        [...quizCards].every(card => {
            return !card.querySelector(
                ".quiz-answer-btn.answer-wrong"
            );
        });

    if (
        allAnswered &&
        allCorrect
    ) {
        unlockQuizReward(
            rewardCard
        );
    }
}

/* =========================================
   RESTORE REWARDS
========================================= */

function restoreQuizRewards() {
    const rewardCards =
        document.querySelectorAll(
            ".quiz-reward-card"
        );

    rewardCards.forEach(card => {
        if (
            isPlaceholderRewardCard(
                card
            )
        ) {
            lockRewardCard(
                card
            );

            return;
        }

        const year =
            card.dataset.rewardYear;

        const month =
            card.dataset.rewardMonth;

        const week =
            card.dataset.rewardWeek;

        const rewardKey =
            getRewardKey(
                year,
                month,
                week
            );

        const isUnlocked =
            localStorage.getItem(
                rewardKey
            ) === "unlocked";

        if (isUnlocked) {
            card.classList.remove(
                "locked"
            );

            card.classList.add(
                "unlocked"
            );
        } else {
            lockRewardCard(
                card
            );
        }
    });
}

/* =========================================
   TEST REWARD BUTTON
   Samo za razvoj i testiranje
========================================= */

function createTestRewardButton() {
    if (
        document.getElementById(
            "testRewardButton"
        )
    ) {
        return;
    }

    const button =
        document.createElement(
            "button"
        );

    button.id =
        "testRewardButton";

    button.type =
        "button";

    button.textContent =
        "TEST: Okreni sve nagrade";

    document.body.appendChild(
        button
    );

    button.addEventListener(
        "click",
        () => {
            const rewardCards =
                document.querySelectorAll(
                    ".quiz-reward-card"
                );

            rewardCards.forEach(card => {
                unlockQuizReward(
                    card
                );
            });
        }
    );
}

/* =========================================
   LEVEL / QUIZ COMPLETION REWARDS
========================================= */

/*
    PUTANJE ZAVRŠNIH SLIKA

    LEVEL 3:
    - dvije završne slike
    - nema konačne slike cijelog kviza

    SECRET LEVEL:
    - dvije završne slike
    - jedna konačna slika cijelog kviza
*/

const COMPLETION_REWARD_IMAGES = {
    level3: [
        "assets/images/copyright-risk/YouMadeIt-Figures.png",
        "assets/images/copyright-risk/IdontBelieveInNoWinScenario.png"
    ],

    secret: [
        "assets/images/copyright-risk/reward-4-1-1.png",
        "assets/images/copyright-risk/reward-4-1-2.png"
    ],

    final:
        "assets/images/copyright-risk/reward-4-2-3.png"
};

/* =========================================
   IMAGE HTML
========================================= */

function renderCompletionImage(
    imagePath,
    altText,
    extraClass = ""
) {
    if (!imagePath) {
        return "";
    }

    return `
        <div
            class="
                completion-image-card
                ${extraClass}
            "
        >
            <img
                src="${imagePath}"
                alt="${altText}"
                class="
                    completion-image
                    zoomable-image
                "
                loading="lazy"

                onerror="
                    const card =
                        this.closest(
                            '.completion-image-card'
                        );

                    if (card) {
                        card.remove();
                    }
                "
            >
        </div>
    `;
}

/* =========================================
   LEVEL 3 COMPLETION CHECK
========================================= */

function isLevel3Completed() {
    /*
        Level 3 ima:

        3 teme:
        - machines
        - dystopia
        - aliens

        3 težine:
        - light
        - medium
        - hard

        Ukupno 9 kvizova.
    */

    const difficulties = [
        "light",
        "medium",
        "hard"
    ];

    const groups = [
        "machines",
        "dystopia",
        "aliens"
    ];

    return groups.every(group => {
        return difficulties.every(
            difficulty => {
                const completedKey = [
                    "sfq",
                    "level-3",
                    difficulty,
                    group,
                    "completed"
                ].join("-");

                return (
                    localStorage.getItem(
                        completedKey
                    ) === "true"
                );
            }
        );
    });
}

/* =========================================
   LEVEL 3 COMPLETION RENDER
========================================= */

function renderLevel3Completion() {
    if (!isLevel3Completed()) {
        return "";
    }

    const images =
        COMPLETION_REWARD_IMAGES
            .level3
            .map(
                (imagePath, index) =>
                    renderCompletionImage(
                        imagePath,
                        `Level 3 završna slika ${index + 1}`
                    )
            )
            .join("");

    return `
        <section
            class="
                completion-section
                level-3-completion
            "
        >
            <div class="completion-heading">

                <div class="completion-kicker">
                    ARHIVA OSVOJENA
                </div>

                <h2>
                    Level 3 završen!
                </h2>

                <p>
                    Arhiva zabranjenih svjetova
                    uspješno je završena.
                </p>

            </div>

            <div
                class="
                    completion-gallery
                    completion-gallery-two
                "
            >
                ${images}
            </div>

        </section>
    `;
}

/* =========================================
   SECRET COMPLETION CHECK
========================================= */

function isSecretArchiveCompleted() {
    const multipleChoiceCompleted =
        localStorage.getItem(
            "sfq-level-4-multipleChoice-completed"
        ) === "true";

    const yesNoCompleted =
        localStorage.getItem(
            "sfq-level-4-yesNo-completed"
        ) === "true";

    return (
        multipleChoiceCompleted &&
        yesNoCompleted
    );
}

/* =========================================
   SECRET COMPLETION RENDER
========================================= */

function renderSecretCompletion() {
    if (!isSecretArchiveCompleted()) {
        return "";
    }

    const secretImages =
        COMPLETION_REWARD_IMAGES
            .secret
            .map(
                (imagePath, index) =>
                    renderCompletionImage(
                        imagePath,
                        `Secret Archive nagrada ${index + 1}`
                    )
            )
            .join("");

    const finalImage =
        renderCompletionImage(
            COMPLETION_REWARD_IMAGES.final,
            "Konačna nagrada SF kviza",
            "completion-image-final"
        );

    return `
        <section
            class="
                completion-section
                secret-completion
            "
        >
            <div class="completion-heading">

                <div class="completion-kicker">
                    ARHIVA OSVOJENA
                </div>

                <h2>
                    Hardcore Archive završen!
                </h2>

                <p>
                    Secret Level je uspješno završen.
                    Konačna arhiva je otključana.
                </p>

            </div>

            <div
                class="
                    completion-gallery
                    completion-gallery-two
                "
            >
                ${secretImages}
            </div>

            <div class="final-reward-heading">

                <div class="completion-kicker">
                    FINAL REWARD
                </div>

                <h3>
                    SF Quiz Progression završen
                </h3>

            </div>

            <div
                class="
                    completion-gallery
                    completion-gallery-final
                "
            >
                ${finalImage}
            </div>

        </section>
    `;
}