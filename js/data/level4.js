/* =========================================
   LEVEL 4 / SECRET — HARDCORE ARCHIVE

   Ukupno:
   - 10 multiple-choice pitanja
   - 10 Da / Ne pitanja

   Correct: =*=
   Wrong:   ===
========================================= */

const q4MultipleChoice = (
    id,
    film,
    question,
    correct,
    wrong1,
    wrong2
) => ({
    id,
    film,
    group: "mixed",
    questionType: "multipleChoice",
    question,
    answers: [
        `=*= ${correct}`,
        `=== ${wrong1}`,
        `=== ${wrong2}`
    ]
});

const q4YesNo = (
    id,
    film,
    question,
    correct
) => ({
    id,
    film,
    group: "mixed",
    questionType: "yesNo",
    question,
    answers: correct === "Da"
        ? [
            "=*= Da",
            "=== Ne"
        ]
        : [
            "=== Da",
            "=*= Ne"
        ]
});

const questions4 = {
    multipleChoice: [
        q4MultipleChoice(
            "q4-hardcore-2001-01",
            "2001: A Space Odyssey",
            "Kojeg je datuma HAL 9000, prema filmu, postao operativan?",
            "12. siječnja 1992.",
            "12. siječnja 1997.",
            "3. travnja 2001."
        ),

        q4MultipleChoice(
            "q4-hardcore-blade-runner-01",
            "Blade Runner",
            "Koju origami figuru Gaff ostavlja Deckardu na kraju filma Blade Runner?",
            "Jednoroga",
            "Ždrala",
            "Ovcu"
        ),

        q4MultipleChoice(
            "q4-hardcore-alien-01",
            "Alien",
            "Kako posada Nostroma zove brodsko računalo MU/TH/UR 6000?",
            "Mother",
            "Father",
            "Oracle"
        ),

        q4MultipleChoice(
            "q4-hardcore-bttf-2-01",
            "Back to the Future Part II",
            "Koje razdoblje pokriva Grays Sports Almanac u filmu Back to the Future Part II?",
            "1950.–2000.",
            "1925.–1975.",
            "2000.–2050."
        ),

        q4MultipleChoice(
            "q4-hardcore-dune-01",
            "Dune",
            "Kako se zove padišah-car poznatog svemira u filmu Dune iz 1984.?",
            "Shaddam IV",
            "Leto IV",
            "Feyd II"
        ),

        q4MultipleChoice(
            "q4-hardcore-forbidden-planet-01",
            "Forbidden Planet",
            "Koju oznaku nosi svemirski brod kojim zapovijeda J. J. Adams u filmu Forbidden Planet?",
            "C-57D",
            "NCC-1701",
            "RXM-1"
        ),

        q4MultipleChoice(
            "q4-hardcore-logans-run-01",
            "Logan's Run",
            "Kako se zove kristal ugrađen u dlan koji pokazuje dob stanovnika u filmu Logan's Run?",
            "Life-clock",
            "Time-flower",
            "Age-core"
        ),

        q4MultipleChoice(
            "q4-hardcore-outland-01",
            "Outland",
            "Kako se zove kompanija koja upravlja rudarskom postajom Con-Am 27 u filmu Outland?",
            "Con-Amalgamate",
            "Weyland-Yutani",
            "Omni Consumer Products"
        ),

        q4MultipleChoice(
            "q4-hardcore-andromeda-01",
            "The Andromeda Strain",
            "Koji je član tima, prema hipotezi 'odd man', ovlašten deaktivirati nuklearni mehanizam u Wildfireu?",
            "Dr. Mark Hall",
            "Dr. Jeremy Stone",
            "Dr. Ruth Leavitt"
        ),

        q4MultipleChoice(
            "q4-hardcore-wargames-01",
            "WarGames",
            "Što znači kratica WOPR u filmu WarGames?",
            "War Operation Plan Response",
            "World Operations Processing Reactor",
            "Weaponized Online Prediction Routine"
        )
    ],

    yesNo: [
        q4YesNo(
            "q4-yes-no-2001-01",
            "2001: A Space Odyssey",
            "Jesu li HAL 9000 i Skynet isti tip umjetne inteligencije?",
            "Ne"
        ),

        q4YesNo(
            "q4-yes-no-alien-01",
            "Alien",
            "U filmu Alien Ripley je jedini preživjeli putnik Nostroma?",
            "Ne"
        ),

        q4YesNo(
            "q4-yes-no-fahrenheit-451-01",
            "Fahrenheit 451",
            "Glavni lik u filmu Fahrenheit 451 zove se Guy Montag?",
            "Da"
        ),

        q4YesNo(
            "q4-yes-no-mad-max-01",
            "Mad Max",
            "Je li osnovni svijet filma Mad Max vezan uz raspad društva i nasilnu postapokaliptičnu budućnost?",
            "Da"
        ),

        q4YesNo(
            "q4-yes-no-masters-universe-01",
            "Masters of the Universe",
            "James Tolkan, poznat po ulozi Stricklanda u Back to the Future, glumi i u Masters of the Universe?",
            "Da"
        ),

        q4YesNo(
            "q4-yes-no-abyss-01",
            "The Abyss",
            "Je li The Abyss klasični alien horror poput filma Alien?",
            "Ne"
        ),

        q4YesNo(
            "q4-yes-no-andromeda-01",
            "The Andromeda Strain",
            "Je li The Andromeda Strain hladniji i znanstveniji oblik SF prijetnje od klasičnog čudovišnog alien filma?",
            "Da"
        ),

        q4YesNo(
            "q4-yes-no-terminator-01",
            "The Terminator",
            "Kad Sarah Connor uđe u Tech-Noir, svira pjesma Burning in the Third Degree?",
            "Ne"
        ),

        q4YesNo(
            "q4-yes-no-they-live-01",
            "They Live",
            "Je li They Live dobar primjer filma o skrivenoj društvenoj kontroli?",
            "Da"
        ),

        q4YesNo(
            "q4-yes-no-videodrome-01",
            "Videodrome",
            "Prikazuje li Videodrome tehnologiju i medij kao silu koja mijenja ljudsku stvarnost?",
            "Da"
        )
    ]
};

/* =========================================
   YEAR FOUR CONFIGURATION
========================================= */

const yearFour = [
    {
        year: 4,
        month: 1,
        title: "Secret Level — Hardcore Archive",
        mode: "quiz",

        focus: {
            user: [
                "opskurni detalji",
                "skrivene filmske činjenice",
                "datumi i oznake",
                "sporedni likovi",
                "filmske zamke",
                "strojevi",
                "distopije",
                "izvanzemaljski oblici života"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Secret — Hardcore Multiple Choice",
                quizGroup: "multipleChoice",
                questionType: "multipleChoice",
                questionCount: 10
            },

            {
                week: 2,
                title: "Secret — Hardcore Da ili Ne",
                quizGroup: "yesNo",
                questionType: "yesNo",
                questionCount: 10
            }
        ]
    }
];

