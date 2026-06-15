/* =========================================
   LEVEL 1 — POZNATI FILMOVI
========================================= */

/* =========================================
   QUESTIONS 1

   Cilj:
   - 8 machines
   - 8 dystopia
   - 8 aliens

   Correct: =*=
   Wrong:   ===
========================================= */

const questions1 = {
    machines: [
        {
            id: "q1-machines-2001-01",
            film: "2001: A Space Odyssey",
            question: "Koga HAL sabotira?",
            answers: [
                "=== Cindy i Georgea",
                "=== Boba i Julesa",
                "=*= Franka i Davea"
            ]
        },
        {
            id: "q1-machines-bttf-01",
            film: "Back to the Future",
            question: "Kako se zapravo zove Doc iz filma Back to the Future?",
            answers: [
                "=== Seth Brundle",
                "=*= Emmett Brown",
                "=== Roy Batty"
            ]
        },
        {
            id: "q1-machines-bttf-02",
            film: "Back to the Future",
            question: "Od koga je Doc Brown nabavio plutonij?",
            answers: [
                "=== Sirijaca",
                "=*= Libijaca",
                "=== Iračana"
            ]
        },
        {
            id: "q1-machines-robocop-01",
            film: "RoboCop",
            question: "Tko glumi Alexa Murphyja u filmu RoboCop?",
            answers: [
                "=== Kurtwood Smith",
                "=== Robert John Burke",
                "=*= Peter Weller"
            ]
        },
        {
            id: "q1-machines-terminator-01",
            film: "The Terminator",
            question: "Tko glumi Kylea Reesea u filmu The Terminator?",
            answers: [
                "=*= Michael Biehn",
                "=== Jan-Michael Vincent",
                "=== Michael Paré"
            ]
        },
        {
            id: "q1-machines-terminator-02",
            film: "The Terminator",
            question: "U kojem filmu kiborg dolazi iz budućnosti kako bi ubio majku budućeg vođe pokreta otpora?",
            answers: [
                "=== Predator",
                "=== Alien",
                "=*= The Terminator"
            ]
        },
        {
            id: "q1-machines-tron-01",
            film: "Tron",
            question: "Što u filmu Tron znači kratica MCP?",
            answers: [
                "=*= Master Control Program",
                "=== Military Cybernetic Protocol",
                "=== Mainframe Core Processor"
            ]
        },
        {
            id: "q1-machines-wargames-01",
            film: "WarGames",
            question: "Koje ime David koristi kao lozinku za pristup WOPR-u?",
            answers: [
                "=*= Joshua",
                "=== David",
                "=== Ezekiel"
            ]
        }
    ],

    dystopia: [
        {
            id: "q1-dystopia-mad-max-01",
            film: "Mad Max",
            question: "Tko glumi Maxa Rockatanskyja u filmu Mad Max?",
            answers: [
                "=== Kevin Costner",
                "=== Burt Reynolds",
                "=*= Mel Gibson"
            ]
        },
        {
            group: "dystopia",
            question: "He-mana u filmu 'Masters of the Universe' glumi:",
            answers: [
                "=*= Dolph Lundgren",
                "=== Arnold Schwarzenegger",
                "=== Lou Ferrigno"
            ]
        },
        {
            id: "q1-dystopia-planet-apes-01",
            film: "Planet of the Apes",
            question: "Tko glumi Georgea Taylora u filmu Planet of the Apes?",
            answers: [
                "=== Paul Newman",
                "=== Marlon Brando",
                "=*= Charlton Heston"
            ]
        },
        {
            id: "q1-dystopia-planet-apes-02",
            film: "Planet of the Apes",
            question: "Kako se zove nijema žena koju Taylor uzima za suputnicu?",
            answers: [
                "=*= Nova",
                "=== Zira",
                "=== Lara"
            ]
        },
        {
            id: "q1-dystopia-planet-apes-03",
            film: "Planet of the Apes",
            question: "Tko tvrdi da je čovjek zao i sposoban ponajprije za uništavanje?",
            answers: [
                "=*= Dr. Zaius",
                "=== Dr. Cornelius",
                "=== Dr. Honorius"
            ]
        },
        {
            id: "q1-dystopia-clockwork-orange-01",
            film: "A Clockwork Orange",
            question: "Tko glumi Alexa u filmu A Clockwork Orange?",
            answers: [
                "=*= Malcolm McDowell",
                "=== Donald Sutherland",
                "=== Donald Pleasence"
            ]
        },
        {
            id: "q1-dystopia-they-live-01",
            film: "They Live",
            question: "U kojem filmu glavni lik pronalazi naočale koje otkrivaju skrivene poruke kontrole?",
            answers: [
                "=*= They Live",
                "=== RoboCop",
                "=== Strange Days"
            ]
        },
        {
            id: "q1-dystopia-fahrenheit-01",
            film: "Fahrenheit 451",
            question: "Po čemu je neobična uvodna špica filma Fahrenheit 451?",
            answers: [
                "=*= Imena glumaca i ekipe izgovaraju se umjesto da budu ispisana",
                "=== Imena su prikazana na novinama koje odmah izgore",
                "=== Film nema uvodnu špicu"
            ]
        }
    ],

    aliens: [
        {
            id: "q1-aliens-alien-01",
            film: "Alien",
            question: "Koji se član posade prvi budi iz hibernacije u filmu Alien?",
            answers: [
                "=== Arthur Dallas",
                "=== Dennis Parker",
                "=*= Gilbert Kane"
            ]
        },
        {
            id: "q1-aliens-aliens-01",
            film: "Aliens",
            question: "Na kojem se planetu ili mjesecu nalazi kolonija u filmu Aliens?",
            answers: [
                "=== Fiorina 161",
                "=== Altair IV",
                "=*= LV-426"
            ]
        },
        {
            id: "q1-aliens-aliens-02",
            film: "Aliens",
            question: "Koga Michael Biehn glumi u filmu Aliens?",
            answers: [
                "=== Williama Gormana",
                "=*= Dwaynea Hicksa",
                "=== Williama Hudsona"
            ]
        },
        {
            id: "q1-aliens-superman-01",
            film: "Superman",
            question: "Tko glumi Supermana u filmu iz 1978. godine?",
            answers: [
                "=*= Christopher Reeve",
                "=== Jeff Goldblum",
                "=== Mel Gibson"
            ]
        },
        {
            id: "q1-aliens-superman-02",
            film: "Superman",
            question: "Kako se zove Supermanovo skrovište udaljeno od civilizacije?",
            answers: [
                "=== Dvorac Siva Lubanja",
                "=*= Tvrđava samoće",
                "=== Planet Krypton"
            ]
        },
        {
            id: "q1-aliens-gremlins-01",
            film: "Gremlins",
            question: "Kako se zove malo stvorenje koje se ne smije hraniti nakon ponoći?",
            answers: [
                "=*= Mogwai",
                "=== Ewok",
                "=== Morlock"
            ]
        },
        {
            id: "q1-aliens-star-wars-01",
            film: "Star Wars",
            question: "Tko je pucao prvi u originalnoj verziji filma Star Wars?",
            answers: [
                "=*= Han Solo",
                "=== Greedo",
                "=== Pucali su istodobno"
            ]
        },
        {
            id: "q1-aliens-predator-01",
            film: "Predator",
            question: "Koliko članova ima Dutchov tim, ne računajući Dutcha, Annu i Dillona?",
            answers: [
                "=*= 6",
                "=== 5",
                "=== 7"
            ]
        }
    ]
};

