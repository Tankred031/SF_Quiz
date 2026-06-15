/* =========================================
   SF QUIZ PROGRESSION — MAIN APP
   Novi sustav:
   - Light pitanja iz 3 teme odmah dostupna
   - 6/8 točnih otključava Medium iste teme
   - 7/8 točnih otključava nagradnu sliku
   - Bez admin.js / user.js / questions.js
========================================= */

/* =========================================
   CONFIG
========================================= */

const ACTIVE_LEVEL = 1;

const LEVEL_HERO_IMAGES = {
    1: "assets/images/year1.png",
    2: "assets/images/year2.png",
    3: "assets/images/year3b.png",
    4: "assets/images/year4.png"
};

const QUIZ_GROUPS = [
    {
        id: "machines",
        title: "Machines of Future",
        focus: [
            "roboti",
            "androidi",
            "kiborzi",
            "umjetna inteligencija",
            "čovjek protiv stroja"
        ]
    },
    {
        id: "dystopia",
        title: "Dystopia & Control",
        focus: [
            "distopijska društva",
            "kontrola sustava",
            "postapokalipsa",
            "korporacije",
            "budućnost kao upozorenje"
        ]
    },
    {
        id: "aliens",
        title: "Alien Life Forms",
        focus: [
            "izvanzemaljci",
            "prvi kontakt",
            "invazije",
            "nepoznati oblici života",
            "biološke prijetnje"
        ]
    }
];

const QUIZ_DIFFICULTIES = [
    {
        id: "light",
        title: "Light",
        databaseYear: 1,
        questionCount: 8,
        unlockedByDefault: true
    },
    {
        id: "medium",
        title: "Medium",
        databaseYear: 2,
        questionCount: 12,
        unlockedByDefault: false
    }
];

const MEDIUM_UNLOCK_SCORE = 6;
const REWARD_UNLOCK_SCORE = 7;

/* =========================================
   HERO
========================================= */

function applyLevelTheme() {
    const hero =
        document.getElementById("hero");

    const app =
        document.getElementById("app");

    document.body.classList.remove(
        "year-1",
        "year-2",
        "year-3",
        "year-4"
    );

    document.body.classList.add(
        "year-1"
    );

    if (hero) {
        hero.classList.remove(
            "hero-year-1",
            "hero-year-2",
            "hero-year-3",
            "hero-year-4"
        );

        hero.classList.add(
            "hero-year-1"
        );
    }

    if (app) {
        app.classList.remove(
            "year-1",
            "year-2",
            "year-3",
            "year-4"
        );

        app.classList.add(
            "year-1"
        );
    }
}

function renderHeroText() {
    const title =
        document.getElementById("heroTitle");

    const subtext =
        document.getElementById("heroSubtext");

    const image =
        document.getElementById("heroImage");

    const userYearDisplay =
        document.getElementById("userYearDisplay");

    const heroTitles = {
        1: "Dani prošle budućnosti",
        2: "Neobjašnjivi signali iz dubine žanra",
        3: "Arhiva zabranjenih svjetova",
        4: "Tajna arhiva nemogućih svjetova"
    };

    const heroSubtexts = {
        1: "Light kvizovi su odmah dostupni. Ako iz neke teme riješiš barem 6 od 8 pitanja, otključava se Medium te teme. Ako riješiš barem 7 od 8, osvajaš nagradnu sliku.",
        2: "Cult razina donosi slabije poznate filmove i zahtjevnija pitanja iz strojeva, distopija i izvanzemaljaca.",
        3: "Advanced razina vodi te kroz opskurnije i teže SF naslove koje pamte samo pravi žanrovski arheolozi.",
        4: "Secret level okuplja hardcore pitanja, detalje, zamke i da/ne izazove za arhivske ratnike SF-a."
    };

    const levelLabels = {
        1: "LEVEL 1 — Light Protocol",
        2: "LEVEL 2 — Cult Following",
        3: "LEVEL 3 — Advanced SF",
        4: "SECRET LEVEL — Hardcore Protocol"
    };

    if (title) {
        title.textContent =
            heroTitles[ACTIVE_LEVEL] || "SF Quiz Progression";
    }

    if (subtext) {
        subtext.textContent =
            heroSubtexts[ACTIVE_LEVEL] || "";
    }

    if (image) {
        image.src =
            LEVEL_HERO_IMAGES[ACTIVE_LEVEL] || "assets/images/year1.png";

        image.alt =
            `Level ${ACTIVE_LEVEL} hero image`;
    }

    if (userYearDisplay) {
        userYearDisplay.innerHTML = `
            <div class="active-year-label">
                ${levelLabels[ACTIVE_LEVEL] || "LEVEL 1"}
            </div>
        `;
    }
}

