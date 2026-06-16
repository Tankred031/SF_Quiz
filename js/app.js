/* =========================================
   SF QUIZ PROGRESSION — MAIN APP
========================================= */

/* =========================================
   CONFIG
========================================= */

const LEVEL_STORAGE_KEY = "sfq-active-level";

let activeLevel =
    Number(
        localStorage.getItem(
            LEVEL_STORAGE_KEY
        )
    ) || 1;

const LEVEL_CONFIGS = {
    1: {
        id: 1,
        title: "Dani prošle budućnosti",
        label: "LEVEL 1 — Poznati filmovi",
        image: "assets/images/year1.png",
        subtext:
            "Poznati SF filmovi podijeljeni na Light, Medium i Hard težinu.",
        databaseName: "questions1",

        questionCounts: {
            light: 8,
            medium: 10,
            hard: 8
        },

        unlockScores: {
            medium: 6,
            hard: 8
        },

        rewardScores: {
            light: 7,
            medium: 9,
            hard: 7
        }
    },

    2: {
        id: 2,
        title: "Neobjašnjivi signali iz dubine žanra",
        label: "LEVEL 2 — Slabije poznati filmovi",
        image: "assets/images/year2.png",
        subtext:
            "Kultni i slabije poznati filmovi za iskusnije SF istraživače.",
        databaseName: "questions2",

        questionCounts: {
            light: 8,
            medium: 10,
            hard: 8
        },

        unlockScores: {
            medium: 6,
            hard: 8
        },

        rewardScores: {
            light: 7,
            medium: 9,
            hard: 7
        }
    },

    3: {
        id: 3,
        title: "Arhiva zabranjenih svjetova",
        label: "LEVEL 3 — Nepoznati filmovi",
        image: "assets/images/year3b.png",
        subtext:
            "Opskurni i zaboravljeni SF filmovi za žanrovske arheologe.",
        databaseName: "questions3",

        questionCounts: {
            light: 8,
            medium: 10,
            hard: 12
        },

        unlockScores: {
            medium: 6,
            hard: 8
        },

        rewardScores: {
            light: 7,
            medium: 9,
            hard: 10
        }
    },

    4: {
        id: 4,
        title: "Tajna arhiva nemogućih svjetova",
        label: "SECRET LEVEL — Hardcore Archive",
        image: "assets/images/year4.png",
        subtext:
            "Hardcore filmski detalji, skrivene činjenice i Da/Ne zamke.",
        databaseName: "questions4"
    }
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
        title: "Light"
    },

    {
        id: "medium",
        title: "Medium"
    },

    {
        id: "hard",
        title: "Hard"
    }
];

const DIFFICULTY_INDEX = {
    light: 1,
    medium: 2,
    hard: 3
};

const GROUP_INDEX = {
    machines: 1,
    dystopia: 2,
    aliens: 3
};

/* =========================================
   LEVEL HELPERS
========================================= */

function getActiveLevelConfig() {
    return (
        LEVEL_CONFIGS[activeLevel] ||
        LEVEL_CONFIGS[1]
    );
}

function getQuestionDatabase(level) {
    if (
        level === 1 &&
        typeof questions1 !== "undefined"
    ) {
        return questions1;
    }

    if (
        level === 2 &&
        typeof questions2 !== "undefined"
    ) {
        return questions2;
    }

    if (
        level === 3 &&
        typeof questions3 !== "undefined"
    ) {
        return questions3;
    }

    if (
        level === 4 &&
        typeof questions4 !== "undefined"
    ) {
        return questions4;
    }

    console.error(
        `[SF Quiz] Baza questions${level} nije pronađena.`
    );

    return null;
}

/* =========================================
   HERO I LEVEL SELECT
========================================= */

