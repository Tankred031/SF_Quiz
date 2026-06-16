/* =========================================
   LEVEL 2 — SLABO POZNATI FILMOVI
   78 pitanja: Easy 24, Medium 30, Hard 24
========================================= */

const q2 = (
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

const questions2 = {
    light: {

        machines: [
            q2(
                "q2-light-machines-westworld-01",
                "Westworld",
                "Koja tri tematska svijeta gosti mogu odabrati u filmu Westworld?",
                "Roman World, Medieval World i Westworld",
                "Roman World, Medieval World i Spa World",
                "Roman World, Westworld i Futureworld"
            ),

            q2(
                "q2-light-machines-demon-seed-01",
                "Demon Seed",
                "Kako se zove umjetna inteligencija u filmu Demon Seed?",
                "Proteus IV",
                "HAL 9000",
                "Joshua"
            ),
            q2(
                "q2-light-machines-stepford-wives-01",
                "The Stepford Wives",
                "Što se događa ženama u gradiću Stepford?",
                "Zamjenjuju ih robotske kopije",
                "Šalju ih u svemirsku koloniju",
                "Pretvaraju ih u kiborge"
            ),
            q2(
                "q2-light-machines-the-fly-01",
                "The Fly",
                "Kako se zovu komore koje Seth Brundle koristi za teleportaciju u filmu The Fly?",
                "Telepodovi",
                "Krio-komore",
                "Transmat kapsule"
            ),
            q2(
                "q2-light-machines-robocop-01",
                "RoboCop",
                "Što znači kratica OCP u filmu RoboCop?",
                "Omni Consumer Products",
                "Officer Cyber Program",
                "Orion Corporate Partnership"
            ),
            q2(
                "q2-light-machines-westworld-02",
                "Westworld",
                "Tko glumi neumoljivog revolveraša androida u filmu Westworld?",
                "Yul Brynner",
                "Charles Bronson",
                "Lee Van Cleef"
            ),
            q2(
                "q2-light-machines-outland-01",
                "Outland",
                "Gdje se nalazi rudarska kolonija u filmu Outland?",
                "Na Jupiterovu mjesecu Iou",
                "Na Marsu",
                "Na Saturnovu mjesecu Titanu"
            ),

            q2(
                "q2-light-machines-stepford-wives-02",
                "The Stepford Wives",
                "Kako se zove glavna junakinja filma The Stepford Wives?",
                "Joanna Eberhart",
                "Susan Harris",
                "Bobbie Markowe"
            ),
        ],



        dystopia: [
            q2(
                "q2-easy-dystopia-escape-from-new-york-01",
                "Escape from New York",
                "U kojem se filmu pojavljuje Snake Plissken?",
                "Escape from New York",
                "Universal Soldier",
                "The Running Man"
            ),
            q2(
                "q2-easy-dystopia-logans-run-01",
                "Logan's Run",
                "U kojem filmu stanovnici futurističkog grada moraju umrijeti kada navrše 30 godina?",
                "Logan's Run",
                "Soylent Green",
                "Futureworld"
            ),
            q2(
                "q2-easy-dystopia-outland-01",
                "Outland",
                "Na kojem se Jupiterovu mjesecu odvija radnja filma Outland?",
                "Io",
                "Kalista",
                "Europa"
            ),
            q2(
                "q2-easy-dystopia-masters-of-the-universe-01",
                "Masters of the Universe",
                "Tko glumi He-Mana u filmu Masters of the Universe?",
                "Dolph Lundgren",
                "Arnold Schwarzenegger",
                "Lou Ferrigno"
            ),
            q2(
                "q2-easy-dystopia-soylent-green-01",
                "Soylent Green",
                "Koji glumac tumači detektiva Roberta Thorna u filmu Soylent Green?",
                "Charlton Heston",
                "Roddy McDowall",
                "Michael York"
            ),
            q2(
                "q2-easy-dystopia-the-running-man-01",
                "The Running Man",
                "Tko glumi Bena Richardsa u filmu The Running Man?",
                "Arnold Schwarzenegger",
                "Sylvester Stallone",
                "Dolph Lundgren"
            ),
            q2(
                "q2-easy-dystopia-escape-from-new-york-02",
                "Escape from New York",
                "Kako na Snake Plissken dolazi na Manhattan?",
                "Jedrilicom",
                "Padobranom",
                "Helikopterom"
            ),
            q2(
                "q2-easy-dystopia-the-omega-man-01",
                "The Omega Man",
                "Koji glumac tumači posljednjeg znanstvenika Roberta Nevillea u filmu The Omega Man?",
                "Charlton Heston",
                "Vincent Price",
                "Richard Burton"
            )
        ],

        aliens: [
            q2(
                "q2-easy-aliens-forbidden-planet-01",
                "Forbidden Planet",
                "Kako se zove kći doktora Edwarda Morbiusa?",
                "Altaira",
                "Eve",
                "Annabelle"
            ),
            q2(
                "q2-easy-aliens-the-last-starfighter-01",
                "The Last Starfighter",
                "Tko glumi Alexa Rogana u filmu The Last Starfighter?",
                "Lance Guest",
                "Liam Neeson",
                "Nigel Terry"
            ),
            q2(
                "q2-easy-aliens-the-abyss-01",
                "The Abyss",
                "Koji je od ovih filmova režirao James Cameron?",
                "The Abyss",
                "RoboCop",
                "Alien"
            ),
            q2(
                "q2-easy-aliens-the-thing-01",
                "The Thing",
                "Tko glumi R. J. MacReadyja u filmu The Thing iz 1982. godine?",
                "Kurt Russell",
                "Jeff Bridges",
                "Nick Nolte"
            ),
            q2(
                "q2-easy-aliens-invasion-of-the-body-snatchers-01",
                "Invasion of the Body Snatchers",
                "Kako izvanzemaljci zamjenjuju ljude u filmu Invasion of the Body Snatchers?",
                "Stvaraju njihove kopije u velikim mahunama",
                "Pretvaraju ih ugrizom",
                "Ugrađuju im metalne čipove"
            ),
            q2(
                "q2-easy-aliens-the-fly-01",
                "The Fly",
                "Tko glumi znanstvenika Setha Brundlea u filmu The Fly iz 1986.?",
                "Jeff Goldblum",
                "Christopher Walken",
                "William Hurt"
            ),
            q2(
                "q2-light-aliens-the-abyss-02",
                "The Abyss",
                "Gdje se najvećim dijelom odvija radnja filma The Abyss?",
                "U podvodnoj istraživačkoj postaji",
                "Na svemirskoj postaji",
                "U podzemnom vojnom bunkeru"
            ),
            q2(
                "q2-light-aliens-forbidden-planet-02",
                "Forbidden Planet",
                "Kako se zove planet na kojem se odvija radnja filma Forbidden Planet?",
                "Altair IV",
                "LV-426",
                "Arrakis"
            ),
        ]
    },

    medium: {

        machines: [
            q2(
                "q2-medium-machines-westworld-01",
                "Westworld",
                "Kako se zove korporacija koja upravlja zabavnim parkom?",
                "Delos",
                "Tyrell",
                "OCP"
            ),
            q2(
                "q2-medium-machines-innerspace-02",
                "Innerspace",
                "Koga je Tuck Pendleton prvotno trebao istraživati nakon minijaturizacije?",
                "Laboratorijskog zeca",
                "Čovjeka dobrovoljca",
                "Dresiranog majmuna"
            ),
            q2(
                "q2-medium-machines-battle-beyond-the-stars-01",
                "Battle Beyond the Stars",
                "Kako se zove svemirski brod kojim Shad traži ratnike za obranu svog planeta?",
                "Nell",
                "Gunstar",
                "Trimaxion"
            ),
            q2(
                "q2-medium-machines-demon-seed-01",
                "Demon Seed",
                "Kako se zove žena koju Proteus IV zarobi u kući?",
                "Susan Harris",
                "Joanna Eberhart",
                "Sarah Connor"
            ),
            q2(
                "q2-medium-machines-stepford-wives-01",
                "The Stepford Wives",
                "Kako se zove glavna junakinja filma The Stepford Wives?",
                "Joanna Eberhart",
                "Susan Harris",
                "Rachael Tyrell"
            ),
            q2(
                "q2-medium-machines-innerspace-01",
                "Innerspace",
                "U čije tijelo slučajno završi minijaturizirani pilot Tuck Pendleton?",
                "Jacka Puttera",
                "Setha Brundlea",
                "Alexa Murphyja"
            ),
            q2(
                "q2-medium-machines-terminator-02",
                "The Terminator",
                "Kako se zove obrambena računalna mreža koja pokreće nuklearni rat?",
                "Skynet",
                "WOPR",
                "MCP"
            ),
            q2(
                "q2-medium-machines-star-trek-the-motion-picture-01",
                "Star Trek: The Motion Picture",
                "Kako se zove golemi strojni entitet koji se približava Zemlji?",
                "V'Ger",
                "Genesis",
                "Nomad"
            ),
            q2(
                "q2-medium-machines-short-circuit-01",
                "Short Circuit",
                "Kako se zove vojni robot koji nakon udara munje razvije svijest?",
                "Number 5",
                "ED-209",
                "Proteus IV"
            ),
            q2(
                "q2-medium-machines-robocop-02",
                "RoboCop",
                "Koja kompanija upravlja projektom RoboCop?",
                "OCP",
                "Cyberdyne Systems",
                "Tyrell Corporation"
            )


        ],

        dystopia: [
            q2(
                "q2-medium-dystopia-escape-from-new-york-01",
                "Escape from New York",
                "Što je Snake dobio kako bi ga prisilili da izvrši misiju?",
                "Otrovnu injekciju",
                "Mikrofilm",
                "Eksploziv"
            ),
            q2(
                "q2-medium-dystopia-scanners-01",
                "Scanners",
                "Koju posebnu sposobnost imaju scanneri u filmu Scanners?",
                "Telepatiju i telekinetičku kontrolu",
                "Putovanje kroz vrijeme",
                "Promjenu fizičkog oblika"
            ),
            q2(
                "q2-medium-dystopia-rollerball-02",
                "Rollerball",
                "Za koji grad igra Jonathan E. u filmu Rollerball?",
                "Houston",
                "New York",
                "Chicago"
            ),

            q2(
                "q2-medium-dystopia-beneath-the-planet-of-the-apes-01",
                "Beneath the Planet of the Apes",
                "Tko dolazi u potragu za Taylorom u filmu Beneath the Planet of the Apes?",
                "John Brent",
                "John Landon",
                "John Dodge"
            ),
            q2(
                "q2-medium-dystopia-outland-01",
                "Outland",
                "Tko pomaže O'Nielu u filmu Outland?",
                "Dr. Lazarus",
                "Narednik Montone",
                "Narednik Ballard"
            ),
            q2(
                "q2-medium-dystopia-masters-of-the-universe-01",
                "Masters of the Universe",
                "Tko glumi Evil-Lyn u filmu Masters of the Universe?",
                "Meg Foster",
                "Bridget Fonda",
                "Courteney Cox"
            ),
            q2(
                "q2-medium-dystopia-logans-run-01",
                "Logan's Run",
                "Kako se zove ceremonija u kojoj stanovnici pokušavaju biti obnovljeni?",
                "Carousel",
                "Sanctuary",
                "Renewal Day"
            ),
            q2(
                "q2-medium-dystopia-soylent-green-01",
                "Soylent Green",
                "Koje se godine odvija radnja filma Soylent Green?",
                "2022.",
                "1999.",
                "2049."
            ),
            q2(
                "q2-medium-dystopia-the-running-man-01",
                "The Running Man",
                "Kako se zove voditelj televizijskog natjecanja The Running Man?",
                "Damon Killian",
                "Richard Dawson",
                "Fireball"
            ),
            q2(
                "q2-medium-dystopia-the-omega-man-01",
                "The Omega Man",
                "Kako se zove skupina zaraženih mutanata u filmu The Omega Man?",
                "The Family",
                "The Others",
                "The Night People"
            )
        ],

        aliens: [
            q2(
                "q2-medium-aliens-flight-of-the-navigator-01",
                "Flight of the Navigator",
                "Kako se zove računalo koje upravlja svemirskim brodom u filmu Flight of the Navigator?",
                "Max",
                "Centauri",
                "Joshua"
            ),
            q2(
                "q2-medium-aliens-forbidden-planet-01",
                "Forbidden Planet",
                "Što kuhar traži od Robbyja u filmu Forbidden Planet?",
                "Pravu stvar",
                "Zabranjeno voće",
                "Posebne začine"
            ),
            q2(
                "q2-medium-aliens-the-abyss-01",
                "The Abyss",
                "Kako se zove potonula podmornica u filmu The Abyss?",
                "USS Montana",
                "USS Memphis",
                "USS Arizona"
            ),

            q2(
                "q2-medium-aliens-forbidden-planet-02",
                "Forbidden Planet",
                "Što je uništilo Krellove?",
                "Njihove emocije",
                "Meteor iz svemira",
                "Virus iz laboratorija"
            ),
            q2(
                "q2-medium-aliens-the-thing-01",
                "The Thing",
                "Kako se zove baza na Antarktici u kojoj se odvija radnja filma The Thing?",
                "Outpost 31",
                "Station 12",
                "Base Alpha"
            ),
            q2(
                "q2-medium-aliens-invasion-of-the-body-snatchers-01",
                "Invasion of the Body Snatchers",
                "Tko glumi Matthewa Bennella u verziji filma iz 1978. godine?",
                "Donald Sutherland",
                "Leonard Nimoy",
                "Jeff Goldblum"
            ),
            q2(
                "q2-medium-aliens-the-fly-01",
                "The Fly",
                "Kako se zove novinarka koju glumi Geena Davis?",
                "Veronica Quaife",
                "Tawny Kitaen",
                "Sarah Bowman"
            ),
            q2(
                "q2-medium-aliens-star-trek-ii-01",
                "Star Trek II: The Wrath of Khan",
                "Kako se zove projekt koji može preoblikovati beživotni planet?",
                "Genesis",
                "V'Ger",
                "Prometheus"
            ),
            q2(
                "q2-medium-aliens-flight-of-the-navigator-02",
                "Flight of the Navigator",
                "Koliko godina u budućnosti David stigne nakon nestanka?",
                "Osam godina",
                "Pet godina",
                "Dvanaest godina"
            ),

            q2(
                "q2-medium-aliens-the-last-starfighter-01",
                "The Last Starfighter",
                "Kako se zove izvanzemaljac koji regrutira Alexa Rogana?",
                "Centauri",
                "Grig",
                "Xur"
            )
        ]
    },
    hard: {
        machines: [
            q2(
                "q2-hard-machines-hardware-01",
                "Hardware",
                "Kako se zove samopopravljajući vojni robot u filmu Hardware?",
                "M.A.R.K. 13",
                "ED-209",
                "Number 5"
            ),
            q2(
                "q2-hard-machines-runaway-01",
                "Runaway",
                "Kako se zove policajac specijaliziran za neispravne i opasne robote u filmu Runaway?",
                "Jack Ramsay",
                "Alex Murphy",
                "Rick Deckard"
            ),
            q2(
                "q2-hard-machines-demon-seed-01",
                "Demon Seed",
                "Kako se zove znanstvenik koji je stvorio Proteusa IV?",
                "Alex Harris",
                "Charles Forbin",
                "Miles Dyson"
            ),
            q2(
                "q2-hard-machines-saturn-3-01",
                "Saturn 3",
                "Kako se zove robot kojeg Benson sastavlja na postaji Saturn 3?",
                "Hector",
                "Maximilian",
                "Box"
            ),
            q2(
                "q2-hard-machines-stepford-wives-01",
                "The Stepford Wives",
                "Kako se zove predsjednik Stepford Men's Associationa?",
                "Dale Coba",
                "Walter Eberhart",
                "Bobbie Markowe"
            ),
            q2(
                "q2-hard-machines-maximum-overdrive-02",
                "Maximum Overdrive",
                "Kako se zove kompanija čiji natpis nosi prikolica glavnog kamiona u filmu Maximum Overdrive?",
                "Happy Toyz",
                "Green Goblin Transport",
                "Dixie Boy Freight"
            ),
            q2(
                "q2-hard-machines-robocop-01",
                "RoboCop",
                "Koja direktiva sprečava RoboCopa da djeluje protiv viših članova OCP-a?",
                "Direktiva 4",
                "Direktiva 2",
                "Direktiva 7"
            ),
            q2(
                "q2-hard-machines-colossus-the-forbin-project-01",
                "Colossus: The Forbin Project",
                "Kako se zove sovjetsko superračunalo s kojim Colossus uspostavlja vezu?",
                "Guardian",
                "Proteus IV",
                "Joshua"
            ),
        ],
        dystopia: [
            q2(
                "q2-hard-dystopia-night-of-the-comet-01",
                "Night of the Comet",
                "Gdje Regina provede noć prolaska kometa i tako izbjegne njegov smrtonosni učinak?",
                "U metalom obloženoj projekcijskoj kabini",
                "U podzemnom skloništu",
                "U vojnom laboratoriju"
            ),

            q2(
                "q2-hard-dystopia-logans-run-01",
                "Logan's Run",
                "Kako se zove računalo koje upravlja gradom i ispituje Logana?",
                "The Thinker",
                "Central Computer",
                "Sanctuary Control"
            ),
            q2(
                "q2-hard-dystopia-outland-01",
                "Outland",
                "Kako se zove korporacija koja upravlja rudarskom kolonijom na Iou?",
                "Con-Amalgamate",
                "Weyland-Yutani",
                "Omni Consumer Products"
            ),
            q2(
                "q2-hard-dystopia-soylent-green-01",
                "Soylent Green",
                "Kako se zove stariji prijatelj i pomoćnik detektiva Thorna?",
                "Sol Roth",
                "Tab Fielding",
                "William Simonson"
            ),
            q2(
                "q2-hard-dystopia-the-running-man-01",
                "The Running Man",
                "Koji stalker koristi bacač plamena u emisiji The Running Man?",
                "Fireball",
                "Subzero",
                "Buzzsaw"
            ),
            q2(
                "q2-hard-dystopia-thx-1138-01",
                "THX 1138",
                "Kako glasi oznaka žene koja prestane davati THX-u propisane lijekove?",
                "LUH 3417",
                "SEN 5241",
                "SRT 5752"
            ),
            q2(
                "q2-hard-dystopia-the-omega-man-01",
                "The Omega Man",
                "Kako se zove vođa skupine The Family?",
                "Matthias",
                "Zachary",
                "Dutch"
            ),
            q2(
                "q2-hard-dystopia-beneath-the-planet-of-the-apes-01",
                "Beneath the Planet of the Apes",
                "Što mutirani ljudi štuju ispod ruševina New Yorka?",
                "Nuklearnu bombu",
                "Kip slobode",
                "Svemirski brod"
            )
        ],

        aliens: [
            q2(
                "q2-hard-aliens-heavy-metal-01",
                "Heavy Metal",
                "Kako se zove zlokobna zelena kugla koja povezuje priče filma Heavy Metal?",
                "Loc-Nar",
                "Taarna",
                "Nell"
            ),
            q2(
                "q2-hard-aliens-battle-beyond-the-stars-01",
                "Battle Beyond the Stars",
                "Kako se zove svemirski brod kojim Shad traži ratnike za obranu svog planeta?",
                "Nell",
                "Gunstar",
                "Trimaxion"
            ),
            q2(
                "q2-hard-aliens-heavy-metal-03",
                "Heavy Metal — Den",
                "Kako se zove mladić koji se nakon prijenosa u drugi svijet pretvara u snažnog junaka Dena?",
                "David Ellis Norman",
                "Harry Canyon",
                "Hanover Fiste"
            ),

            q2(
                "q2-hard-aliens-dreamscape-01",
                "Dreamscape",
                "Kako se zove vidovnjak kojeg Dennis Quaid glumi u filmu Dreamscape?",
                "Alex Gardner",
                "Tommy Ray Glatman",
                "Paul Novotny"
            ),

            q2(
                "q2-hard-aliens-the-dead-zone-01",
                "The Dead Zone",
                "Kako se zove političar čiju zastrašujuću budućnost Johnny Smith vidi dodirom?",
                "Greg Stillson",
                "Roger Stuart",
                "Frank Dodd"
            ),

            q2(
                "q2-hard-aliens-return-of-the-jedi-01",
                "Return of the Jedi",
                "Kako se zove stvorenje kojem Jabba namjerava baciti svoje zarobljenike?",
                "Sarlacc",
                "Rancor",
                "Carkoon"
            ),
            q2(
                "q2-hard-aliens-heavy-metal-07",
                "Heavy Metal — So Beautiful & So Dangerous",
                "Kako se zovu dvojica izvanzemaljskih pilota koji konzumiraju Plutonian Nyborg?",
                "Edsel i Zeke",
                "Den i Harry",
                "Sternn i Fiste"
            ),
            q2(
                "q2-hard-aliens-heavy-metal-08",
                "Heavy Metal — Taarna",
                "Tko je Taarna?",
                "Posljednja ratnica naroda Taarakian",
                "Kraljica svemirskih vampira",
                "Androidska čuvarica Loc-Nara"
            )
        ]
    }
};



