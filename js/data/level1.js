/* =========================================
   LEVEL 1 — POZNATI FILMOVI
   78 pitanja: Light 24, Medium 30, Hard 24
========================================= */

const q1 = (
    id,
    film,
    question,
    correct,
    wrong1,
    wrong2
) => ({
    id,
    film,
    question,
    answers: [
        `=*= ${correct}`,
        `=== ${wrong1}`,
        `=== ${wrong2}`
    ]
});

const questions1 = {
    light: {
        machines: [
            q1(
                "q1-light-machines-blade-runner-01",
                "Blade Runner",
                "Koje godine se odvija radnja filma Blade Runner?",
                "2019",
                "2029",
                "2049"
            ),
            q1(
                "q1-light-machines-back-to-the-future-01",
                "Back to the Future",
                "Kako se zapravo zove Doc iz filma Back to the Future?",
                "Emmett Brown",
                "Seth Brundle",
                "Roy Batty"
            ),
            q1(
                "q1-light-machines-robocop-01",
                "RoboCop",
                "Tko glumi Alexa Murphyja u filmu RoboCop?",
                "Peter Weller",
                "Kurtwood Smith",
                "Robert John Burke"
            ),
            q1(
                "q1-light-machines-the-terminator-01",
                "The Terminator",
                "Tko glumi Kylea Reesea u filmu The Terminator?",
                "Michael Biehn",
                "Jan-Michael Vincent",
                "Michael Paré"
            ),
            q1(
                "q1-light-machines-blade-runner-02",
                "Blade Runner",
                "Čime se Rick Deckard bavi u filmu Blade Runner?",
                "Lovi odbjegle replikante",
                "Popravlja leteća vozila",
                "Projektira androidske oči"
            ),
            q1(
                "q1-light-machines-terminator-2-judgment-day-01",
                "Terminator 2: Judgment Day",
                "Koji model Terminatora štiti Johna Connora u filmu Terminator 2: Judgment Day?",
                "T-800",
                "T-1000",
                "ED-209"
            ),
            q1(
                "q1-light-machines-wargames-01",
                "WarGames",
                "Tko glumi Davida Lightmana u filmu WarGames?",
                "Matthew Broderick",
                "Emilio Estevez",
                "Anthony Michael Hall"
            ),
            q1(
                "q1-light-machines-robocop-02",
                "RoboCop",
                "U kojem se američkom gradu odvija radnja filma RoboCop?",
                "Detroitu",
                "Chicagu",
                "Bostonu"
            )
        ],

        dystopia: [
            q1(
                "q1-light-dystopia-mad-max-01",
                "Mad Max",
                "Tko glumi Maxa Rockatanskyja u filmu Mad Max?",
                "Mel Gibson",
                "Kevin Costner",
                "Burt Reynolds"
            ),
            q1(
                "q1-light-dystopia-planet-of-the-apes-01",
                "Planet of the Apes",
                "Tko glumi Georgea Taylora u filmu Planet of the Apes?",
                "Charlton Heston",
                "Paul Newman",
                "Marlon Brando"
            ),
            q1(
                "q1-light-dystopia-star-wars-01",
                "Star Wars",
                "Kako se zove svemirska postaja sposobna uništiti cijeli planet?",
                "Zvijezda smrti",
                "Millennium Falcon",
                "Baza Echo"
            ),
            q1(
                "q1-light-dystopia-fahrenheit-451-01",
                "Fahrenheit 451",
                "Što vatrogasci spaljuju u filmu Fahrenheit 451?",
                "Knjige",
                "Novac",
                "Računala"
            ),
            q1(
                "q1-light-dystopia-mad-max-02",
                "Mad Max",
                "Kako se zove vođa motociklističke bande u filmu Mad Max?",
                "Toecutter",
                "Lord Humungus",
                "Wez"
            ),
            q1(
                "q1-light-dystopia-highlander-01",
                "Highlander",
                "Na što je Connor MacLeod imun nakon što postane besmrtan?",
                "Na starenje i bolesti",
                "Na bol i ozljede",
                "Na vatru i hladnoću"
            ),
            q1(
                "q1-light-dystopia-they-live-01",
                "They Live",
                "Što posebne naočale otkrivaju u filmu They Live?",
                "Skrivene poruke i prerušene izvanzemaljce",
                "Budućnost osobe koja ih nosi",
                "Radioaktivne tragove"
            ),
            q1(
                "q1-light-dystopia-star-wars-02",
                "Star Wars",
                "Kako se zove krijumčar koji upravlja Millennium Falconom?",
                "Han Solo",
                "Luke Skywalker",
                "Lando Calrissian"
            )
        ],

        aliens: [
            q1(
                "q1-light-aliens-gremlins-01",
                "Gremlins",
                "Kako se zove malo stvorenje koje se ne smije hraniti nakon ponoći?",
                "Mogwai",
                "Ewok",
                "Morlock"
            ),
            q1(
                "q1-light-aliens-dune-01",
                "Dune",
                "Na pranetu Arrakis, iz filma Dune, nedostaje čega?",
                "Vode",
                "Ljudi",
                "Svjetlosti"
            ),
            q1(
                "q1-light-aliens-superman-01",
                "Superman",
                "Tko glumi Supermana u filmu iz 1978. godine?",
                "Christopher Reeve",
                "Jeff Goldblum",
                "Mel Gibson"
            ),
            q1(
                "q1-light-aliens-alien-01",
                "Alien",
                "Kako se zove svemirski teretni brod u filmu Alien?",
                "Nostromo",
                "Sulaco",
                "Prometheus"
            ),

            q1(
                "q1-light-aliens-predator-02",
                "Predator",
                "Kako se zove vođa elitnog tima u filmu Predator?",
                "Dutch",
                "Dillon",
                "Mac"
            ),

            q1(
                "q1-light-aliens-superman-02",
                "Superman",
                "Kako se zove Supermanov rodni planet?",
                "Krypton",
                "Vulcan",
                "Gallifrey"
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
                "q1-light-aliens-close-encounters-of-the-third-kind-01",
                "Close Encounters of the Third Kind",
                "Kako se zove lik kojeg Richard Dreyfuss glumi u filmu Close Encounters of the Third Kind?",
                "Roy Neary",
                "Elliott Taylor",
                "David Bowman"
            )
        ]
    },

    medium: {
        machines: [
            q1(
                "q1-medium-machines-back-to-the-future-01",
                "Back to the Future",
                "Kako se zove Martyjeva djevojka u 'Back to the Future'?",
                "Jennifer",
                "Amanda",
                "Pamela"
            ),
            q1(
                "q1-medium-machines-dune-01",
                "Dune",
                "Kako se zove letjelica s pokretnim krilima koja se koristi na Arrakisu?",
                "Ornitopter",
                "Disk",
                "Cube"
            ),
            q1(
                "q1-medium-machines-2001-a-space-odyssey-01",
                "2001: A Space Odyssey",
                "Koga HAL sabotira?",
                "Franka i Davea",
                "Cindy i Georgea",
                "Boba i Julesa"
            ),
            q1(
                "q1-medium-machines-2001-a-space-odyssey-01",
                "2001: A Space Odyssey",
                "Prema kojem planetu putuje brod Discovery One?",
                "Jupiteru",
                "Saturnu",
                "Marsu"
            ),
            q1(
                "q1-medium-machines-blade-runner-01",
                "Blade Runner",
                "Koja korporacija proizvodi replikante u filmu Blade Runner?",
                "Tyrell Corporation",
                "OCP",
                "Cyberdyne Systems"
            ),
            q1(
                "q1-medium-machines-back-to-the-future-03",
                "Back to the Future",
                "Koji automobil Doc Brown pretvara u vremeplov?",
                "DeLorean DMC-12",
                "Pontiac Firebird",
                "Ford Mustang"
            ),
            q1(
                "q1-medium-machines-robocop2-01",
                "Robocop 2",
                "Kako se zove droga koja vlada ulicama Detroita u filmu RoboCop 2?",
                "Nuke",
                "Wipe",
                "Heaven"
            ),
            q1(
                "q1-medium-machines-blade-runner-02",
                "Blade Runner",
                "Koliko je odbjeglih reprikanata u filmu Blade Runner?",
                "6",
                "4",
                "5"
            ),
            q1(
                "q1-medium-machines-tron-02",
                "Tron",
                "Kako se zove programer kojeg glumi Jeff Bridges u filmu Tron?",
                "Kevin Flynn",
                "Alan Bradley",
                "Ed Dillinger"
            ),
            q1(
                "q1-medium-machines-wargames-01",
                "WarGames",
                "Kako se zove vojno superračunalo koje David slučajno pokreće?",
                "WOPR",
                "HAL 9000",
                "MCP"
            )
        ],

        dystopia: [
            q1(
                "q1-medium-dystopia-fahrenheit-451-01",
                "Fahrenheit 451",
                "Po čemu je neobična uvodna špica filma Fahrenheit 451?",
                "Imena glumaca i ekipe izgovaraju se umjesto da budu ispisana",
                "Imena su prikazana na novinama koje odmah izgore",
                "Film nema uvodnu špicu"
            ),
            q1(
                "q1-medium-dystopia-planet-of-the-apes-01",
                "Planet of the Apes",
                "Kako se zove nijema žena koju Taylor uzima za suputnicu?",
                "Nova",
                "Zira",
                "Lara"
            ),
            q1(
                "q1-medium-dystopia-a-clockwork-orange-01",
                "A Clockwork Orange",
                "Kako se zove glavni lik filma A Clockwork Orange?",
                "Alex DeLarge",
                "Guy Montag",
                "Logan 5"
            ),
            q1(
                "q1-medium-dystopia-fahrenheit-451-02",
                "Fahrenheit 451",
                "Kako se zove mlada susjeda koja potiče Montaga da preispita svoj život?",
                "Clarisse",
                "Linda",
                "Nova"
            ),
            q1(
                "q1-medium-dystopia-mad-max-01",
                "Mad Max",
                "Kako se naziva Maxov crni automobil visokih performansi?",
                "Pursuit Special",
                "Interceptor One",
                "Road Warrior"
            ),
            q1(
                "q1-medium-dystopia-judge-dredd-01",
                "Judge Dredd",
                "Kako se zove ratni robot kojeg Rico aktivira u filmu Judge Dredd?",
                "ABC Warrior",
                "ED-209",
                "T-800"
            ),
            q1(
                "q1-medium-dystopia-they-live-01",
                "They Live",
                "Koji bivši hrvač glumi glavnog lika Nadu?",
                "Roddy Piper",
                "Jesse Ventura",
                "Hulk Hogan"
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
                "q1-medium-dystopia-mad-max-2-the-road-warrior-01",
                "Mad Max 2: The Road Warrior",
                "Kako se zove maskirani vođa bande koja opsjeda rafineriju?",
                "Lord Humungus",
                "Toecutter",
                "Immortan Joe"
            ),
            q1(
                "q1-medium-dystopia-planet-of-the-apes-03",
                "Planet of the Apes",
                "Koji kip Taylor ugleda na kraju filma?",
                "Kip slobode",
                "Kip Lincolna",
                "Kolosa s Rodosa"
            )
        ],

        aliens: [
            q1(
                "q1-medium-aliens-alien-01",
                "Alien",
                "Koji se član posade prvi budi iz hibernacije u filmu Alien?",
                "Gilbert Kane",
                "Arthur Dallas",
                "Dennis Parker"
            ),
            q1(
                "q1-medium-aliens-predator-01",
                "Predator",
                "Koliko članova ima Dutchov tim, ne računajući Dutcha, Annu i Dillona?",
                "6",
                "5",
                "7"
            ),
            q1(
                "q1-medium-aliens-aliens-01",
                "Aliens",
                "Koga Michael Biehn glumi u filmu Aliens?",
                "Dwaynea Hicksa",
                "Williama Gormana",
                "Williama Hudsona"
            ),
            q1(
                "q1-medium-aliens-star-wars-01",
                "Star Wars",
                "Tko je pucao prvi u originalnoj verziji filma Star Wars?",
                "Han Solo",
                "Greedo",
                "Pucali su istodobno"
            ),
            q1(
                "q1-medium-aliens-aliens-02",
                "Aliens",
                "Na kojem se planetu ili mjesecu nalazi kolonija u filmu Aliens?",
                "LV-426",
                "Fiorina 161",
                "Altair IV"
            ),
            q1(
                "q1-medium-aliens-gremlins-01",
                "Gremlins",
                "Tko glumi Billyja Peltzera u filmu Gremlins?",
                "Zach Galligan",
                "Corey Feldman",
                "Judge Reinhold"
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
                "q1-medium-aliens-star-wars-02",
                "Star Wars",
                "Tko glumi ulogu Obi-Wan Kenobija u Star Wars?",
                "Alec Guinness",
                "Peter O'Toole",
                "Richard Harris"
            ),
            q1(
                "q1-medium-aliens-star-wars-02",
                "Star Wars",
                "Tko glumi princezu Leiu u originalnom filmu Star Wars?",
                "Carrie Fisher",
                "Margot Kidder",
                "Karen Allen"
            ),
            q1(
                "q1-medium-aliens-dune-01",
                "Dune",
                "Kako se zove pustinjski planet na kojem se proizvodi začin?",
                "Arrakis",
                "Caladan",
                "Giedi Prime"
            )
        ]
    },

    hard: {
        machines: [
            q1(
                "q1-hard-machines-back-to-the-future-01",
                "Back to the Future",
                "Koji je najvažniji dan u filmu 'Back to the Future'?",
                "5. Studenog 1955",
                "5. Studenog 1985",
                "12. Studenog 1955"
            ),
            q1(
                "q1-hard-machines-blade-runner-01",
                "Blade Runner",
                "Kojoj seriji replikanta pripada Roy Batty?",
                "Nexus-6",
                "Nexus-5",
                "Nexus-8"
            ),
            q1(
                "q1-medium-machines-tron-01",
                "Tron",
                "Što u filmu Tron znači kratica MCP?",
                "Master Control Program",
                "Military Cybernetic Protocol",
                "Mainframe Core Processor"
            ),
            q1(
                "q1-hard-machines-2001-a-space-odyssey-01",
                "2001: A Space Odyssey",
                "Koji astronaut prolazi kroz Zvjezdana vrata na kraju filma 2001: A Space Odyssey?",
                "Dave Bowman",
                "Frank Poole",
                "Heywood Floyd"
            ),
            q1(
                "q1-hard-machines-blade-runner-02",
                "Blade Runner",
                "Kako se zove replikantica koju Deckard upoznaje u Tyrellovoj zgradi?",
                "Rachael",
                "Pris",
                "Zhora"
            ),
            q1(
                "q1-hard-machines-back-to-the-future-02",
                "Back to the Future",
                "Kolika je električna snaga potrebna vremenskom stroju DeLorean?",
                "1,21 gigavat",
                "88 megavata",
                "3,6 gigavata"
            ),
            q1(
                "q1-hard-machines-terminator-2-judgment-day-02",
                "Terminator 2: Judgment Day",
                "Kako se zove znanstvenik čiji će rad dovesti do nastanka Skyneta?",
                "Miles Dyson",
                "Peter Silberman",
                "Earl Boen"
            ),
            q1(
                "q1-hard-machines-tron-01",
                "Tron",
                "Kako se zove Flynnova izvorna kopija-program koji se kasnije pojavljuje i u nastavku?",
                "CLU",
                "Sark",
                "Ram"
            )
        ],

        dystopia: [
            q1(
                "q1-hard-dystopia-mad-max-01",
                "Mad Max",
                "Oznake na vozilima MFP u 'Mad Max' znače:",
                "Main Force Patrol",
                "krivi odgovor",
                "Motorized Federal Police"
            ),
            q1(
                "q1-hard-dystopia-planet-of-the-apes-01",
                "Planet of the Apes",
                "Ti tražiš da ti pomognem? Čovjek je zao! Sposoban ni za što drugo osim za uništavanje! - kaže tko?",
                "dr. Zaius",
                "dr. Cornelius",
                "dr. Honorius"
            ),
            q1(
                "q1-hard-dystopia-a-clockwork-orange-01",
                "A Clockwork Orange",
                "Kako se zove izmišljeni sleng kojim Alex i njegovi prijatelji govore?",
                "Nadsat",
                "Newspeak",
                "Cityspeak"
            ),
            q1(
                "q1-hard-dystopia-highlander-01",
                "Highlander",
                "Tko je iskovao katanu koju Ramírez ostavlja Connoru MacLeodu?",
                "Masamune",
                "Hattori Hanzō",
                "Muramasa"
            ),
            q1(
                "q1-medium-dystopia-a-clockwork-orange-01",
                "A Clockwork Orange",
                "Kako se zove terapija kojom vlast pokušava preodgojiti Alexa?",
                "Ludovicova tehnika",
                "Metoda Carousel",
                "Program Recall"
            ),
            q1(
                "q1-hard-dystopia-planet-of-the-apes-02",
                "Planet of the Apes",
                "Što kaže Taylor prvi put nakon što ga zarobe majmuni?",
                "Makni svoje smrdljive šape s mene, ti prokleti prljavi majmune!",
                "Makni svoje prljave šape s mene, ti prokleti prljavi majmune!",
                "Makni svoje prljave šape s mene, ti prokleti smrdljivi majmune!"
            ),
            q1(
                "q1-hard-dystopia-total-recall-01",
                "Total Recall",
                "Kako se zove tvrtka koja Quaidu ugrađuje umjetna sjećanja?",
                "Rekall",
                "Tyrell",
                "OCP"
            ),
            q1(
                "q1-hard-dystopia-planet-of-the-apes-03",
                "Planet of the Apes",
                "Koji predmet u pećini dokazuje da je ljudska civilizacija postojala prije majmunske?",
                "Lutka koja izgovara riječ 'Mama'",
                "Metalna pločica s datumom",
                "Pokvareni televizor"
            )
        ],

        aliens: [
            q1(
                "q1-medium-mythic-flash-gordon-01",
                "Flash Gordon",
                "Kako se zove kći Minga Nemilosrdnog u filmu Flash Gordon?",
                "Princeza Aura",
                "Dale Arden",
                "Princeza Leia"
            ),
            q1(
                "q1-hard-aliens-close-encounters-of-the-third-kind-01",
                "Close Encounters of the Third Kind",
                "Koja se prirodna formacija stalno pojavljuje u vizijama glavnog lika?",
                "Devils Tower",
                "Mount Rushmore",
                "Monument Valley"
            ),
            q1(
                "q1-light-aliens-et-the-extra-terrestrial-01",
                "E.T. the Extra-Terrestrial",
                "Kako se zove dječak koji se sprijatelji s E.T.-jem?",
                "Elliott",
                "Michael",
                "Billy"
            ),

            q1(
                "q1-hard-aliens-startrek2-01",
                "Star Trek II",
                "Tko glumi Khana u filmu Star Trek II: The Wrath of Khan?",
                "Ricardo Montalbán",
                "Christopher Lloyd",
                "Malcolm McDowell"
            ),

            q1(
                "q1-hard-mythic-flash-gordon-01",
                "Flash Gordon",
                "Kako se zove šumsko kraljevstvo kojim vlada princ Barin?",
                "Arboria",
                "Mongo",
                "Mingo City"
            ),
            q1(
                "q1-hard-aliens-close-encounters-of-the-third-kind-02",
                "Close Encounters of the Third Kind",
                "Koliko tonova čini glavni glazbeni motiv komunikacije s izvanzemaljcima?",
                "Pet",
                "Tri",
                "Sedam"
            ),
            q1(
                "q1-hard-aliens-superman-01",
                "Superman",
                "Tko glumi Lexa Luthora u filmu Superman iz 1978.?",
                "Gene Hackman",
                "Ned Beatty",
                "Terence Stamp"
            ),
            q1(
                "q1-hard-aliens-dune-02",
                "Dune",
                "Koja je velika plemićka kuća glavni neprijatelj kuće Atreides?",
                "Harkonnen",
                "Corrino",
                "Ginaz"
            )
        ]
    }
};