function applyLevelTheme() {
    const hero =
        document.getElementById("hero");

    const app =
        document.getElementById("app");

    const themeClasses = [
        "year-1",
        "year-2",
        "year-3",
        "year-4"
    ];

    const heroThemeClasses = [
        "hero-year-1",
        "hero-year-2",
        "hero-year-3",
        "hero-year-4"
    ];

    document.body.classList.remove(
        ...themeClasses
    );

    document.body.classList.add(
        `year-${activeLevel}`
    );

    if (hero) {
        hero.classList.remove(
            ...heroThemeClasses
        );

        hero.classList.add(
            `hero-year-${activeLevel}`
        );
    }

    if (app) {
        app.classList.remove(
            ...themeClasses
        );

        app.classList.add(
            `year-${activeLevel}`
        );
    }
}

function renderLevelSelect() {
    const userYearDisplay =
        document.getElementById(
            "userYearDisplay"
        );

    if (!userYearDisplay) {
        return;
    }

    let secretDisabled = false;

    if (
        typeof getSecretLevelUserStatus ===
        "function"
    ) {
        const secretStatus =
            getSecretLevelUserStatus();

        /*
           Podržava različite nazive
           vrijednosti iz user.js.
        */

        secretDisabled =
            secretStatus?.disabled === true ||
            secretStatus?.unlocked === false ||
            secretStatus?.canOpen === false;
    } else if (
        typeof canUserOpenLevel ===
        "function"
    ) {
        secretDisabled =
            !canUserOpenLevel(4);
    }

    const levelOptions =
        Object.values(
            LEVEL_CONFIGS
        )
            .map(level => {
                const isSecret =
                    level.id === 4;

                const optionLabel =
                    isSecret &&
                        secretDisabled
                        ? `${level.label} 🔒`
                        : level.label;

                return `
                    <option
                        value="${level.id}"

                        ${level.id ===
                        activeLevel
                        ? "selected"
                        : ""
                    }

                        ${isSecret &&
                        secretDisabled
                        ? "disabled"
                        : ""
                    }
                    >
                        ${optionLabel}
                    </option>
                `;
            })
            .join("");

    userYearDisplay.innerHTML = `
        <div class="hero-level-selector">

            <label for="levelSelect">
                Odaberi razinu:
            </label>

            <select id="levelSelect">
                ${levelOptions}
            </select>

            ${typeof renderSecretAdminControl ===
            "function"
            ? renderSecretAdminControl()
            : ""
        }

        </div>
    `;
}

function renderHeroText() {
    const levelConfig =
        getActiveLevelConfig();

    const title =
        document.getElementById(
            "heroTitle"
        );

    const subtext =
        document.getElementById(
            "heroSubtext"
        );

    const image =
        document.getElementById(
            "heroImage"
        );

    if (title) {
        title.textContent =
            levelConfig.title;
    }

    if (subtext) {
        subtext.textContent =
            levelConfig.subtext;
    }

    if (image) {
        image.src =
            levelConfig.image;

        image.alt =
            levelConfig.label;
    }

    renderLevelSelect();
}

function changeActiveLevel(newLevel) {
    const parsedLevel =
        Number(newLevel);

    if (!LEVEL_CONFIGS[parsedLevel]) {
        return;
    }

    /*
       Provjera pristupa vrijedi samo
       za Secret Level.
    */

    if (
        parsedLevel === 4 &&
        typeof canUserOpenLevel === "function" &&
        !canUserOpenLevel(4)
    ) {
        renderLevelSelect();
        return;
    }

    activeLevel =
        parsedLevel;

    localStorage.setItem(
        LEVEL_STORAGE_KEY,
        activeLevel.toString()
    );

    renderApp();
}

/* =========================================
   STORAGE KEYS
========================================= */

function getQuizKey(
    difficulty,
    group
) {
    return [
        "sfq",
        `level-${activeLevel}`,
        difficulty,
        group
    ].join("-");
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
    return (
        localStorage.getItem(
            getQuizCompletedKey(
                difficulty,
                group
            )
        ) === "true"
    );
}

function getSavedScore(
    difficulty,
    group
) {
    const savedScore =
        localStorage.getItem(
            getQuizScoreKey(
                difficulty,
                group
            )
        );

    if (savedScore === null) {
        return null;
    }

    return Number(savedScore);
}

