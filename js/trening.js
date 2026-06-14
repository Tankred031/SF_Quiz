/* =========================================
ACTIVE DATA
========================================= */

let months = [];

/* =========================================
YEAR SYSTEM
========================================= */

function applyYearTheme(year) {
    const hero = document.getElementById("hero");
    const app = document.getElementById("app");

    document.body.classList.remove(
        "year-1",
        "year-2",
        "year-3",
        "year-4"
    );

    if (hero) {
        hero.classList.remove(
            "hero-year-1",
            "hero-year-2",
            "hero-year-3",
            "hero-year-4"
        );
    }

    if (app) {
        app.classList.remove(
            "year-1",
            "year-2",
            "year-3",
            "year-4"
        );
    }

    document.body.classList.add(`year-${year}`);

    if (hero) {
        hero.classList.add(`hero-year-${year}`);
    }

    if (app) {
        app.classList.add(`year-${year}`);
    }
}

function setMonthsByYear() {
    const selectedYear =
        localStorage.getItem("selected-year") || "1";

    if (selectedYear === "1") {
        months = yearOne;
    } else if (selectedYear === "2") {
        months = yearTwo;
    } else if (selectedYear === "3") {
        months = yearThree;
    } else if (selectedYear === "4") {
        months = yearFour;
    } else {
        months = yearOne;
    }

    applyYearTheme(selectedYear);
    renderUserYearTitle(selectedYear);
}

function renderUserYearTitle(year) {
    const el = document.getElementById("userYearDisplay");

    if (!el) {
        return;
    }

    const titles = {
        1: "LEVEL 1 — Dead or Alive - You're coming with me!",
        2: "LEVEL 2 — Roads? Where we're going, we don't need roads!",
        3: "LEVEL 3 — My experiment's at the critical stage, I can't just leave now!",
        4: "SECRET LEVEL — There can be only one."
    };

    const heroTitleEl = document.getElementById("heroTitle");
    const heroSubtextEl = document.getElementById("heroSubtext");
    const imageEl = document.getElementById("heroImage");

    const heroTitles = {
        1: "Dani prošle budućnosti",
        2: "Neobjašnjivi signali iz dubine žanra",
        3: "Arhiva zabranjenih svjetova",
        4: "Tajna arhiva nemogućih svjetova"
    };

    const heroSubtexts = {
        1: "Kreni od najpoznatijih SF filmova i provjeri temelje: distopije, strojevi i vanzemaljci.",
        2: "Uđi u kultne naslove, čudnije ideje i filmove koje najbolje pamte pravi SF znalci.",
        3: "Kroz dubinu prošlosti vodi te arhiva starijih klasika, opskurnijih naslova i naprednijih pitanja.",
        4: "Secret level za VHS preživjele: mythic SF, čudni hibridi, zabranjeni svjetovi i pitanja koja ne opraštaju."
    };

    const images = {
        1: "assets/images/year1.png",
        2: "assets/images/year2.png",
        3: "assets/images/year3b.png",
        4: "assets/images/year4.png"
    };

    if (heroTitleEl) {
        heroTitleEl.innerHTML = heroTitles[year];
    }

    if (heroSubtextEl) {
        heroSubtextEl.innerHTML = heroSubtexts[year];
    }

    if (imageEl) {
        imageEl.src = images[year];
        imageEl.alt = "SF quiz";
    }

    el.innerHTML = `
        <div class="active-year-label">
            ${titles[year]}
        </div>
    `;
}

/* =========================================
LOCAL STORAGE HELPERS
========================================= */

function saveTextarea(key, value) {
    localStorage.setItem(key, value);
}

function getTextarea(key) {
    return localStorage.getItem(key) || "";
}

/* =========================================
STATUS HELPERS
========================================= */

function getWeekStateClass(status) {
    if (status === "completed") {
        return "week-completed";
    }

    if (status === "active") {
        return "week-active";
    }

    return "week-locked";
}

function getWeekStatusIcon(status) {
    if (status === "completed") {
        return "🟢";
    }

    if (status === "active") {
        return "🟡";
    }

    return "🔴";
}

/* =========================================
QUIZ HELPERS
========================================= */

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function parseAnswer(answerText) {
    const isCorrect = answerText.startsWith("=*= ");

    return {
        text: answerText
            .replace("=*= ", "")
            .replace("=== ", ""),
        correct: isCorrect
    };
}

function prepareQuestion(question) {
    return {
        group: question.group,
        question: question.question,
        answers: shuffleArray(
            question.answers.map(parseAnswer)
        )
    };
}