/* =========================================
   STORAGE KEYS
========================================= */

function getQuizKey(
    difficulty,
    group
) {
    return `sfq-level-1-${difficulty}-${group}`;
}

function getQuizScoreKey(
    difficulty,
    group
) {
    return `${getQuizKey(
        difficulty,
        group
    )}-score`;
}

function getQuizCompletedKey(
    difficulty,
    group
) {
    return `${getQuizKey(
        difficulty,
        group
    )}-completed`;
}

function getQuizUnlockedKey(
    difficulty,
    group
) {
    return `${getQuizKey(
        difficulty,
        group
    )}-unlocked`;
}

/* =========================================
   PROGRESSION
========================================= */

function isQuizCompleted(
    difficulty,
    group
) {
    return localStorage.getItem(
        getQuizCompletedKey(
            difficulty,
            group
        )
    ) === "true";
}

function getSavedScore(
    difficulty,
    group
) {
    const score =
        localStorage.getItem(
            getQuizScoreKey(
                difficulty,
                group
            )
        );

    if (score === null) {
        return null;
    }

    return Number(score);
}

function isQuizUnlocked(
    difficulty,
    group
) {
    if (difficulty === "light") {
        return true;
    }

    return localStorage.getItem(
        getQuizUnlockedKey(
            difficulty,
            group
        )
    ) === "true";
}

function unlockMediumQuiz(group) {
    localStorage.setItem(
        getQuizUnlockedKey(
            "medium",
            group
        ),
        "true"
    );
}

function saveQuizResult(
    difficulty,
    group,
    score
) {
    localStorage.setItem(
        getQuizScoreKey(
            difficulty,
            group
        ),
        score.toString()
    );

    localStorage.setItem(
        getQuizCompletedKey(
            difficulty,
            group
        ),
        "true"
    );

    if (
        difficulty === "light" &&
        score >= MEDIUM_UNLOCK_SCORE
    ) {
        unlockMediumQuiz(
            group
        );
    }
}

function resetQuiz(
    difficulty,
    group
) {
    localStorage.removeItem(
        getQuizScoreKey(
            difficulty,
            group
        )
    );

    localStorage.removeItem(
        getQuizCompletedKey(
            difficulty,
            group
        )
    );

    if (difficulty === "light") {
        localStorage.removeItem(
            getQuizUnlockedKey(
                "medium",
                group
            )
        );

        const rewardData =
            getRewardData(
                difficulty,
                group
            );

        if (rewardData) {
            localStorage.removeItem(
                getRewardKey(
                    rewardData.year,
                    rewardData.month,
                    rewardData.week
                )
            );
        }
    }

    renderApp();
}

/* =========================================
   QUIZ HELPERS
========================================= */

