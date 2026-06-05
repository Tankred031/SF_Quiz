/* =========================================
   SF QUESTIONS
   Groups: dystopia, machines, aliens
   Correct answer marker: =*=
   Wrong answer marker: ===
========================================= */

/* =========================================
   DIFFICULTY LOGIC

   light:
   - vrlo poznati SF filmovi
   - poznati likovi, glumci, režiseri
   - većinom mainstream 80/90

   medium:
   - kultni ili srednje poznati filmovi
   - većinom 80/90
   - konkretnija pitanja za SF fanove

   hard:
   - stariji klasici 60/70
   - manje poznati filmovi
   - opskurniji detalji
   - dopušteni i teži 80/90 filmovi ako su manje poznati
========================================= */


const questions = {
    light: [
        {
            group: "machines",
            question: "Tko glumi Kylea Reesea u filmu The Terminator?",
            answers: [
                "=*= Michael Biehn",
                "=== Jan-Michael Vincent",
                "=== Michael Paré"
            ]
        },
        {
            group: "dystopia",
            question: "Pravo ime Doc-a iz 'Back to the Future' je:",
            answers: [
                "=== Seth Brundle",
                "=*= Emmett Brown",
                "=== Roy Batty"
            ]
        },
        {
            group: "aliens",
            question: "Na koji planet/mjesec slijeće posada u filmu Aliens?",
            answers: [
                "=== Fiorina-161",
                "=== Altair IV",
                "=*= LV-426"
            ]
        },
        {
            group: "machines",
            question: "U kojem filmu kiborg dolazi iz budućnosti da bi ubio još nerođenog vođu pokreta otpora",
            answers: [
                "=== Predator",
                "=== Alien",
                "=*= Terminator"
            ]
        },
        {
            group: "dystopia",
            question: "Snake Plissken se pojavljuje u filmu",
            answers: [
                "=*= Escape from New York",
                "=== Universal Soldier",
                "=== Running Man"
            ]
        },
        {
            group: "aliens",
            question: "Michael Biehn glumi koga u filmu Aliens?",
            answers: [
                "=== Scott Gormana",
                "=*= Dwayne Hicksa",
                "=== William Hudsona"
            ]
        },
        {
            group: "machines",
            question: "Tko glumi glavnog lika Alexa Murphyja u filmu RoboCop?",
            answers: [
                "=== Kurtwood Smith",
                "=== Robert John Burke",
                "=*= Peter Weller"
            ]
        },
        {
            group: "dystopia",
            question: "Tko glumi Maxa Rockatanskyja u filmu Mad Max?",
            answers: [
                "=== Kevin Costner",
                "=== Burt Reynolds",
                "=*= Mel Gibson"
            ]
        },
        {
            group: "aliens",
            question: "Osim ***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "Osim The Terminator, James Cameron je režirao i:",
            answers: [
                "=== RoboCop",
                "=== Alien",
                "=*= The Abyss"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "aliens",
            question: "Kako se zove malo stvorenje koja se ne smije hraniti nakon ponoći?",
            answers: [
                "=*= Mogwai",
                "=== Ewoks",
                "=== Morloc"
            ]

        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "Tko je glavni negativac u - 'The Abyss' - kojeg glumi Michael Biehn",
            answers: [
                "=== Virgil Brigman",
                "=== Dwayne Hicks",
                "=*= Hiram Coffey"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        }
    ],

    medium: [
        {
            group: "machines",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "U kojem filmu glavni lik pronalazi naočale koje otkrivaju skrivene poruke kontrole?",
            answers: [
                "=*= They Live",
                "=== RoboCop",
                "=== Strange Days"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "U kojem filmu stanovnici futurističkog grada moraju umrijeti kada navrše 30 godina?",
            answers: [
                "=*= Logan's Run",
                "=== Soylent Green",
                "=== Futureworld"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        }
    ],

    hard: [
        {
            group: "machines",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=*= točan odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=*= točan odgovor",
                "=== krivi odgovor",
                "=== krivi odgovor"
            ]
        },
        {
            group: "aliens",
            question: "Naziv potonule podmornice iz filma 'The Abyss' je:",
            answers: [
                "=== USS Memphis",
                "=*= USS Montana",
                "=== USS Arizona"
            ]
        },
        {
            group: "machines",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        },
        {
            group: "dystopia",
            question: "***",
            answers: [
                "=== krivi odgovor",
                "=== krivi odgovor",
                "=*= točan odgovor"
            ]
        }
    ]
};