/* =========================================
   YEAR ONE CONFIGURATION
========================================= */

const yearOne = [
    {
        year: 1,
        month: 1,
        title: "Dio 1 — Machines of Future",
        mode: "quiz",

        focus: {
            user: [
                "roboti",
                "androidi",
                "kiborzi",
                "umjetna inteligencija",
                "čovjek protiv stroja"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Machines — poznati filmovi",
                quizGroup: "machines",
                questionType: "multipleChoice",
                questionCount: 8
            }
        ]
    },

    {
        year: 1,
        month: 2,
        title: "Dio 2 — Dystopia & Control",
        mode: "quiz",

        focus: {
            user: [
                "distopijska društva",
                "kontrola sustava",
                "postapokalipsa",
                "korporacije",
                "budućnost kao upozorenje"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Dystopia — poznati filmovi",
                quizGroup: "dystopia",
                questionType: "multipleChoice",
                questionCount: 8
            }
        ]
    },

    {
        year: 1,
        month: 3,
        title: "Dio 3 — Alien Life Forms",
        mode: "quiz",

        focus: {
            user: [
                "izvanzemaljci",
                "prvi kontakt",
                "invazije",
                "nepoznati oblici života",
                "biološke prijetnje"
            ]
        },

        weeks: [
            {
                week: 1,
                title: "Aliens — poznati filmovi",
                quizGroup: "aliens",
                questionType: "multipleChoice",
                questionCount: 8
            }
        ]
    }
];