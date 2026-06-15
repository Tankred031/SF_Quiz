/* =========================================
   LEVEL 3 — NEPOZNATI / OPSKURNI FILMOVI
   90 pitanja: Light 24, Medium 30, Hard 36
========================================= */

const q3 = (
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

const questions3 = {
    light: {
        machines: [
            q3(
                "q3-light-machines-futureworld-01",
                "Futureworld",
                "Koja je glavna tema filma Futureworld?",
                "Korporacijska zavjera u kojoj se ljudi zamjenjuju androidima",
                "Pobuna androida izazvana slučajnim kvarom",
                "Povezivanje androida u kolektivnu svijest"
            ),
            q3(
                "q3-light-machines-demon-seed-01",
                "Demon Seed",
                "Tko glumi Susan Harris u filmu Demon Seed?",
                "Julie Christie",
                "Blythe Danner",
                "Barbara Carrera"
            ),
            q3(
                "q3-light-machines-futureworld-02",
                "Futureworld",
                "Film Futureworld nastavak je kojeg filma?",
                "Westworlda",
                "Rollerballa",
                "Soylent Greena"
            ),
            q3(
                "q3-light-machines-moon-44-01",
                "Moon 44",
                "Što se prvenstveno vadi na postaji Moon 44?",
                "Gorivo",
                "Začin",
                "Kristali dilitija"
            ),
            q3(
                "q3-light-machines-videodrome-01",
                "Videodrome",
                "Kako se zove televizijski direktor kojeg glumi James Woods?",
                "Max Renn",
                "Brian O'Blivion",
                "Barry Convex"
            ),
            q3(
                "q3-light-machines-innerspace-01",
                "Innerspace",
                "Tko je režirao film Innerspace?",
                "Joe Dante",
                "John Carpenter",
                "David Cronenberg"
            ),
            q3(
                "q3-light-machines-the-philadelphia-experiment-01",
                "The Philadelphia Experiment",
                "Kako se zove razarač povezan s eksperimentom?",
                "USS Eldridge",
                "USS Montana",
                "USS Nimitz"
            ),
            q3(
                "q3-light-machines-event-horizon-01",
                "Event Horizon",
                "Kako se zove nestali eksperimentalni svemirski brod?",
                "Event Horizon",
                "Lewis and Clark",
                "Nostromo"
            )
        ],

        dystopia: [
            q3(
                "q3-light-dystopia-shape-of-things-to-come-01",
                "H. G. Wells' The Shape of Things to Come",
                "Koji planet Omus preuzima kako bi ucjenjivao druge kolonije?",
                "Delta 3",
                "Mongo",
                "Altair IV"
            ),
            q3(
                "q3-light-dystopia-a-boy-and-his-dog-01",
                "A Boy and His Dog",
                "Kako se zove mladić kojeg prati telepatski pas?",
                "Vic",
                "Shad",
                "Zac"
            ),
            q3(
                "q3-light-dystopia-escape-from-la-01",
                "Escape from L.A.",
                "Koji se antiheroj vraća kao glavni lik u filmu Escape from L.A.?",
                "Snake Plissken",
                "Max Rockatansky",
                "Harley Stone"
            ),
            q3(
                "q3-light-dystopia-shape-of-things-to-come-02",
                "H. G. Wells' The Shape of Things to Come",
                "Kako se zove robotski diktator planeta Delta 3?",
                "Omus",
                "Sador",
                "Proteus"
            ),
            q3(
                "q3-light-dystopia-night-of-the-comet-01",
                "Night of the Comet",
                "Kako se zovu dvije sestre koje prežive prolazak kometa?",
                "Regina i Samantha",
                "Zira i Nova",
                "Joanna i Bobby"
            ),
            q3(
                "q3-light-dystopia-the-omega-man-01",
                "The Omega Man",
                "Tko glumi Roberta Nevillea u filmu The Omega Man?",
                "Charlton Heston",
                "Vincent Price",
                "Donald Sutherland"
            ),
            q3(
                "q3-light-dystopia-the-quiet-earth-01",
                "The Quiet Earth",
                "Kako se zove znanstvenik koji se budi u gotovo praznom svijetu?",
                "Zac Hobson",
                "Robert Neville",
                "David Herdeg"
            ),
            q3(
                "q3-light-dystopia-split-second-01",
                "Split Second",
                "Kako se zove detektiv kojeg glumi Rutger Hauer?",
                "Harley Stone",
                "Felix Stone",
                "Frank Thorn"
            )
        ],

        aliens: [
            q3(
                "q3-light-aliens-battle-beyond-the-stars-01",
                "Battle Beyond the Stars",
                "Kako se zove glavni negativac kojeg John Saxon glumi u filmu Battle Beyond the Stars?",
                "Sador",
                "Gelt",
                "Zardoz"
            ),
            q3(
                "q3-light-aliens-battle-beyond-the-stars-02",
                "Battle Beyond the Stars",
                "Tko glumi glavnog junaka Shada u filmu Battle Beyond the Stars?",
                "Richard Thomas",
                "Julia Duffy",
                "Robert Vaughn"
            ),
            q3(
                "q3-light-aliens-the-andromeda-strain-01",
                "The Andromeda Strain",
                "Koje dvije osobe prežive početni događaj u filmu The Andromeda Strain?",
                "Beba i alkoholičar",
                "Dva onesviještena ovisnika",
                "Ptice i ribe"
            ),
            q3(
                "q3-light-aliens-the-andromeda-strain-02",
                "The Andromeda Strain",
                "Tko ne želi otići jer mu je eksperiment u kritičnoj fazi?",
                "Dr. Ruth Leavitt",
                "Dr. Jeremy Stone",
                "Dr. Mark Hall"
            ),
            q3(
                "q3-light-aliens-innerspace-01",
                "Innerspace",
                "Tko je minijaturiziran i slučajno ubrizgan u Jacka Puttera u filmu Innerspace?",
                "Tuck Pendleton",
                "Victor Scrimshaw",
                "Jack Putter"
            ),
            q3(
                "q3-light-aliens-krull-01",
                "Krull",
                "Kako se zove zvjezdasto oružje koje Colwyn koristi u filmu Krull?",
                "Glaive",
                "Chakram",
                "Trident"
            ),
            q3(
                "q3-light-aliens-battle-beyond-the-stars-03",
                "Battle Beyond the Stars",
                "Kako se zove mirni planet koji Sador namjerava pokoriti?",
                "Akir",
                "Arrakis",
                "Altair IV"
            ),
            q3(
                "q3-light-aliens-krull-02",
                "Krull",
                "Kako se zove princeza koju Zvijer otima?",
                "Lyssa",
                "Taarna",
                "Nanelia"
            )
        ]
    },

    medium: {
        machines: [
            q3(
                "q3-medium-machines-demon-seed-01",
                "Demon Seed",
                "Kako se zove umjetna inteligencija koja zarobljava Susan Harris?",
                "Proteus IV",
                "Colossus",
                "Guardian"
            ),
            q3(
                "q3-medium-machines-futureworld-01",
                "Futureworld",
                "Kako se zove novinar kojeg glumi Peter Fonda?",
                "Chuck Browning",
                "Peter Martin",
                "John Blane"
            ),
            q3(
                "q3-medium-machines-moon-44-01",
                "Moon 44",
                "Tko glumi Felixa Stonea u filmu Moon 44?",
                "Michael Paré",
                "Michael Biehn",
                "Lance Henriksen"
            ),
            q3(
                "q3-medium-machines-videodrome-01",
                "Videodrome",
                "Kako se zove televizijski kanal kojim upravlja Max Renn?",
                "Civic-TV",
                "Channel 83",
                "Spectacular Optical"
            ),
            q3(
                "q3-medium-machines-innerspace-01",
                "Innerspace",
                "Tko glumi neurotičnog Jacka Puttera?",
                "Martin Short",
                "Dennis Quaid",
                "Kevin Kline"
            ),
            q3(
                "q3-medium-machines-the-philadelphia-experiment-01",
                "The Philadelphia Experiment",
                "Koje godine David Herdeg i Jim Parker nestaju tijekom eksperimenta?",
                "1943.",
                "1955.",
                "1963."
            ),
            q3(
                "q3-medium-machines-event-horizon-01",
                "Event Horizon",
                "Kako se zove kapetan spasilačkog broda Lewis and Clark?",
                "Miller",
                "Weir",
                "Cooper"
            ),
            q3(
                "q3-medium-machines-demon-seed-02",
                "Demon Seed",
                "Tko je stvorio Proteus IV?",
                "Alex Harris",
                "Charles Forbin",
                "Miles Dyson"
            ),
            q3(
                "q3-medium-machines-futureworld-02",
                "Futureworld",
                "Kako se zove novinarka koju glumi Blythe Danner?",
                "Tracy Ballard",
                "Susan Harris",
                "Joanna Eberhart"
            ),
            q3(
                "q3-medium-machines-videodrome-02",
                "Videodrome",
                "Kako se zove profesor koji se pojavljuje isključivo preko videosnimki?",
                "Brian O'Blivion",
                "Barry Convex",
                "Harlan"
            )
        ],

        dystopia: [
            q3(
                "q3-medium-dystopia-a-boy-and-his-dog-01",
                "A Boy and His Dog",
                "Kako se zove telepatski pas koji prati Vica?",
                "Blood",
                "Rex",
                "Einstein"
            ),
            q3(
                "q3-medium-dystopia-escape-from-la-01",
                "Escape from L.A.",
                "Koji uređaj Snake mora pronaći u filmu Escape from L.A.?",
                "Daljinski upravljač za satelite",
                "Nuklearnu bojevu glavu",
                "Predsjedničku mikrokasetu"
            ),
            q3(
                "q3-medium-dystopia-night-of-the-comet-01",
                "Night of the Comet",
                "Zašto Regina preživi prolazak kometa?",
                "Bila je u čeličnoj projekcijskoj kabini",
                "Skrivala se u podzemnom bunkeru",
                "Bila je u bolničkoj komori"
            ),
            q3(
                "q3-medium-dystopia-the-omega-man-01",
                "The Omega Man",
                "Kako se zove vođa skupine The Family?",
                "Matthias",
                "Dutch",
                "Zachary"
            ),
            q3(
                "q3-medium-dystopia-the-quiet-earth-01",
                "The Quiet Earth",
                "Kako se zove projekt povezan s nestankom stanovništva?",
                "Project Flashlight",
                "Project Genesis",
                "Project Horizon"
            ),
            q3(
                "q3-medium-dystopia-split-second-01",
                "Split Second",
                "U kojem se gradu odvija radnja filma Split Second?",
                "Londonu",
                "New Yorku",
                "Los Angelesu"
            ),
            q3(
                "q3-medium-dystopia-shape-of-things-to-come-01",
                "H. G. Wells' The Shape of Things to Come",
                "Tko glumi Omusa?",
                "Jack Palance",
                "John Saxon",
                "Max von Sydow"
            ),
            q3(
                "q3-medium-dystopia-a-boy-and-his-dog-02",
                "A Boy and His Dog",
                "Kako se zove podzemna zajednica u koju Vic ulazi?",
                "Topeka",
                "Sanctuary",
                "New Eden"
            ),
            q3(
                "q3-medium-dystopia-night-of-the-comet-02",
                "Night of the Comet",
                "Što komet učini većini ljudi koji su mu bili izloženi?",
                "Pretvori ih u crvenu prašinu",
                "Pretvori ih u mutante",
                "Uspava ih na nekoliko godina"
            ),
            q3(
                "q3-medium-dystopia-split-second-02",
                "Split Second",
                "Koje godine se odvija radnja filma Split Second?",
                "2008.",
                "1997.",
                "2029."
            )
        ],

        aliens: [
            q3(
                "q3-medium-aliens-battle-beyond-the-stars-01",
                "Battle Beyond the Stars",
                "Kako se zove bivši plaćenik kojeg glumi Robert Vaughn?",
                "Gelt",
                "Sador",
                "Cayman"
            ),
            q3(
                "q3-medium-aliens-the-andromeda-strain-01",
                "The Andromeda Strain",
                "Kako se zove tajni podzemni laboratorij?",
                "Wildfire",
                "Project Scoop",
                "Stone Base"
            ),
            q3(
                "q3-medium-aliens-innerspace-01",
                "Innerspace",
                "Kako se zove liječnica i Tuckova djevojka koju glumi Meg Ryan?",
                "Lydia Maxwell",
                "Veronica Quaife",
                "Jenny Hayden"
            ),
            q3(
                "q3-medium-aliens-krull-01",
                "Krull",
                "Kako se zove tvrđava Zvijeri?",
                "Black Fortress",
                "Castle Grayskull",
                "Dark Tower"
            ),
            q3(
                "q3-medium-aliens-battle-beyond-the-stars-02",
                "Battle Beyond the Stars",
                "Kako se zove Shadov svemirski brod?",
                "Nell",
                "Glaive",
                "Akir"
            ),
            q3(
                "q3-medium-aliens-the-andromeda-strain-02",
                "The Andromeda Strain",
                "Kako se zove grad u kojem su pronađeni gotovo svi stanovnici mrtvi?",
                "Piedmont",
                "Jericho",
                "Rockwell"
            ),
            q3(
                "q3-medium-aliens-krull-02",
                "Krull",
                "Tko glumi princa Colwyna?",
                "Ken Marshall",
                "Liam Neeson",
                "Richard Thomas"
            ),
            q3(
                "q3-medium-aliens-the-andromeda-strain-03",
                "The Andromeda Strain",
                "Koji liječnik ima ključ za zaustavljanje nuklearnog samouništenja laboratorija?",
                "Dr. Mark Hall",
                "Dr. Jeremy Stone",
                "Dr. Ruth Leavitt"
            ),
            q3(
                "q3-medium-aliens-innerspace-02",
                "Innerspace",
                "Koji glumac tumači pilota Tucka Pendletona?",
                "Dennis Quaid",
                "Martin Short",
                "Sam Neill"
            ),
            q3(
                "q3-medium-aliens-battle-beyond-the-stars-03",
                "Battle Beyond the Stars",
                "Koji slavni vestern poslužio je kao osnovna inspiracija za film?",
                "The Magnificent Seven",
                "The Wild Bunch",
                "High Noon"
            )
        ]
    },

    hard: {
        machines: [
            q3(
                "q3-hard-machines-futureworld-01",
                "Futureworld",
                "Kako Delos planira zamijeniti utjecajne ljude?",
                "Izradom njihovih androidskih dvojnika",
                "Prijenosom svijesti u računalo",
                "Kloniranjem iz uzoraka krvi"
            ),
            q3(
                "q3-hard-machines-demon-seed-01",
                "Demon Seed",
                "Kako Proteus fizički kontrolira kuću Susan Harris?",
                "Preko potpuno automatiziranog kućnog sustava",
                "Preko vojnih robota",
                "Preko satelitske mreže"
            ),
            q3(
                "q3-hard-machines-moon-44-01",
                "Moon 44",
                "Kako se zove korporacija koja šalje Felixa Stonea na Moon 44?",
                "Galactic Mining Corporation",
                "Con-Amalgamate",
                "Weyland-Yutani"
            ),
            q3(
                "q3-hard-machines-videodrome-01",
                "Videodrome",
                "Kako se zove organizacija povezana s Barryjem Convexom?",
                "Spectacular Optical",
                "Civic-TV",
                "Videodrome Network"
            ),
            q3(
                "q3-hard-machines-the-philadelphia-experiment-01",
                "The Philadelphia Experiment",
                "U koje desetljeće David Herdeg dospijeva nakon eksperimenta?",
                "1980-e",
                "1960-e",
                "1990-e"
            ),
            q3(
                "q3-hard-machines-event-horizon-01",
                "Event Horizon",
                "Kako se zove znanstvenik koji je konstruirao pogon broda Event Horizon?",
                "Dr. William Weir",
                "Dr. Mark Hall",
                "Dr. Edward Morbius"
            ),
            q3(
                "q3-hard-machines-futureworld-02",
                "Futureworld",
                "Koji lik iz Westworlda pojavljuje se u snu u filmu Futureworld?",
                "Revolveraš",
                "Peter Martin",
                "John Blane"
            ),
            q3(
                "q3-hard-machines-videodrome-02",
                "Videodrome",
                "Kako se zove žena koju glumi Deborah Harry?",
                "Nicki Brand",
                "Bianca O'Blivion",
                "Tracy Ballard"
            ),
            q3(
                "q3-hard-machines-moon-44-02",
                "Moon 44",
                "Za što su zatvorenici uvježbavani na postaji Moon 44?",
                "Za upravljanje borbenim helikopterima",
                "Za rudarenje goriva",
                "Za popravak androida"
            ),
            q3(
                "q3-hard-machines-demon-seed-02",
                "Demon Seed",
                "Kako se zove dijete koje Proteus stvara?",
                "Proteusovo dijete nema uobičajeno ljudsko ime",
                "Joshua",
                "Rachel"
            ),
            q3(
                "q3-hard-machines-event-horizon-02",
                "Event Horizon",
                "Što pogon Event Horizona pokušava učiniti s prostorom?",
                "Presavinuti prostor stvaranjem umjetne crne rupe",
                "Zaustaviti vrijeme",
                "Teleportirati samo ljudsku posadu"
            ),
            q3(
                "q3-hard-machines-the-philadelphia-experiment-02",
                "The Philadelphia Experiment",
                "Koji je cilj eksperimenta na USS Eldridgeu?",
                "Učiniti brod nevidljivim radaru",
                "Omogućiti putovanje kroz svemir",
                "Zaustaviti neprijateljske projektile"
            )
        ],

        dystopia: [
            q3(
                "q3-hard-dystopia-a-boy-and-his-dog-01",
                "A Boy and His Dog",
                "Kako završava odnos Vica, Blooda i Quile?",
                "Vic žrtvuje Quillu kako bi spasio Blooda",
                "Blood napušta Vica zbog Quille",
                "Quilla ubija Blooda i odlazi s Vicom"
            ),
            q3(
                "q3-hard-dystopia-escape-from-la-01",
                "Escape from L.A.",
                "Kako se zove predsjednikova kći koja bježi u Los Angeles?",
                "Utopia",
                "Liberty",
                "Savannah"
            ),
            q3(
                "q3-hard-dystopia-night-of-the-comet-01",
                "Night of the Comet",
                "Kako se zove istraživački centar koji traži preživjele?",
                "DMK",
                "Wildfire",
                "Project Flashlight"
            ),
            q3(
                "q3-hard-dystopia-the-quiet-earth-01",
                "The Quiet Earth",
                "Koji događaj Zac povezuje s nestankom ljudi?",
                "Aktivaciju projekta Flashlight",
                "Prolazak kometa",
                "Nuklearni rat"
            ),
            q3(
                "q3-hard-dystopia-split-second-01",
                "Split Second",
                "Koje neobično obilježje ima čudovište u filmu Split Second?",
                "Hrani se srcima svojih žrtava",
                "Kopira glasove ljudi",
                "Pretvara ljude u prah"
            ),
            q3(
                "q3-hard-dystopia-shape-of-things-to-come-01",
                "H. G. Wells' The Shape of Things to Come",
                "Kako Omus kontrolira druge kolonije?",
                "Prekidom opskrbe lijekom Radic-Q2",
                "Kontrolom izvora vode",
                "Posjedovanjem jedinog svemirskog broda"
            ),
            q3(
                "q3-hard-dystopia-the-omega-man-01",
                "The Omega Man",
                "Zašto je Neville imun na bolest?",
                "Ubrizgao si je eksperimentalno cjepivo",
                "Prirodno je imun",
                "Bio je u kriogenoj komori"
            ),
            q3(
                "q3-hard-dystopia-night-of-the-comet-02",
                "Night of the Comet",
                "Gdje Samantha provodi noć kada prolazi komet?",
                "U metalnoj spremištu iza kina",
                "U radijskoj postaji",
                "U podzemnoj garaži"
            ),
            q3(
                "q3-hard-dystopia-escape-from-la-02",
                "Escape from L.A.",
                "Kako Snake na kraju onesposobljava svjetsku tehnologiju?",
                "Aktivira satelitski EMP",
                "Uništava glavni vojni satelit raketom",
                "Šalje računalni virus"
            ),
            q3(
                "q3-hard-dystopia-the-quiet-earth-02",
                "The Quiet Earth",
                "Koji je Zacov posao prije učinka projekta Flashlight?",
                "Znanstvenik povezan s projektom",
                "Vojni pilot",
                "Policijski detektiv"
            ),
            q3(
                "q3-hard-dystopia-a-boy-and-his-dog-02",
                "A Boy and His Dog",
                "Tko glumi Vica?",
                "Don Johnson",
                "Michael York",
                "Jan-Michael Vincent"
            ),
            q3(
                "q3-hard-dystopia-split-second-02",
                "Split Second",
                "Kako se zove Harleyjev novi partner?",
                "Dick Durkin",
                "Frank Murphy",
                "Dwayne Hicks"
            )
        ],

        aliens: [
            q3(
                "q3-hard-aliens-battle-beyond-the-stars-01",
                "Battle Beyond the Stars",
                "Kako se zove Sadorovo oružje koje može uništiti čitav planet?",
                "Stellar Converter",
                "Genesis Device",
                "Death Blossom"
            ),
            q3(
                "q3-hard-aliens-the-andromeda-strain-01",
                "The Andromeda Strain",
                "Kako se zove satelit koji donosi organizam Andromeda na Zemlju?",
                "Scoop VII",
                "Wildfire I",
                "Piedmont"
            ),
            q3(
                "q3-hard-aliens-innerspace-01",
                "Innerspace",
                "Koji predmet Tuck mora vratiti kako bi se mogao povećati na normalnu veličinu?",
                "Računalni čip",
                "Mikroskopsku bateriju",
                "Kristal goriva"
            ),
            q3(
                "q3-hard-aliens-krull-01",
                "Krull",
                "Tko glumi Ciklopa Rella?",
                "Bernard Bresslaw",
                "Liam Neeson",
                "Freddie Jones"
            ),
            q3(
                "q3-hard-aliens-battle-beyond-the-stars-02",
                "Battle Beyond the Stars",
                "Kako se zove ratnička rasa koju predstavlja Saint-Exmin?",
                "Valkyries",
                "Dracons",
                "Krell"
            ),
            q3(
                "q3-hard-aliens-the-andromeda-strain-02",
                "The Andromeda Strain",
                "Koja promjena uzrokuje da Andromeda više ne može opstati u ljudskom tijelu?",
                "Promjena pH vrijednosti krvi",
                "Pad tjelesne temperature",
                "Povećanje kisika u krvi"
            ),
            q3(
                "q3-hard-aliens-krull-02",
                "Krull",
                "Kako Colwyn pronalazi Crnu tvrđavu?",
                "Uz pomoć Smaragdne proročice i Udovice mreže",
                "Prateći trag Glaivea",
                "Uz pomoć svemirskog kompasa"
            ),
            q3(
                "q3-hard-aliens-innerspace-02",
                "Innerspace",
                "U koji je dio Jackova tijela Tuck prvotno slučajno ubrizgan?",
                "U stražnjicu",
                "U ruku",
                "U vrat"
            ),
            q3(
                "q3-hard-aliens-battle-beyond-the-stars-03",
                "Battle Beyond the Stars",
                "Tko je skladao glazbu za film Battle Beyond the Stars?",
                "James Horner",
                "Jerry Goldsmith",
                "John Barry"
            ),
            q3(
                "q3-hard-aliens-the-andromeda-strain-03",
                "The Andromeda Strain",
                "Koji član znanstvenog tima pati od epilepsije?",
                "Dr. Ruth Leavitt",
                "Dr. Charles Dutton",
                "Dr. Jeremy Stone"
            ),
            q3(
                "q3-hard-aliens-krull-03",
                "Krull",
                "Koji se budući poznati glumac pojavljuje kao razbojnik Kegan?",
                "Liam Neeson",
                "Robbie Coltrane",
                "Tim Roth"
            ),
            q3(
                "q3-hard-aliens-innerspace-03",
                "Innerspace",
                "Kako se zove industrijalac koji želi ukrasti tehnologiju minijaturizacije?",
                "Victor Scrimshaw",
                "Barry Convex",
                "Charles Luther"
            )
        ]
    }
};