function shuffleArray(array) {
    const shuffled =
        [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {
        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
}

function parseAnswer(answerText) {
    const isCorrect =
        answerText.startsWith("=*= ");

    return {
        text: answerText
            .replace("=*= ", "")
            .replace("=== ", ""),
        correct: isCorrect
    };
}

function prepareQuestion(
    question,
    group
) {
    return {
        id: question.id || "",
        film: question.film || "",
        group,
        question: question.question,
        answers: shuffleArray(
            question.answers.map(
                parseAnswer
            )
        )
    };
}

function getQuestionDatabase(databaseYear) {
    if (
        databaseYear === 1 &&
        typeof questions1 !== "undefined"
    ) {
        return questions1;
    }

    if (
        databaseYear === 2 &&
        typeof questions2 !== "undefined"
    ) {
        return questions2;
    }

    if (
        databaseYear === 3 &&
        typeof questions3 !== "undefined"
    ) {
        return questions3;
    }

    if (
        databaseYear === 4 &&
        typeof questions4 !== "undefined"
    ) {
        return questions4;
    }

    console.error(
        `[SF Quiz] Baza questions${databaseYear} nije pronađena.`
    );

    return null;
}

function getQuizQuestions(
    difficulty,
    group
) {
    const difficultyConfig =
        QUIZ_DIFFICULTIES.find(item =>
            item.id === difficulty
        );

    if (!difficultyConfig) {
        return [];
    }

    const database =
        getQuestionDatabase(
            difficultyConfig.databaseYear
        );

    if (!database) {
        return [];
    }

    const questionPool =
        database[group] || [];

    return questionPool
        .slice(
            0,
            difficultyConfig.questionCount
        )
        .map(question =>
            prepareQuestion(
                question,
                group
            )
        );
}

/* =========================================
   REWARD MAPPING
========================================= */

function getRewardData(difficulty, group) {
    const difficultyNumber = {
        light: 1,
        medium: 2,
        hard: 3
    };

    const groupNumber = {
        machines: 1,
        dystopia: 2,
        aliens: 3
    };

    const year =
        difficultyNumber[difficulty];

    const month =
        groupNumber[group];

    if (!year || !month) {
        return null;
    }

    return {
        year,
        month,
        week: 1
    };
}

function getRewardElementSelector(
    difficulty,
    group
) {
    const rewardData =
        getRewardData(
            difficulty,
            group
        );

    if (!rewardData) {
        return "";
    }

    return `
        .quiz-reward-card
        [data-reward-year="${rewardData.year}"]
    `;
}

/* =========================================
   RESULT TEXT
========================================= */

function getResultMessage(
    difficulty,
    score,
    total
) {
    if (difficulty === "light") {
        if (score >= REWARD_UNLOCK_SCORE) {
            return `
                <div class="quiz-result success">
                    🏆 Rezultat: ${score} / ${total}<br>
                    Nagrada osvojena! Medium ove teme je otključan.
                </div>
            `;
        }

        if (score >= MEDIUM_UNLOCK_SCORE) {
            return `
                <div class="quiz-result medium-unlocked">
                    🔓 Rezultat: ${score} / ${total}<br>
                    Medium ove teme je otključan. Za nagradnu sliku potrebno je najmanje ${REWARD_UNLOCK_SCORE} točnih odgovora.
                </div>
            `;
        }

        return `
            <div class="quiz-result failed">
                Rezultat: ${score} / ${total}<br>
                Medium ostaje zaključan. Za otključavanje treba najmanje ${MEDIUM_UNLOCK_SCORE} točnih odgovora.
            </div>
        `;
    }

    return `
        <div class="quiz-result">
            Rezultat: ${score} / ${total}
        </div>
    `;
}

/* =========================================
   RENDER HELPERS
========================================= */

function renderFocusList(groupData) {
    return `
        <ul>
            ${groupData.focus.map(item => `
                <li>${item}</li>
            `).join("")}
        </ul>
    `;
}

function renderLockedQuiz(
    difficultyConfig,
    groupData
) {
    return `
        <div class="week-block week-locked locked-quiz-card">

            <div class="week-title">
                🔴 ${difficultyConfig.title} — ${groupData.title}
            </div>

            <div class="quiz-meta">
                Zaključano
            </div>

            <div class="locked-quiz-message">
                🔒 Za otključavanje Medium kviza trebaš riješiti
                barem ${MEDIUM_UNLOCK_SCORE} od 8 Light pitanja iz ove teme.
            </div>

        </div>
    `;
}

function renderCompletedQuiz(
    difficultyConfig,
    groupData,
    questions
) {
    const score =
        getSavedScore(
            difficultyConfig.id,
            groupData.id
        );

    const total =
        questions.length;

    const rewardData =
        getRewardData(
            difficultyConfig.id,
            groupData.id
        );

    return `
        <div
            class="week-block week-completed quiz-section"
            data-difficulty="${difficultyConfig.id}"
            data-group="${groupData.id}"
        >

            <div class="week-title">
                🟢 ${difficultyConfig.title} — ${groupData.title}
            </div>

            <div class="quiz-meta">
                Tema: ${groupData.id}
                |
                Pitanja: ${total}
                |
                Status: završeno
            </div>

            ${getResultMessage(
                difficultyConfig.id,
                score,
                total
            )}

            ${
                rewardData
                    ? renderQuizReward(
                        rewardData.year,
                        rewardData.month,
                        rewardData.week
                    )
                    : ""
            }

            <button
                type="button"
                class="reset-quiz-btn"
                data-difficulty="${difficultyConfig.id}"
                data-group="${groupData.id}"
            >
                Ponovi ovaj kviz
            </button>

        </div>
    `;
}

function renderActiveQuiz(
    difficultyConfig,
    groupData,
    questions
) {
    const rewardData =
        getRewardData(
            difficultyConfig.id,
            groupData.id
        );

    return `
        <div
            class="week-block week-active quiz-section"
            data-difficulty="${difficultyConfig.id}"
            data-group="${groupData.id}"
        >

            <div class="week-title">
                🟡 ${difficultyConfig.title} — ${groupData.title}
            </div>

            <div class="quiz-meta">
                Tema: ${groupData.id}
                |
                Pitanja: ${questions.length}
                |
                Za Medium: ${MEDIUM_UNLOCK_SCORE}/${questions.length}
                ${
                    difficultyConfig.id === "light"
                        ? `| Za nagradu: ${REWARD_UNLOCK_SCORE}/${questions.length}`
                        : ""
                }
            </div>

            <div class="quiz-list">

                ${
                    questions.length > 0
                        ? questions.map(
                            (
                                question,
                                questionIndex
                            ) => `
                                <div
                                    class="quiz-card"
                                    data-question-id="${question.id}"
                                    data-film="${question.film}"
                                >

                                    <div class="section-title">
                                        Pitanje ${questionIndex + 1}
                                    </div>

                                    <p class="quiz-question">
                                        ${question.question}
                                    </p>

                                    <div class="quiz-answers">
                                        ${question.answers.map(answer => `
                                            <button
                                                type="button"
                                                class="quiz-answer-btn"
                                                data-correct="${answer.correct}"
                                            >
                                                ${answer.text}
                                            </button>
                                        `).join("")}
                                    </div>

                                </div>
                            `
                        ).join("")
                        : `
                            <div class="empty-quiz-message">
                                Za ovu temu pitanja još nisu unesena.
                            </div>
                        `
                }

            </div>

            ${
                rewardData
                    ? renderQuizReward(
                        rewardData.year,
                        rewardData.month,
                        rewardData.week
                    )
                    : ""
            }

            <div class="quiz-live-result"></div>

        </div>
    `;
}

function renderQuizBlock(
    difficultyConfig,
    groupData
) {
    const difficulty =
        difficultyConfig.id;

    const group =
        groupData.id;

    const unlocked =
        isQuizUnlocked(
            difficulty,
            group
        );

    if (!unlocked) {
        return renderLockedQuiz(
            difficultyConfig,
            groupData
        );
    }

    const questions =
        getQuizQuestions(
            difficulty,
            group
        );

    if (
        isQuizCompleted(
            difficulty,
            group
        )
    ) {
        return renderCompletedQuiz(
            difficultyConfig,
            groupData,
            questions
        );
    }

    return renderActiveQuiz(
        difficultyConfig,
        groupData,
        questions
    );
}

function renderGroupBlock(groupData) {
    return `
        <section class="month-block year-1">

            <div class="month-title">
                ${groupData.title}
            </div>

            <div class="month-focus">

                <strong>
                    Fokus:
                </strong>

                ${renderFocusList(groupData)}

            </div>

            <div class="levels-grid">

                ${QUIZ_DIFFICULTIES.map(difficultyConfig =>
                    renderQuizBlock(
                        difficultyConfig,
                        groupData
                    )
                ).join("")}

            </div>

        </section>
    `;
}

/* =========================================
   APP RENDER
========================================= */

function renderApp() {
    applyLevelTheme();
    renderHeroText();

    const app =
        document.getElementById("app");

    if (!app) {
        return;
    }

    app.innerHTML =
        QUIZ_GROUPS.map(groupData =>
            renderGroupBlock(groupData)
        ).join("");

    setTimeout(() => {
        if (
            typeof restoreQuizRewards ===
            "function"
        ) {
            restoreQuizRewards();
        }
    }, 50);
}

/* =========================================
   QUIZ ANSWER HANDLING
========================================= */

function getQuizScoreFromSection(quizSection) {
    const quizCards =
        quizSection.querySelectorAll(
            ".quiz-card"
        );

    let correctCount = 0;

    quizCards.forEach(card => {
        const selectedButton =
            card.querySelector(
                ".quiz-answer-btn.selected-answer"
            );

        if (
            selectedButton &&
            selectedButton.dataset.correct === "true"
        ) {
            correctCount++;
        }
    });

    return {
        correct: correctCount,
        total: quizCards.length
    };
}

function isQuizSectionFinished(quizSection) {
    const quizCards =
        quizSection.querySelectorAll(
            ".quiz-card"
        );

    return [...quizCards].every(card =>
        Boolean(
            card.querySelector(
                ".quiz-answer-btn.selected-answer"
            )
        )
    );
}

function finishQuizSection(quizSection) {
    const difficulty =
        quizSection.dataset.difficulty;

    const group =
        quizSection.dataset.group;

    const result =
        getQuizScoreFromSection(
            quizSection
        );

    saveQuizResult(
        difficulty,
        group,
        result.correct
    );

    const liveResult =
        quizSection.querySelector(
            ".quiz-live-result"
        );

    if (liveResult) {
        liveResult.innerHTML =
            getResultMessage(
                difficulty,
                result.correct,
                result.total
            );
    }

    if (
        difficulty === "light" &&
        result.correct >= REWARD_UNLOCK_SCORE
    ) {
        const rewardCard =
            quizSection.querySelector(
                ".quiz-reward-card"
            );

        if (
            typeof unlockQuizReward === "function"
        ) {
            unlockQuizReward(
                rewardCard
            );
        }
    }

    setTimeout(() => {
        renderApp();
    }, 1300);
}

document.addEventListener(
    "click",
    event => {
        const resetButton =
            event.target.closest(
                ".reset-quiz-btn"
            );

        if (resetButton) {
            resetQuiz(
                resetButton.dataset.difficulty,
                resetButton.dataset.group
            );

            return;
        }

        const clickedButton =
            event.target.closest(
                ".quiz-answer-btn"
            );

        if (!clickedButton) {
            return;
        }

        if (clickedButton.disabled) {
            return;
        }

        const answerBox =
            clickedButton.closest(
                ".quiz-answers"
            );

        if (!answerBox) {
            return;
        }

        const answerButtons =
            answerBox.querySelectorAll(
                ".quiz-answer-btn"
            );

        answerButtons.forEach(button => {
            button.disabled = true;

            if (
                button.dataset.correct === "true"
            ) {
                button.classList.add(
                    "answer-correct"
                );
            }
        });

        clickedButton.classList.add(
            "selected-answer"
        );

        if (
            clickedButton.dataset.correct === "true"
        ) {
            clickedButton.textContent =
                "✅ " + clickedButton.textContent;
        } else {
            clickedButton.classList.add(
                "answer-wrong"
            );

            clickedButton.textContent =
                "❌ " + clickedButton.textContent;
        }

        const quizSection =
            clickedButton.closest(
                ".quiz-section"
            );

        if (!quizSection) {
            return;
        }

        if (
            isQuizSectionFinished(
                quizSection
            )
        ) {
            finishQuizSection(
                quizSection
            );
        }
    }
);

/* =========================================
   IMAGE ZOOM / LIGHTBOX SYSTEM
========================================= */

function initImageZoom() {
    const zoomableImages =
        document.querySelectorAll(
            ".zoomable-image"
        );

    const imageOverlay =
        document.getElementById(
            "imageOverlay"
        );

    if (!imageOverlay) {
        return;
    }

    function closeZoomedImage(image) {
        image.classList.remove(
            "zoomed"
        );

        imageOverlay.classList.remove(
            "active"
        );
    }

    function openZoomedImage(image) {
        imageOverlay.classList.add(
            "active"
        );

        image.classList.add(
            "zoomed"
        );
    }

    zoomableImages.forEach(image => {
        image.addEventListener(
            "click",
            () => {
                const isZoomed =
                    image.classList.contains(
                        "zoomed"
                    );

                if (isZoomed) {
                    closeZoomedImage(
                        image
                    );

                    return;
                }

                document
                    .querySelectorAll(
                        ".zoomable-image.zoomed"
                    )
                    .forEach(openImage => {
                        closeZoomedImage(
                            openImage
                        );
                    });

                openZoomedImage(
                    image
                );
            }
        );
    });

    imageOverlay.addEventListener(
        "click",
        () => {
            document
                .querySelectorAll(
                    ".zoomable-image.zoomed"
                )
                .forEach(image => {
                    closeZoomedImage(
                        image
                    );
                });
        }
    );
}

/* =========================================
   INIT
========================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {
        renderApp();
        initImageZoom();
    }
);