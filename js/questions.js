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

/* =========================================
   MULTIPLE CHOICE QUESTIONS
   Several options - one correct answer
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
            group: "machines",
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
            question: "U kojem filmu kiborg dolazi iz budućnosti da bi ubio još nerođenog vođu pokreta otpora?",
            answers: [
                "=== Predator",
                "=== Alien",
                "=*= Terminator"
            ]
        },
        {
            group: "dystopia",
            question: "Snake Plissken se pojavljuje u filmu:",
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
                "=== Williama Gormana",
                "=*= Dwaynea Hicksa",
                "=== Williama Hudsona"
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
            group: "aliens",
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
            question: "Kako se zove malo stvorenje koje se ne smije hraniti nakon ponoći?",
            answers: [
                "=*= Mogwai",
                "=== Ewok",
                "=== Morlock"
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
            question: "Kako se zove glavni antagonist u filmu 'The Abyss', kojeg glumi Michael Biehn?",
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
            question: "Tko prvi ustaje nakon hibernacije u Alienu?",
            answers: [
                "=== Arthur Dallas",
                "=== Dennis Parker",
                "=*= Gilbert Kane"
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
            question: "Koga HAL sabotira?",
            answers: [
                "=== Cindy i Georgea",
                "=== Boba i Julesa",
                "=*= Franka i Davea"
            ]
        },
        {
            group: "machines",
            question: "Kuhar iz 'Forbidden Planet' je od Robbyja tražio što?",
            answers: [
                "=== Zabranjeno voće (Forbidden fruit)",
                "=== Zabranjene začine (Forbidden ingredients)",
                "=*= Pravu stvar (Real stuff)"
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
            question: "U filmu 'The Andromeda Strain' susret prežive samo:",
            answers: [
                "=== 2 onesviještena narkomana",
                "=== ptice i ribe",
                "=*= beba i alkoholičar"
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
            question: "Tko ne može otići jer ima važan eksperiment koji je u kritičnoj fazi?",
            answers: [
                "=== Dr. Jeremy Stone",
                "=== Dr. Mark Hall",
                "=*= Dr. Ruth Leavitt"
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
            group: "aliens",
            question: "Ime kćeri Dr. Edwarda Morbiusa iz 'Forbidden Planet' je:",
            answers: [
                "=== Eve",
                "=== Annabelle",
                "=*= Altaira"
            ]
        }
    ]
};

/* =========================================
   YES / NO QUESTIONS
   Two offered answers - one correct answer
========================================= */

const yesNoQuestions = {
    light: [
        {
            group: "machines",
            question: "Je li RoboCop istovremeno čovjek i stroj?",
            answers: [
                "=*= Da",
                "=== Ne"
            ]
        },
        {
            group: "dystopia",
            question: "Je li osnovni svijet filma Mad Max vezan uz raspad društva i nasilnu postapokaliptičnu budućnost?",
            answers: [
                "=*= Da",
                "=== Ne"
            ]
        },
        {
            group: "aliens",
            question: "U filmu 'Alien' Ripley je jedini preživjeli putnik Nostroma?",
            answers: [
                "=== Da",
                "=*= Ne"
            ]
        }
    ],

    medium: [
        {
            group: "machines",
            question: "Jesu li HAL 9000 i Skynet isti tip umjetne inteligencije?",
            answers: [
                "=== Da",
                "=*= Ne"
            ]
        },
        {
            group: "dystopia",
            question: "Je li They Live dobar primjer filma o skrivenoj društvenoj kontroli?",
            answers: [
                "=*= Da",
                "=== Ne"
            ]
        },
        {
            group: "aliens",
            question: "Je li The Abyss klasični alien horror poput filma Alien?",
            answers: [
                "=== Da",
                "=*= Ne"
            ]
        }
    ],

    hard: [
        {
            group: "machines",
            question: "Prikazuje li Videodrome tehnologiju i medij kao silu koja mijenja ljudsku stvarnost?",
            answers: [
                "=*= Da",
                "=== Ne"
            ]
        },
        {
            group: "dystopia",
            question: "Govori li Soylent Green o društvu obilja, stabilnosti i neograničenih resursa?",
            answers: [
                "=== Da",
                "=*= Ne"
            ]
        },
        {
            group: "aliens",
            question: "Je li The Andromeda Strain hladniji i znanstveniji oblik SF prijetnje od klasičnog čudovišnog alien filma?",
            answers: [
                "=*= Da",
                "=== Ne"
            ]
        }
    ]
};