function getQuizQuestionCount(difficulty) {
    if (difficulty === "light") {
        return 10;
    }

    if (difficulty === "medium") {
        return 12;
    }

    if (difficulty === "hard") {
        return 8;
    }

    return 10;
}

function getRandomQuestions(difficulty, count, group = "all", includeYesNo = false) {
    let questionPool = [];

    if (difficulty === "mixed") {
        questionPool = [
            ...questions.light,
            ...questions.medium,
            ...questions.hard
        ];

        if (includeYesNo && typeof yesNoQuestions !== "undefined") {
            questionPool = [
                ...questionPool,
                ...yesNoQuestions.light,
                ...yesNoQuestions.medium,
                ...yesNoQuestions.hard
            ];
        }
    } else {
        questionPool = questions[difficulty] || [];

        if (
            includeYesNo &&
            typeof yesNoQuestions !== "undefined" &&
            yesNoQuestions[difficulty]
        ) {
            questionPool = [
                ...questionPool,
                ...yesNoQuestions[difficulty]
            ];
        }
    }

    if (group !== "all") {
        questionPool = questionPool.filter(question =>
            question.group === group
        );
    }

    return shuffleArray(questionPool)
        .slice(0, count)
        .map(prepareQuestion);
}

/* =========================================
IMAGE ZOOM / LIGHTBOX SYSTEM
========================================= */

function initImageZoom() {
    const zoomableImages = document.querySelectorAll(".zoomable-image");
    const imageOverlay = document.getElementById("imageOverlay");

    if (!imageOverlay) {
        return;
    }

    function closeZoomedImage(image) {
        const startRect = image._startRect;

        if (!startRect) {
            image.classList.remove("zoomed");
            imageOverlay.classList.remove("active");
            return;
        }

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const originalCenterX = startRect.left + startRect.width / 2;
        const originalCenterY = startRect.top + startRect.height / 2;

        const moveX = originalCenterX - centerX;
        const moveY = originalCenterY - centerY;

        const animation = image.animate(
            [
                {
                    transform: "translate(-50%, -50%)"
                },
                {
                    transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`
                }
            ],
            {
                duration: 350,
                easing: "ease-in-out"
            }
        );

        animation.onfinish = () => {
            image.classList.remove("zoomed");
            imageOverlay.classList.remove("active");
            image._startRect = null;
        };
    }

    function openZoomedImage(image) {
        const startRect = image.getBoundingClientRect();

        image._startRect = startRect;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const originalCenterX = startRect.left + startRect.width / 2;
        const originalCenterY = startRect.top + startRect.height / 2;

        const moveX = originalCenterX - centerX;
        const moveY = originalCenterY - centerY;

        imageOverlay.classList.add("active");
        image.classList.add("zoomed");

        image.animate(
            [
                {
                    transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`
                },
                {
                    transform: "translate(-50%, -50%)"
                }
            ],
            {
                duration: 350,
                easing: "ease-in-out"
            }
        );
    }

    zoomableImages.forEach(image => {
        image.addEventListener("click", () => {
            const isZoomed = image.classList.contains("zoomed");

            if (isZoomed) {
                closeZoomedImage(image);
                return;
            }

            document.querySelectorAll(".zoomable-image.zoomed").forEach(openImage => {
                closeZoomedImage(openImage);
            });

            openZoomedImage(image);
        });
    });

    imageOverlay.addEventListener("click", () => {
        document.querySelectorAll(".zoomable-image.zoomed").forEach(image => {
            closeZoomedImage(image);
        });
    });
}

/* =========================================
QUIZ RENDER
========================================= */

