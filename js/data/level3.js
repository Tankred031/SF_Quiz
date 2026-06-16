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
                "q3-light-machines-batteries-not-included-01",
                "*batteries not included",
                "Kakva bića pomažu stanarima spasiti zgradu u filmu *batteries not included?",
                "Mala izvanzemaljska mehanička bića",
                "Roboti poslani iz budućnosti",
                "Minijaturni ljudi iz laboratorija"
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
                "q3-light-aliens-the-war-of-the-worlds-01",
                "The War of the Worlds",
                "Što na kraju zaustavlja marsovske osvajače u filmu The War of the Worlds?",
                "Zemaljske bakterije",
                "Nuklearno oružje",
                "Magnetska oluja"
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
                "q3-medium-machines-hardware-01",
                "Hardware",
                "Koji glumac tumači Mosesa 'Hard Mo' Baxtera u filmu Hardware?",
                "Dylan McDermott",
                "Liam Neeson",
                "Mark Hamill"
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
                "q3-medium-machines-blue-thunder-01",
                "Blue Thunder",
                "Koji glumac tumači pilota Franka Murphyja u filmu Blue Thunder?",
                "Roy Scheider",
                "Robert Forster",
                "Michael Ironside"
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
                "q3-medium-dystopia-dreamscape-01",
                "Dreamscape",
                "Kako Alex Gardner ulazi u snove drugih ljudi u filmu Dreamscape?",
                "Pomoću psihičkog povezivanja",
                "Pomoću računalnog implantata",
                "Pomoću eksperimentalnog lijeka"
            ),
            q3(
                "q3-medium-dystopia-nineteen-eighty-four-01",
                "Nineteen Eighty-Four",
                "U kojem ministarstvu Winston Smith radi na prepravljanju povijesnih zapisa?",
                "Ministarstvu istine",
                "Ministarstvu ljubavi",
                "Ministarstvu mira"
            ),
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
                "q3-medium-aliens-the-fifth-element-01",
                "The Fifth Element",
                "Kako se zove savršeno biće koje treba pomoći spasiti Zemlju?",
                "Leeloo",
                "Korben",
                "Diva Plavalaguna"
            ),
            q3(
                "q3-medium-aliens-stargate-01",
                "Stargate",
                "Kako se zove egiptolog koji uspijeva protumačiti simbole na Zvjezdanim vratima?",
                "Daniel Jackson",
                "Jack O'Neil",
                "Charles Kawalsky"
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
                "q3-medium-aliens-species-01",
                "Species",
                "Kako se zove hibrid čovjeka i izvanzemaljca kojeg znanstvenici pokušavaju pronaći?",
                "Sil",
                "Eve",
                "Laura"
            ),
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
                "q3-hard-machines-cyclone-01",
                "Cyclone",
                "Koja glumica tumači Teri Marshall, čuvaricu eksperimentalnog motocikla Cyclone?",
                "Heather Thomas",
                "Linda Hamilton",
                "Nancy Allen"
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
                "q3-hard-machines-blue-thunder-01",
                "Blue Thunder",
                "Kako se zove pilot kojeg Roy Scheider glumi u filmu Blue Thunder?",
                "Frank Murphy",
                "Jack Ramsay",
                "Felix Stone"
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
                "q3-hard-machines-the-wraith-01",
                "The Wraith",
                "Koji glumac tumači tajanstvenog Jakea Keseyja u filmu The Wraith?",
                "Charlie Sheen",
                "Michael Paré",
                "C. Thomas Howell"
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
                "q3-hard-machines-stargate-01",
                "Stargate",
                "Koji je sedmi simbol potreban za određivanje odredišta i aktiviranje Zvjezdanih vrata?",
                "Točka podrijetla",
                "Simbol ciljnog planeta",
                "Oznaka galaksije"
            ),
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
                "q3-hard-dystopia-nineteen-eighty-four-02",
                "Nineteen Eighty-Four",
                "Kako se zove član Unutarnje partije koji ispituje i preodgaja Winstona?",
                "O'Brien",
                "Charrington",
                "Syme"
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
                "q3-hard-dystopia-total-recall-01",
                "Total Recall",
                "Kako se zove mutant koji predvodi pobunu na Marsu?",
                "Kuato",
                "Richter",
                "Benny"
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
                "q3-hard-aliens-starship-troopers-02",
                "Starship Troopers",
                "Kako se zove planet na kojem ljudi doživljavaju katastrofalan prvi veliki poraz?",
                "Klendathu",
                "Tango Urilla",
                "Planet P"
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
                "q3-hard-aliens-the-empire-strikes-back-01",
                "The Empire Strikes Back",
                "Na kojem planetu Luke Skywalker trenira s Yodom?",
                "Dagobah",
                "Hoth",
                "Bespin"
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
                "q3-hard-aliens-starship-troopers-01",
                "Starship Troopers",
                "Kako se naziva izvanzemaljska vrsta protiv koje se ljudi bore u filmu Starship Troopers?",
                "Arachnids",
                "Krell",
                "Dracons"
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
