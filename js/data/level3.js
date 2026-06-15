/* =========================================
   QUESTIONS 3 — NEPOZNATI FILMOVI

   Cilj:
   - 10 machines
   - 10 aliens
   - 10 dystopia

   Correct: =*=
   Wrong:   ===
========================================= */

const questions3 = {
    machines: [
        {
            id: "q3-machines-futureworld-01",
            film: "Futureworld",
            question: "Koja je glavna tema filma Futureworld?",
            answers: [
                "=*= Korporacijska zavjera u kojoj se ljudi zamjenjuju androidima",
                "=== Pobuna androida izazvana slučajnim kvarom",
                "=== Povezivanje androida u kolektivnu svijest"
            ]
        },
        {
            id: "q3-machines-videodrome-01",
            film: "Videodrome",
            question: "Prikazuje li Videodrome tehnologiju i medij kao silu koja mijenja ljudsku stvarnost?",
            answers: [
                "=*= Da",
                "=== Ne"
            ]
        }

        /* Prazno mjesto 3 */
        /* Prazno mjesto 4 */
        /* Prazno mjesto 5 */
        /* Prazno mjesto 6 */
        /* Prazno mjesto 7 */
        /* Prazno mjesto 8 */
        /* Prazno mjesto 9 */
        /* Prazno mjesto 10 */
    ],

    dystopia: [
        {
            id: "q3-dystopia-shape-things-01",
            film: "H. G. Wells' The Shape of Things to Come",
            question: "Koji planet Omus preuzima kako bi ucjenjivao druge kolonije?",
            answers: [
                "=*= Delta 3",
                "=== Mongo",
                "=== Altair IV"
            ]
        }

        /* Prazno mjesto 2 */
        /* Prazno mjesto 3 */
        /* Prazno mjesto 4 */
        /* Prazno mjesto 5 */
        /* Prazno mjesto 6 */
        /* Prazno mjesto 7 */
        /* Prazno mjesto 8 */
        /* Prazno mjesto 9 */
        /* Prazno mjesto 10 */
    ],

    aliens: [
        {
            id: "q3-aliens-battle-beyond-01",
            film: "Battle Beyond the Stars",
            question: "Kako se zove glavni negativac kojeg John Saxon glumi u filmu Battle Beyond the Stars?",
            answers: [
                "=== Gelt",
                "=*= Sador",
                "=== Zardoz"
            ]
        },
        {
            id: "q3-aliens-battle-beyond-02",
            film: "Battle Beyond the Stars",
            question: "Tko glumi glavnog junaka Shada u filmu Battle Beyond the Stars?",
            answers: [
                "=*= Richard Thomas",
                "=== Julia Duffy",
                "=== Robert Vaughn"
            ]
        },
        {
            id: "q3-aliens-andromeda-01",
            film: "The Andromeda Strain",
            question: "Koje dvije osobe prežive početni događaj u filmu The Andromeda Strain?",
            answers: [
                "=== Dva onesviještena ovisnika",
                "=== Ptice i ribe",
                "=*= Beba i alkoholičar"
            ]
        },
        {
            id: "q3-aliens-andromeda-02",
            film: "The Andromeda Strain",
            question: "Tko ne želi otići jer mu je eksperiment u kritičnoj fazi?",
            answers: [
                "=== Dr. Jeremy Stone",
                "=== Dr. Mark Hall",
                "=*= Dr. Ruth Leavitt"
            ]
        }

        /* Prazno mjesto 5 */
        /* Prazno mjesto 6 */
        /* Prazno mjesto 7 */
        /* Prazno mjesto 8 */
        /* Prazno mjesto 9 */
        /* Prazno mjesto 10 */
    ]
};

/* =========================================
   YEAR THREE CONFIGURATION
========================================= */

const yearThree = [
    {
        year: 3,
        month: 1,
        title: "Dio 1 — Forgotten Machines",
        mode: "quiz",

        focus: {
            user: [
                "zaboravljeni strojevi",
                "androidi",
                "eksperimentalna tehnologija",
                "opskurni tehnološki SF",
                "filmovi koje više nitko ne zna"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Machines — nepoznati filmovi",
                quizGroup: "machines",
                questionType: "multipleChoice",
                questionCount: 10
            }
        ]
    },

    {
        year: 3,
        month: 2,
        title: "Dio 2 — Forgotten Dystopias",
        mode: "quiz",

        focus: {
            user: [
                "zaboravljene distopije",
                "propale civilizacije",
                "korporativna kontrola",
                "opskurni politički SF",
                "svjetovi nakon kraja"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Dystopia — nepoznati filmovi",
                quizGroup: "dystopia",
                questionType: "multipleChoice",
                questionCount: 10
            }
        ]
    },

    {
        year: 3,
        month: 3,
        title: "Dio 3 — Forbidden Life Forms",
        mode: "quiz",

        focus: {
            user: [
                "zaboravljeni susreti",
                "biološke prijetnje",
                "opskurni svemirski filmovi",
                "nepoznati oblici života",
                "arhivski SF"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Aliens — nepoznati filmovi",
                quizGroup: "aliens",
                questionType: "multipleChoice",
                questionCount: 10
            }
        ]
    }
];