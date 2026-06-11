/* =========================================
   QUIZ REWARD SYSTEM
========================================= */

function getRewardKey(year, month, week) {
    return `quiz-reward-${year}-${month}-${week}`;
}

function getRewardImage(year, month, week) {
    return `assets/images/copyright-risk/Osobe/reward-${year}-${month}-${week}.png`;
}

function unlockQuizReward(rewardCard) {
    if (!rewardCard) {
        return;
    }

    const frontImg = rewardCard.querySelector(".reward-front img");

    if (
        rewardCard.classList.contains("placeholder-reward") ||
        (frontImg && frontImg.src.includes("placeholder.png"))
    ) {
        return;
    }

    const year = rewardCard.dataset.rewardYear;
    const month = rewardCard.dataset.rewardMonth;
    const week = rewardCard.dataset.rewardWeek;

    rewardCard.classList.remove("locked");
    rewardCard.classList.add("unlocked");
    rewardCard.classList.add("newly-unlocked");

    localStorage.setItem(
        getRewardKey(year, month, week),
        "unlocked"
    );

    setTimeout(() => {
        rewardCard.classList.remove("newly-unlocked");
    }, 1200);
}

function checkQuizReward(weekBlock) {
    if (!weekBlock) {
        return;
    }

    const quizCards = weekBlock.querySelectorAll(".quiz-card");
    const rewardCard = weekBlock.querySelector(".quiz-reward-card");

    if (!quizCards.length || !rewardCard) {
        return;
    }

    if (rewardCard.classList.contains("unlocked")) {
        return;
    }

    const allAnswered = [...quizCards].every(card => {
        return card.querySelector(".quiz-answer-btn:disabled");
    });

    const allCorrect = [...quizCards].every(card => {
        return !card.querySelector(".quiz-answer-btn.answer-wrong");
    });

    if (allAnswered && allCorrect) {
        unlockQuizReward(rewardCard);
    }
}

function restoreQuizRewards() {
    const rewardCards = document.querySelectorAll(".quiz-reward-card");

    rewardCards.forEach(card => {
        const frontImg = card.querySelector(".reward-front img");

        if (
            card.classList.contains("placeholder-reward") ||
            (frontImg && frontImg.src.includes("placeholder.png"))
        ) {
            card.classList.remove("unlocked");
            card.classList.add("locked");
            return;
        }

        const year = card.dataset.rewardYear;
        const month = card.dataset.rewardMonth;
        const week = card.dataset.rewardWeek;

        const isUnlocked =
            localStorage.getItem(getRewardKey(year, month, week)) === "unlocked";

        if (isUnlocked) {
            card.classList.remove("locked");
            card.classList.add("unlocked");
        }
    });
}