function renderQuizReward(year, month, week) {
    const frontImage =
        `assets/images/copyright-risk/reward-${year}-${month}-${week}.png`;

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

                            const card = this.closest('.quiz-reward-card');

                            card.dataset.hasReward = 'false';
                            card.classList.add('placeholder-reward');
                            card.classList.remove('unlocked');
                            card.classList.remove('newly-unlocked');
                            card.classList.add('locked');

                            localStorage.removeItem(
                                'quiz-reward-' +
                                card.dataset.rewardYear + '-' +
                                card.dataset.rewardMonth + '-' +
                                card.dataset.rewardWeek
                            );
                        "
                    >
                </div>

            </div>
        </div>
    `;
}

function renderQuizWeek(month, monthIndex, week) {
    const status = getWeekStatus(
        month.month,
        week
    );

    if (
        shouldHideWeek(
            month.month,
            week
        )
    ) {
        return "";
    }

    const weekData =
        month.weeks?.[week - 1];

    if (!weekData) {
        return "";
    }

    const difficulty =
        weekData.quizDifficulty || "light";

    const group =
        weekData.quizGroup || "all";

    const questionCount =
        weekData.questionCount
        || getQuizQuestionCount(difficulty);

    if (status === "locked") {
        return `
        <div class="
            week-block
            ${getWeekStateClass(status)}
        ">

            <div class="week-title">
                ${getWeekStatusIcon(status)}
                Razina ${week} — ${weekData.title}
            </div>

            <div class="quiz-meta">
                Težina: ${difficulty}
                |
                Tema: ${group}
                |
                Status: zaključano
            </div>

            <div class="locked-quiz-message">
                🔒 Ova razina je zaključana.
                Otključaj je kroz admin panel kako bi se pitanja prikazala.
            </div>

        </div>
    `;
    }

    const includeYesNoQuestions =
        month.year === 4 || weekData.includeYesNoQuestions === true;

    const quizQuestions =
        getRandomQuestions(
            difficulty,
            questionCount,
            group,
            includeYesNoQuestions
        );

    return `
        <div class="
            week-block
            ${getWeekStateClass(status)}
        ">

            <div class="week-title">
                ${getWeekStatusIcon(status)}
                Razina ${week} — ${weekData.title}
            </div>

            <div class="quiz-meta">
                Težina: ${difficulty}
                |
                Tema: ${group}
                |
                Pitanja: ${quizQuestions.length}
            </div>

            <div class="quiz-list">

                ${quizQuestions.map((question, questionIndex) => `

                    <div class="quiz-card">

                        <div class="section-title">
                            Pitanje ${questionIndex + 1}
                        </div>

                        <p class="quiz-question">
                            ${question.question}
                        </p>

                        <div class="quiz-answers">

                            ${question.answers.map(answer => `

                                <button
                                    class="quiz-answer-btn"
                                    data-correct="${answer.correct}"
                                >
                                    ${answer.text}
                                </button>

                            `).join("")}

                        </div>

                    </div>

                `).join("")}

            </div>

            ${renderQuizReward(month.year, month.month, week)}
            ${renderWeekReport(month, week)}

        </div>
    `;
}

/* =========================================
REPORT / ADMIN FEEDBACK
========================================= */

function renderWeekReport(month, week) {
    const isEditable =
        canUserEditWeek(
            month.month,
            week
        );

    const textareaKey =
        `textarea-${month.month}-${week}`;

    const feedback =
        localStorage.getItem(
            `week-feedback-${month.month}-${week}`
        ) || "";

    const grade =
        localStorage.getItem(
            `week-grade-${month.month}-${week}`
        ) || "";

    return `
        <label>
            Bilješke / rezultat
        </label>

        <textarea
            id="${textareaKey}"
            ${!isEditable ? "readonly" : ""}
        >${getTextarea(textareaKey)}</textarea>

        ${isTrainer() ? `

            <div class="admin-review">

                <input
                    type="text"
                    class="feedback-input"
                    data-feedback-month="${month.month}"
                    data-feedback-week="${week}"
                    placeholder="Komentar"
                    value="${feedback}"
                >

                <input
                    type="text"
                    class="grade-input"
                    data-grade-month="${month.month}"
                    data-grade-week="${week}"
                    placeholder="Ocjena / rezultat"
                    value="${grade}"
                >

            </div>

        ` : ""}

        ${!isTrainer() && feedback ? `

            <div class="trainer-feedback">

                <div class="feedback-line">

                    <strong>
                        Komentar
                    </strong>

                    <div>
                        ${feedback}
                    </div>

                </div>

                ${grade ? `

                    <div class="feedback-line">

                        <strong>
                            Ocjena / rezultat
                        </strong>

                        <div>
                            ${grade}
                        </div>

                    </div>

                ` : ""}

            </div>

        ` : ""}
    `;
}

/* =========================================
APP RENDER
========================================= */

function renderApp() {
    setMonthsByYear();

    const app =
        document.getElementById("app");

    if (!app) {
        return;
    }

    let html = "";

    months.forEach((month, monthIndex) => {
        if (
            !canUserSeeMonth(
                month.month
            )
        ) {
            return;
        }

        let weeksHTML = "";

        for (
            let week = 1;
            week <= 3;
            week++
        ) {
            weeksHTML += renderQuizWeek(
                month,
                monthIndex,
                week
            );
        }

        html += `
            <div class="
                month-block
                year-${month.year}
            ">

                <div class="month-title">
                    ${month.title}
                </div>

                <div class="month-focus">

                    <strong>
                        Fokus:
                    </strong>

                    <ul>
                        ${month.focus.user.map(item => `
                            <li>${item}</li>
                        `).join("")}
                    </ul>

                </div>

                ${renderAdminControls(
                    month.month
                )}

                <div class="levels-grid">
                    ${weeksHTML}
                </div>

            </div>
        `;
    });

    app.innerHTML = html;

    applyRoleUI();
}

/* =========================================
QUIZ REWARD SYSTEM
========================================= */

function getRewardKey(year, month, week) {
    return `quiz-reward-${year}-${month}-${week}`;
}

function getRewardImage(year, month, week) {
    return `assets/images/copyright-risk/Osobe/reward-${year}-${month}-${week}.png`;
}

function isPlaceholderRewardCard(rewardCard) {
    if (!rewardCard) {
        return true;
    }

    const frontImg = rewardCard.querySelector(".reward-front img");

    return (
        rewardCard.dataset.hasReward === "false" ||
        rewardCard.classList.contains("placeholder-reward") ||
        (
            frontImg &&
            frontImg.src.includes("placeholder.png")
        )
    );
}

function lockRewardCard(rewardCard) {
    if (!rewardCard) {
        return;
    }

    rewardCard.classList.remove("unlocked");
    rewardCard.classList.remove("newly-unlocked");
    rewardCard.classList.add("locked");
}

function unlockQuizReward(rewardCard) {
    if (!rewardCard) {
        return;
    }

    if (isPlaceholderRewardCard(rewardCard)) {
        lockRewardCard(rewardCard);
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

    const rewardMessage = rewardCard.querySelector(".reward-message");

    if (rewardMessage) {
        rewardMessage.textContent = "Nagrada otključana!";
    }

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

    if (isPlaceholderRewardCard(rewardCard)) {
        lockRewardCard(rewardCard);
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
        if (isPlaceholderRewardCard(card)) {
            lockRewardCard(card);
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

/* =========================================
ANSWER CLICK
========================================= */

document.addEventListener("click", function (e) {
    if (
        !e.target.classList.contains(
            "quiz-answer-btn"
        )
    ) {
        return;
    }

    const isCorrect =
        e.target.dataset.correct === "true";

    if (isCorrect) {
        e.target.classList.add("answer-correct");
        e.target.textContent =
            "✅ " + e.target.textContent;
    } else {
        e.target.classList.add("answer-wrong");
        e.target.textContent =
            "❌ " + e.target.textContent;
    }

    const answerBox =
        e.target.closest(".quiz-answers");

    const buttons =
        answerBox.querySelectorAll(
            ".quiz-answer-btn"
        );

    buttons.forEach(button => {
        button.disabled = true;

        if (
            button.dataset.correct === "true"
        ) {
            button.classList.add(
                "answer-correct"
            );
        }
    });

    const weekBlock = e.target.closest(".week-block");
    checkQuizReward(weekBlock);
});

/* =========================================
INPUT SAVE
========================================= */

document.addEventListener("input", (e) => {
    if (
        e.target.tagName === "TEXTAREA"
    ) {
        saveTextarea(
            e.target.id,
            e.target.value
        );
    }

    if (
        e.target.classList.contains(
            "feedback-input"
        )
    ) {
        const month =
            e.target.dataset.feedbackMonth;

        const week =
            e.target.dataset.feedbackWeek;

        localStorage.setItem(
            `week-feedback-${month}-${week}`,
            e.target.value
        );
    }

    if (
        e.target.classList.contains(
            "grade-input"
        )
    ) {
        const month =
            e.target.dataset.gradeMonth;

        const week =
            e.target.dataset.gradeWeek;

        localStorage.setItem(
            `week-grade-${month}-${week}`,
            e.target.value
        );
    }
});

/* =========================================
TEST REWARD BUTTON
Only for development/testing
========================================= */

function createTestRewardButton() {
    if (document.getElementById("testRewardButton")) {
        return;
    }

    const button = document.createElement("button");

    button.id = "testRewardButton";
    button.textContent = "TEST: Okreni sve nagrade";

    document.body.appendChild(button);

    button.addEventListener("click", () => {
        const rewardCards = document.querySelectorAll(".quiz-reward-card");

        rewardCards.forEach(card => {
            unlockQuizReward(card);
        });
    });
}

/* =========================================
INIT
========================================= */

window.addEventListener("load", () => {
    const yearSelect =
        document.getElementById("yearSelect");

    if (yearSelect) {
        yearSelect.value =
            localStorage.getItem(
                "selected-year"
            ) || "1";

        yearSelect.addEventListener(
            "change",
            (e) => {
                localStorage.setItem(
                    "selected-year",
                    e.target.value
                );

                renderApp();

                setTimeout(() => {
                    restoreQuizRewards();
                }, 100);
            }
        );
    }

    renderApp();
    initImageZoom();

    setTimeout(() => {
        restoreQuizRewards();
    }, 100);

    createTestRewardButton();
});