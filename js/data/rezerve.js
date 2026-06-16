/* =========================================
   LEVEL 1 — REZERVNA / IZBAČENA PITANJA

   Ova pitanja nisu uključena u aktivni questions1 objekt.
   Čuvamo ih kao rezervu za kasnije zamjene i proširenja.

   Napomena:
   - Datoteka očekuje da je funkcija q1 već definirana.
   - ID-jevi imaju prefiks "reserve-" kako se ne bi sudarili
     s aktivnim pitanjima ako se datoteka slučajno učita.
========================================= */

const reserveQuestions1 = {
    removedFromOriginal: [
        q1(
            "reserve-q1-light-dystopia-total-recall-01",
            "Total Recall",
            "Kako se zove glavni lik kojeg Arnold Schwarzenegger glumi u filmu Total Recall?",
            "Douglas Quaid",
            "John Matrix",
            "Ben Richards"
        ),

        q1(
            "reserve-q1-medium-machines-back-to-the-future-part-ii-01",
            "Back to the Future Part II",
            "Na koji datum Marty i Doc stižu u budućnost u filmu Back to the Future Part II?",
            "21. listopada 2015.",
            "5. studenoga 2015.",
            "12. svibnja 2029."
        ),

        q1(
            "reserve-q1-medium-machines-terminator-2-judgment-day-01",
            "Terminator 2: Judgment Day",
            "Kako se zove sin Sarah Connor?",
            "John Connor",
            "Kyle Connor",
            "Miles Connor"
        ),

        q1(
            "reserve-q1-medium-dystopia-planet-of-the-apes-02",
            "Planet of the Apes",
            "Kojoj vrsti majmuna pripada znanstvenica Zira?",
            "Čimpanzi",
            "Orangutanu",
            "Gorili"
        ),

        q1(
            "reserve-q1-medium-aliens-alien-02",
            "Alien",
            "Tko glumi Ellen Ripley u filmu Alien?",
            "Sigourney Weaver",
            "Linda Hamilton",
            "Jamie Lee Curtis"
        ),

        q1(
            "reserve-q1-medium-aliens-aliens-03",
            "Aliens",
            "Koje stvorenje polaže jaja u gnijezdu kolonije?",
            "Kraljica Xenomorpha",
            "Predatorova kraljica",
            "Matični Mogwai"
        ),

        q1(
            "reserve-q1-medium-aliens-predator-02",
            "Predator",
            "Koji dio elektromagnetskog spektra Predator pretežno koristi za gledanje?",
            "Infracrveno zračenje",
            "Ultraljubičasto zračenje",
            "Rendgensko zračenje"
        ),

        q1(
            "reserve-q1-hard-machines-terminator-2-judgment-day-01",
            "Terminator 2: Judgment Day",
            "Koju oznaku nosi ubojica od tekućeg metala u filmu Terminator 2: Judgment Day?",
            "T-1000",
            "T-800",
            "T-X"
        ),

        q1(
            "reserve-q1-hard-dystopia-mad-max-02",
            "Mad Max",
            "Kako se zove Maxov prijatelj i kolega kojeg banda teško ozlijedi?",
            "Jim Goose",
            "Bubba Zanetti",
            "Fifi Macaffee"
        ),
        q1(
                "q1-light-aliens-aliens-01",
                "Aliens",
                "Kako se zove djevojčica koju Ripley pronalazi na koloniji?",
                "Newt",
                "Rebecca",
                "Carrie"
            ),
            q1(
                "q1-light-aliens-star-wars-01",
                "Star Wars",
                "Koji je protokolarni droid najčešće uz R2-D2?",
                "C-3PO",
                "IG-88",
                "K-2SO"
            ),

            q1(
                "q1-hard-aliens-alien-01",
                "Alien",
                "Kako se zove android na brodu Nostromo?",
                "Ash",
                "Bishop",
                "David"
            ),
            q1(
                "q1-hard-aliens-predator-01",
                "Predator",
                "Što Predator aktivira nakon poraza u završnici filma?",
                "Samouništavajuću napravu",
                "Signal za spašavanje",
                "Krio-komoru"
            ),
            q1(
                "q1-hard-aliens-dune-01",
                "Dune",
                "Koja tvar omogućuje Svemirskom cehu sigurno presavijanje prostora?",
                "Začin melange",
                "Voda života",
                "Sapho sok"
            ),
            q1(
                "q1-hard-dystopia-fahrenheit-451-01",
                "Fahrenheit 451",
                "Tko je režirao filmsku verziju Fahrenheit 451 iz 1966. godine?",
                "François Truffaut",
                "Stanley Kubrick",
                "Richard Fleischer"
            ),

                  q1(
                "q1-medium-aliens-close-encounters-of-the-third-kind-01",
                "Close Encounters of the Third Kind",
                "Kako se zove lik kojeg Richard Dreyfuss glumi u filmu Close Encounters of the Third Kind?",
                "Roy Neary",
                "Elliott Taylor",
                "David Bowman"
            ),

        q1(
            "reserve-q1-hard-aliens-aliens-01",
            "Aliens",
            "Kako se zove android koji prati kolonijalne marince?",
            "Bishop",
            "Ash",
            "Call"
        ),
        medium: {
    dystopia: [
        q1(
            "q1-medium-dystopia-they-live-01",
            "They Live",
            "Što posebne naočale otkrivaju u filmu They Live?",
            "Skrivene poruke i prerušene izvanzemaljce",
            "Budućnost osobe koja ih nosi",
            "Radioaktivne tragove"
        ),

        q1(
            "q1-medium-dystopia-they-live-02",
            "They Live",
            "Koji bivši hrvač glumi glavnog lika Nadu?",
            "Roddy Piper",
            "Jesse Ventura",
            "Hulk Hogan"
        )
    ]
}
    ],

    proposedButUnused: [
        q1(
            "reserve-q1-light-machines-the-terminator-02",
            "The Terminator",
            "Iz koje je godine Terminator poslan u prošlost?",
            "2029.",
            "1997.",
            "2049."
        ),

        q1(
            "reserve-q1-light-dystopia-escape-from-new-york-01",
            "Escape from New York",
            "Kako se zove glavni junak filma Escape from New York?",
            "Snake Plissken",
            "Dutch Schaefer",
            "John Spartan"
        ),

        q1(
            "reserve-q1-light-star-wars-luke-actor-01",
            "Star Wars",
            "Tko glumi Lukea Skywalkera u originalnoj trilogiji Star Wars?",
            "Mark Hamill",
            "Harrison Ford",
            "Alec Guinness"
        ),

        q1(
            "reserve-q1-light-star-wars-obi-wan-01",
            "Star Wars",
            "Tko pomaže Lukeu Skywalkeru da započne obuku za Jedija?",
            "Obi-Wan Kenobi",
            "Han Solo",
            "Grand Moff Tarkin"
        ),

        q1(
            "reserve-q1-light-aliens-gremlins-after-midnight-01",
            "Gremlins",
            "Što se događa ako mala dlakava stvorenja nahranimo nakon ponoći?",
            "Pretvaraju se u opasne Gremline",
            "Počinju se nekontrolirano umnožavati",
            "Zaspu do sljedećeg jutra"
        ),
        q1(
            "q1-medium-dystopia-judge-dredd-01",
            "Judge Dredd",
            "Kako se zove ratni robot kojeg Rico aktivira u filmu Judge Dredd?",
            "ABC Warrior",
            "ED-209",
            "MCP"
        )

        q1(
            "reserve-q1-medium-dystopia-demolition-man-01",
            "Demolition Man",
            "Kako se zove kriminalac kojeg policija odmrzava kako bi zaustavila Johna Spartana?",
            "Simon Phoenix",
            "Edgar Friendly",
            "Dr. Cocteau"
        )
    ]
};

/* =========================================
   SVA REZERVNA PITANJA U JEDNOM NIZU
========================================= */

const allReserveQuestions1 = [
    ...reserveQuestions1.removedFromOriginal,
    ...reserveQuestions1.proposedButUnused
];