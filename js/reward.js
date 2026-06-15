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
    return `assets/images/copyright-risk/Osobe/reward-${year}-${month}-${week}.png`;
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