function isQuizUnlocked(
    difficulty,
    group
) {
    if (difficulty === "light") {
        return true;
    }

    return (
        localStorage.getItem(
            getQuizUnlockedKey(
                difficulty,
                group
            )
        ) === "true"
    );
}

function unlockQuiz(
    difficulty,
    group
) {
    localStorage.setItem(
        getQuizUnlockedKey(
            difficulty,
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
    const levelConfig =
        getActiveLevelConfig();

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
        score >=
        levelConfig.unlockScores.medium
    ) {
        unlockQuiz(
            "medium",
            group
        );
    }

    if (
        difficulty === "medium" &&
        score >=
        levelConfig.unlockScores.hard
    ) {
        unlockQuiz(
            "hard",
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

        localStorage.removeItem(
            getQuizUnlockedKey(
                "hard",
                group
            )
        );
    }

    if (difficulty === "medium") {
        localStorage.removeItem(
            getQuizUnlockedKey(
                "hard",
                group
            )
        );
    }

    const rewardData =
        getRewardData(
            difficulty,
            group
        );

    if (
        rewardData &&
        typeof getRewardKey === "function"
    ) {
        localStorage.removeItem(
            getRewardKey(
                rewardData.year,
                rewardData.month,
                rewardData.week
            )
        );
    }

    renderApp();
}

function resetSecretQuiz(
    questionType
) {
    if (!questionType) {
        return;
    }

    localStorage.removeItem(
        getSecretScoreKey(
            questionType
        )
    );

    localStorage.removeItem(
        getSecretCompletedKey(
            questionType
        )
    );

    /*
       Brišemo i stanje osvojene nagrade.

       multipleChoice = week 1
       yesNo = week 2
    */

    const secretWeek =
        questionType === "multipleChoice"
            ? 1
            : 2;

    if (
        typeof getRewardKey === "function"
    ) {
        localStorage.removeItem(
            getRewardKey(
                4,
                1,
                secretWeek
            )
        );
    }

    /*
       Ako je Secret Level ranije pao,
       uklanjamo i failure stanje.
    */

    localStorage.removeItem(
        "sfq-secret-level-failed"
    );

    renderApp();
}

/* =========================================
   QUESTION HELPERS
========================================= */

function shuffleArray(array) {
    const shuffled =
        [...array];

    for (
        let index =
            shuffled.length - 1;

        index > 0;

        index--
    ) {
        const randomIndex =
            Math.floor(
                Math.random() *
                (index + 1)
            );

        [
            shuffled[index],
            shuffled[randomIndex]
        ] = [
                shuffled[randomIndex],
                shuffled[index]
            ];
    }

    return shuffled;
}

function parseAnswer(answerText) {
    const isCorrect =
        answerText.startsWith(
            "=*= "
        );

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
        id:
            question.id || "",

        film:
            question.film || "",

        group,

        question:
            question.question || "",

        answers:
            shuffleArray(
                (
                    question.answers || []
                ).map(parseAnswer)
            )
    };
}

function getQuizQuestions(
    difficulty,
    group
) {
    const levelConfig =
        getActiveLevelConfig();

    const database =
        getQuestionDatabase(
            activeLevel
        );

    if (
        !database ||
        activeLevel === 4
    ) {
        return [];
    }

    const difficultyDatabase =
        database[difficulty];

    if (!difficultyDatabase) {
        return [];
    }

    const questionPool =
        difficultyDatabase[group] || [];

    const questionCount =
        levelConfig
            .questionCounts[difficulty] ||
        questionPool.length;

    return questionPool
        .slice(
            0,
            questionCount
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

function getRewardData(
    difficulty,
    group
) {
    const month =
        GROUP_INDEX[group];

    const week =
        DIFFICULTY_INDEX[
        difficulty
        ];

    if (!month || !week) {
        return null;
    }

    return {
        year: activeLevel,
        month,
        week
    };
}

function getRewardThreshold(
    difficulty
) {
    const levelConfig =
        getActiveLevelConfig();

    return (
        levelConfig.rewardScores[
        difficulty
        ] || 0
    );
}

/* =========================================
   RESULT TEXT
========================================= */

function getNextDifficultyData(
    difficulty
) {
    const levelConfig =
        getActiveLevelConfig();

    if (difficulty === "light") {
        return {
            difficulty: "medium",
            label: "Medium",
            required:
                levelConfig
                    .unlockScores
                    .medium
        };
    }

    if (difficulty === "medium") {
        return {
            difficulty: "hard",
            label: "Hard",
            required:
                levelConfig
                    .unlockScores
                    .hard
        };
    }

    return null;
}

function getResultMessage(
    difficulty,
    score,
    total
) {
    const rewardThreshold =
        getRewardThreshold(
            difficulty
        );

    const nextDifficulty =
        getNextDifficultyData(
            difficulty
        );

    const rewardUnlocked =
        score >= rewardThreshold;

    const nextUnlocked =
        nextDifficulty
            ? score >=
            nextDifficulty.required
            : false;

    if (
        rewardUnlocked &&
        nextUnlocked
    ) {
        return `
            <div class="quiz-result success">
                🏆 Rezultat:
                ${score} / ${total}
                <br>
                Nagrada osvojena!
                ${nextDifficulty.label}
                ove teme je otključan.
            </div>
        `;
    }

    if (rewardUnlocked) {
        return `
            <div class="quiz-result success">
                🏆 Rezultat:
                ${score} / ${total}
                <br>
                Nagradna slika je osvojena!
            </div>
        `;
    }

    if (nextUnlocked) {
        return `
            <div class="quiz-result medium-unlocked">
                🔓 Rezultat:
                ${score} / ${total}
                <br>
                ${nextDifficulty.label}
                ove teme je otključan.
                Za nagradnu sliku potrebno je
                najmanje ${rewardThreshold}
                točnih odgovora.
            </div>
        `;
    }

    if (nextDifficulty) {
        return `
            <div class="quiz-result failed">
                Rezultat:
                ${score} / ${total}
                <br>
                ${nextDifficulty.label}
                ostaje zaključan.
                Za otključavanje je potrebno
                najmanje
                ${nextDifficulty.required}
                točnih odgovora.
            </div>
        `;
    }

    return `
        <div class="quiz-result failed">
            Rezultat:
            ${score} / ${total}
            <br>
            Za nagradnu sliku potrebno je
            najmanje ${rewardThreshold}
            točnih odgovora.
        </div>
    `;
}

/* =========================================
   RENDER HELPERS
========================================= */

function renderFocusList(groupData) {
    return `
        <ul>
            ${groupData.focus
            .map(item => `
                    <li>
                        ${item}
                    </li>
                `)
            .join("")}
        </ul>
    `;
}

function renderQuizMeta(
    difficulty,
    group,
    total
) {
    const rewardThreshold =
        getRewardThreshold(
            difficulty
        );

    const nextDifficulty =
        getNextDifficultyData(
            difficulty
        );

    return `
        <div class="quiz-meta">

            Tema:
            ${group}

            |

            Pitanja:
            ${total}

            ${nextDifficulty
            ? `
                        |
                        Za ${nextDifficulty.label}:
                        ${nextDifficulty.required}/${total}
                    `
            : ""
        }

            |

            Za nagradu:
            ${rewardThreshold}/${total}

        </div>
    `;
}

function renderLockedQuiz(
    difficultyConfig,
    groupData
) {
    const previousDifficulty =
        difficultyConfig.id === "medium"
            ? "Light"
            : "Medium";

    const requiredScore =
        difficultyConfig.id === "medium"
            ? getActiveLevelConfig()
                .unlockScores.medium
            : getActiveLevelConfig()
                .unlockScores.hard;

    return `
        <div
            class="
                week-block
                week-locked
                locked-quiz-card
            "
        >

            <div class="week-title">
                🔴
                ${difficultyConfig.title}
                —
                ${groupData.title}
            </div>

            <div class="quiz-meta">
                Zaključano
            </div>

            <div class="locked-quiz-message">
                🔒 Za otključavanje
                ${difficultyConfig.title}
                kviza trebaš riješiti najmanje
                ${requiredScore}
                pitanja iz
                ${previousDifficulty}
                kviza ove teme.
            </div>

        </div>
    `;
}

function renderCompletedQuiz(
    difficultyConfig,
    groupData,
    questions
) {
    const difficulty =
        difficultyConfig.id;

    const group =
        groupData.id;

    const score =
        getSavedScore(
            difficulty,
            group
        );

    const rewardData =
        getRewardData(
            difficulty,
            group
        );

    return `
        <div
            class="
                week-block
                week-completed
                quiz-section
            "
            data-difficulty="${difficulty}"
            data-group="${group}"
        >

            <div class="week-title">
                🟢
                ${difficultyConfig.title}
                —
                ${groupData.title}
            </div>

            ${renderQuizMeta(
        difficulty,
        group,
        questions.length
    )}

            ${getResultMessage(
        difficulty,
        score,
        questions.length
    )}

            ${rewardData &&
            typeof renderQuizReward ===
            "function"

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
                data-difficulty="${difficulty}"
                data-group="${group}"
            >
                Ponovi ovaj kviz
            </button>

        </div>
    `;
}

function renderQuestionCard(
    question,
    questionIndex
) {
    return `
        <div
            class="quiz-card"
            data-question-id="${question.id}"
            data-film="${question.film}"
        >

            <div class="section-title">
                Pitanje
                ${questionIndex + 1}
            </div>

            ${question.film
            ? `
                        <div class="quiz-film">
                            ${question.film}
                        </div>
                    `
            : ""
        }

            <p class="quiz-question">
                ${question.question}
            </p>

            <div class="quiz-answers">

                ${question.answers
            .map(answer => `
                        <button
                            type="button"
                            class="quiz-answer-btn"
                            data-correct="${answer.correct}"
                        >
                            ${answer.text}
                        </button>
                    `)
            .join("")}

            </div>

        </div>
    `;
}

function renderActiveQuiz(
    difficultyConfig,
    groupData,
    questions
) {
    const difficulty =
        difficultyConfig.id;

    const group =
        groupData.id;

    const rewardData =
        getRewardData(
            difficulty,
            group
        );

    return `
        <div
            class="
                week-block
                week-active
                quiz-section
            "
            data-difficulty="${difficulty}"
            data-group="${group}"
        >

            <div class="week-title">
                🟡
                ${difficultyConfig.title}
                —
                ${groupData.title}
            </div>

            ${renderQuizMeta(
        difficulty,
        group,
        questions.length
    )}

            <div class="quiz-list">

                ${questions.length > 0
            ? questions
                .map(
                    renderQuestionCard
                )
                .join("")

            : `
                            <div class="empty-quiz-message">
                                Za ovu kategoriju nema pitanja.
                            </div>
                        `
        }

            </div>

            ${rewardData &&
            typeof renderQuizReward ===
            "function"

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

    if (
        !isQuizUnlocked(
            difficulty,
            group
        )
    ) {
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

function renderGroupBlock(
    groupData
) {
    return `
        <section
            class="
                month-block
                year-${activeLevel}
            "
        >

            <div class="month-title">
                ${groupData.title}
            </div>

            <div class="month-focus">

                <strong>
                    Fokus:
                </strong>

                ${renderFocusList(
        groupData
    )}

            </div>

            <div class="levels-grid">

                ${QUIZ_DIFFICULTIES
            .map(
                difficultyConfig =>
                    renderQuizBlock(
                        difficultyConfig,
                        groupData
                    )
            )
            .join("")}

            </div>

        </section>
    `;
}

/* =========================================
   SECRET LEVEL
========================================= */

function getSecretQuestions(
    questionType
) {
    const database =
        getQuestionDatabase(4);

    if (!database) {
        return [];
    }

    return (
        database[questionType] || []
    ).map(question =>
        prepareQuestion(
            question,
            "mixed"
        )
    );
}

function getSecretKey(
    questionType
) {
    return `sfq-level-4-${questionType}`;
}

function getSecretCompletedKey(
    questionType
) {
    return `${getSecretKey(
        questionType
    )}-completed`;
}

function getSecretScoreKey(
    questionType
) {
    return `${getSecretKey(
        questionType
    )}-score`;
}

function isSecretCompleted(
    questionType
) {
    return (
        localStorage.getItem(
            getSecretCompletedKey(
                questionType
            )
        ) === "true"
    );
}

function renderSecretQuiz(
    questionType,
    title
) {
    const questions =
        getSecretQuestions(
            questionType
        );

    const completed =
        isSecretCompleted(
            questionType
        );

    const savedScore =
        Number(
            localStorage.getItem(
                getSecretScoreKey(
                    questionType
                )
            )
        );

    /*
       Secret Level ima dvije reward kartice:

       multipleChoice = week 1
       yesNo = week 2
    */

    const secretWeek =
        questionType === "multipleChoice"
            ? 1
            : 2;

    /*
       Ako je Secret kviz već ranije završen
       s maksimalnim rezultatom, sinkroniziramo
       reward ključ u localStorageu.

       Ovo popravlja stare rezultate spremljene
       prije dodavanja Secret reward kartica.
    */

    if (
        completed &&
        savedScore === questions.length &&
        typeof getRewardKey === "function"
    ) {
        localStorage.setItem(
            getRewardKey(
                4,
                1,
                secretWeek
            ),
            "unlocked"
        );
    }

    const rewardHtml =
        typeof renderQuizReward === "function"
            ? renderQuizReward(
                4,
                1,
                secretWeek
            )
            : "";

    return `
        <div
            class="
                week-block
                ${completed
                    ? "week-completed"
                    : "week-active"
                }
                quiz-section
            "
            data-secret-type="${questionType}"
        >

            <div class="week-title">
                ${completed
                    ? "🟢"
                    : "🟡"
                }

                ${title}
            </div>

            <div class="quiz-meta">
                Pitanja:
                ${questions.length}
                |
                Secret Archive
            </div>

            ${completed
                ? `
                    <div class="quiz-result success">
                        Rezultat:
                        ${savedScore}
                        /
                        ${questions.length}
                    </div>

                    ${rewardHtml}

                    <button
                        type="button"
                        class="reset-secret-quiz-btn"
                        data-secret-type="${questionType}"
                    >
                        Ponovi ovaj kviz
                    </button>
                `

                : `
                    <div class="quiz-list">

                        ${questions
                            .map(
                                renderQuestionCard
                            )
                            .join("")
                        }

                    </div>

                    ${rewardHtml}

                    <div class="quiz-live-result"></div>
                `
            }

        </div>
    `;
}

function renderSecretLevel() {
    return `
        <section
            class="
                month-block
                year-4
                secret-level-block
            "
        >

            <div class="month-title">
                Secret Level —
                Hardcore Archive
            </div>

            <div class="month-focus">

                <strong>
                    Fokus:
                </strong>

                <ul>
                    <li>opskurni detalji</li>
                    <li>datumi i oznake</li>
                    <li>skrivene filmske činjenice</li>
                    <li>filmske zamke</li>
                    <li>Da / Ne izazovi</li>
                </ul>

            </div>

            <div class="levels-grid">

                ${renderSecretQuiz(
        "multipleChoice",
        "Hardcore Multiple Choice"
    )}

                ${renderSecretQuiz(
        "yesNo",
        "Hardcore Da ili Ne"
    )}

            </div>

        </section>
    `;
}

/* =========================================
   APP RENDER
========================================= */

function getSecretFailedState() {
    if (
        typeof isSecretFailed ===
        "function"
    ) {
        return isSecretFailed();
    }

    return (
        localStorage.getItem(
            "sfq-secret-level-failed"
        ) === "true"
    );
}

function renderApp() {
    if (
        activeLevel === 4 &&
        typeof canUserOpenLevel === "function" &&
        !canUserOpenLevel(4)
    ) {
        activeLevel = 1;

        localStorage.setItem(
            LEVEL_STORAGE_KEY,
            "1"
        );
    }

    applyLevelTheme();
    renderHeroText();

    const app =
        document.getElementById("app");

    if (!app) {
        return;
    }

    if (activeLevel === 4) {
        if (getSecretFailedState()) {
            app.innerHTML =
                typeof renderSecretFailed === "function"
                    ? renderSecretFailed()
                    : `
                        <section class="secret-failed-screen">
                            <div class="secret-failed-content">

                                <h2>
                                    SECRET ARCHIVE FAILED
                                </h2>

                                <p>
                                    Pogrešan odgovor.
                                    Pristup je zaključan.
                                </p>

                            </div>
                        </section>
                    `;
        } else {
            app.innerHTML =
                renderSecretLevel();

            if (
                typeof renderSecretCompletion === "function"
            ) {
                app.insertAdjacentHTML(
                    "beforeend",
                    renderSecretCompletion()
                );
            }
        }
    } else {
        /*
           Prvo se crtaju pitanja i nagrade
           za Level 1, 2 ili 3.
        */

        app.innerHTML =
            QUIZ_GROUPS
                .map(renderGroupBlock)
                .join("");

        /*
           Završni blok dodaje se samo
           nakon završetka Levela 3.
        */

        if (
            activeLevel === 3 &&
            typeof renderLevel3Completion === "function"
        ) {
            app.insertAdjacentHTML(
                "beforeend",
                renderLevel3Completion()
            );
        }
    }

    setTimeout(() => {
        if (
            typeof restoreQuizRewards === "function"
        ) {
            restoreQuizRewards();
        }
    }, 50);
}

/* =========================================
   QUIZ SCORE
========================================= */

function getQuizScoreFromSection(
    quizSection
) {
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
            selectedButton.dataset.correct ===
            "true"
        ) {
            correctCount++;
        }
    });

    return {
        correct: correctCount,
        total: quizCards.length
    };
}

function isQuizSectionFinished(
    quizSection
) {
    const quizCards =
        quizSection.querySelectorAll(
            ".quiz-card"
        );

    if (quizCards.length === 0) {
        return false;
    }

    return [...quizCards].every(card =>
        Boolean(
            card.querySelector(
                ".quiz-answer-btn.selected-answer"
            )
        )
    );
}

/* =========================================
   QUIZ FINISH
========================================= */

function finishRegularQuiz(
    quizSection
) {
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

    const rewardThreshold =
        getRewardThreshold(
            difficulty
        );

    if (
        result.correct >=
        rewardThreshold
    ) {
        const rewardCard =
            quizSection.querySelector(
                ".quiz-reward-card"
            );

        if (
            rewardCard &&
            typeof unlockQuizReward ===
            "function"
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

function finishSecretQuiz(
    quizSection
) {
    const questionType =
        quizSection.dataset.secretType;

    const result =
        getQuizScoreFromSection(
            quizSection
        );

    localStorage.setItem(
        getSecretScoreKey(
            questionType
        ),
        result.correct.toString()
    );

    localStorage.setItem(
        getSecretCompletedKey(
            questionType
        ),
        "true"
    );

    const liveResult =
        quizSection.querySelector(
            ".quiz-live-result"
        );

    if (liveResult) {
        liveResult.innerHTML = `
            <div class="quiz-result success">
                Secret rezultat:
                ${result.correct}
                /
                ${result.total}
            </div>
        `;
    }

    setTimeout(() => {
        renderApp();
    }, 1300);
}

function finishQuizSection(
    quizSection
) {
    if (
        quizSection.dataset.secretType
    ) {
        finishSecretQuiz(
            quizSection
        );

        return;
    }

    finishRegularQuiz(
        quizSection
    );
}

/* =========================================
   SECRET HARDCORE FAILURE
========================================= */

function activateSecretFailure() {
    if (
        typeof setSecretFailed ===
        "function"
    ) {
        setSecretFailed();

        return;
    }

    localStorage.setItem(
        "sfq-secret-level-failed",
        "true"
    );
}

/* =========================================
   CHANGE EVENT
========================================= */

document.addEventListener(
    "change",
    event => {
        if (
            event.target.id ===
            "levelSelect"
        ) {
            changeActiveLevel(
                event.target.value
            );
        }
    }
);

/* =========================================
   CLICK EVENT
========================================= */

document.addEventListener(
    "click",
    event => {

        const secretFailedBackButton =
            event.target.closest(
                ".secret-failed-back-btn"
            );

        if (secretFailedBackButton) {
            changeActiveLevel(1);
            return;
        }
        const secretAdminButton =
            event.target.closest(
                "#secretAdminToggleBtn"
            );

        if (
            secretAdminButton &&
            typeof toggleSecretLevelAccess ===
            "function"
        ) {
            toggleSecretLevelAccess();

            return;
        }

        const resetSecretButton =
            event.target.closest(
                ".reset-secret-quiz-btn"
            );

        if (resetSecretButton) {
            resetSecretQuiz(
                resetSecretButton.dataset.secretType
            );

            return;
        }

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

        if (
            !clickedButton ||
            clickedButton.disabled
        ) {
            return;
        }

        const answerBox =
            clickedButton.closest(
                ".quiz-answers"
            );

        if (!answerBox) {
            return;
        }

        const quizSection =
            clickedButton.closest(
                ".quiz-section"
            );

        if (!quizSection) {
            return;
        }

        const answerButtons =
            answerBox.querySelectorAll(
                ".quiz-answer-btn"
            );

        const isCorrectAnswer =
            clickedButton.dataset.correct ===
            "true";

        const isSecretQuiz =
            Boolean(
                quizSection.dataset.secretType
            );

        answerButtons.forEach(button => {
            button.disabled = true;

            if (
                button.dataset.correct ===
                "true"
            ) {
                button.classList.add(
                    "answer-correct"
                );
            }
        });

        clickedButton.classList.add(
            "selected-answer"
        );

        if (isCorrectAnswer) {
            clickedButton.textContent =
                `✅ ${clickedButton.textContent}`;
        } else {
            clickedButton.classList.add(
                "answer-wrong"
            );

            clickedButton.textContent =
                `❌ ${clickedButton.textContent}`;

            if (isSecretQuiz) {
                activateSecretFailure();

                const allSecretButtons =
                    document.querySelectorAll(
                        '[data-secret-type] .quiz-answer-btn'
                    );

                allSecretButtons.forEach(button => {
                    button.disabled = true;
                });

                setTimeout(() => {
                    renderApp();
                }, 700);

                return;
            }
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
   IMAGE ZOOM
========================================= */

function initImageZoom() {
    const imageOverlay =
        document.getElementById(
            "imageOverlay"
        );

    const overlayImage =
        document.getElementById(
            "overlayImage"
        );

    if (
        !imageOverlay ||
        !overlayImage
    ) {
        return;
    }

    function openImage(image) {
        const rewardCard =
            image.closest(
                ".quiz-reward-card"
            );

        if (
            rewardCard &&
            (
                rewardCard.classList.contains(
                    "locked"
                ) ||
                rewardCard.classList.contains(
                    "placeholder-reward"
                )
            )
        ) {
            return;
        }

        overlayImage.src =
            image.currentSrc ||
            image.src;

        overlayImage.alt =
            image.alt ||
            "Povećana slika";

        imageOverlay.classList.add(
            "active"
        );

        document.body.classList.add(
            "image-zoom-open"
        );
    }

    function closeImage() {
        imageOverlay.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "image-zoom-open"
        );

        setTimeout(() => {
            overlayImage.src = "";
        }, 250);
    }

    document.addEventListener(
        "click",
        event => {
            const image =
                event.target.closest(
                    ".zoomable-image"
                );

            if (!image) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            openImage(image);
        }
    );

    imageOverlay.addEventListener(
        "click",
        event => {
            if (
                event.target ===
                imageOverlay ||
                event.target ===
                overlayImage
            ) {
                closeImage();
            }
        }
    );

    document.addEventListener(
        "keydown",
        event => {
            if (
                event.key === "Escape" &&
                imageOverlay.classList.contains(
                    "active"
                )
            ) {
                closeImage();
            }
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

        if (
            typeof applyRoleUI ===
            "function"
        ) {
            applyRoleUI();
        }
    }
);