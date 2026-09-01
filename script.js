/* =========================================================
   POKÉMON DRAFT LEAGUE
========================================================= */


/* =========================================================
   TEAMS
========================================================= */

const teams = [
    "Durham Drills",
    "Florida Floettes",
    "New Braunfels Ninetails",
    "Niagara Stampede",
    "Garden State Garchomps",
    "Colorado Avalugg",
    "Texas State Disasters",
    "Houston Heat Wave",
    "Ontario Fightin' Palafin",
    "Great Lakes Glimmora",
    "Amarillo Archaludon",
    "Southern Tier Supporters"
];


/* =========================================================
   ROSTERS
========================================================= */

const rosters = {

    "Great Lakes Glimmora": [
        "Glimmora", "Orthworm", "Ninetales (K)", "Typhlosion (J)", "Pidgeot",
        "Tauros (Aqua)", "Ampharos", "Avalugg (Kalos)", "Heliolisk", "Victreebel"
    ],

    "Garden State Garchomps": [
        "Garchomp", "Corviknight", "Manectric", "Primarina", "Arcanine (K)",
        "Hydrapple", "Rotom", "Forretress", "Cofagrigus", "Passimian"
    ],

    "Florida Floettes": [
        "Floette EF", "Rotom Wash", "Aerodactyl", "Krookodile", "Ariados",
        "Pangoro", "Meowstic (M)", "Simisage", "Flareon", "Zoroark (U)"
    ],

    "Amarillo Archaludon": [
        "Archaludon", "Pelipper", "Scizor", "Scovillain", "Luxray",
        "Lycanroc (D)", "Dedenne", "Watchog", "Toxicroak", "Flapple"
    ],

    "Niagara Stampede": [
        "Incineroar", "Sinistcha", "Mudsdale", "Blastoise", "Rotom (Fan)",
        "Bastiodon", "Serperior", "Espeon", "Tyrantrum", "Leafeon"
    ],

    "New Braunfels Ninetails": [
        "Kingambit", "Gengar", "Ninetales (A)", "Araquanid", "Goodra (K)",
        "Aromatisse", "Mr. Rime", "Beartic", "Skeledirge", "Meowstic (F)"
    ],

    "Texas State Disasters": [
        "Basculegion Male", "Froslass", "Volcarona", "Tauros (P - Blaze)", "Liepard",
        "Rotom Frost", "Florges", "Simisear", "Kommo-O", "Absol"
    ],

    "Southern Tier Supporters": [
        "Sableye", "Maushold", "Meganium", "Steelix", "Reuniclus",
        "Simipour", "Golurk", "Polteageist", "Arcanine (Hisui)", "Castform"
    ],

    "Colorado Avalugg": [
        "Dragonite", "Gardevoir", "Skarmory", "Hippowdon", "Decidueye (A)",
        "Tauros (P-C)", "Runerigus", "Salazzle", "Raichu (A)", "Kleavor"
    ],

    "Durham Drills": [
        "Sneasler", "Aegislash", "Tyranitar", "Excadrill", "Rotom Mow",
        "Tauros (K)", "Noivern", "Appletun", "Wyrdeer", "Stunfisk (G)"
    ],

    "Houston Heat Wave": [
        "Charizard", "Venusaur", "Hydreigon", "Aggron", "Arbok",
        "Klefki", "Slurpuff", "Feraligatr", "Rampardos", "Furfrou"
    ],

    "Ontario Fightin' Palafin": [
        "Sylveon", "Dragapult", "Palafin", "Talonflame", "Heracross",
        "Hatterene", "Samurott (U)", "Avalugg (Hisui)", "Roserade", "Emolga"
    ]
};


/* =========================================================
   API NAME MAPPING
========================================================= */

const pokemonApiNames = {

    "Ninetales (K)": "ninetales",
    "Typhlosion (J)": "typhlosion-hisui",
    "Tauros (Aqua)": "tauros-paldea-aqua-breed",
    "Avalugg (Kalos)": "avalugg",
    "Arcanine (K)": "arcanine",

    "Rotom Wash": "rotom-wash",
    "Meowstic (M)": "meowstic-male",
    "Zoroark (U)": "zoroark-hisui",

    "Lycanroc (D)": "lycanroc-dusk",
    "Rotom (Fan)": "rotom-fan",

    "Ninetales (A)": "ninetales-alola",
    "Goodra (K)": "goodra-hisui",
    "Mr. Rime": "mr-rime",

    "Tauros (P - Blaze)": "tauros-paldea-blaze-breed",
    "Rotom Frost": "rotom-frost",
    "Kommo-O": "kommo-o",

    "Arcanine (Hisui)": "arcanine-hisui",

    "Decidueye (A)": "decidueye-hisui",
    "Tauros (P-C)": "tauros-paldea-combat-breed",
    "Raichu (A)": "raichu-alola",

    "Rotom Mow": "rotom-mow",
    "Tauros (K)": "tauros",
    "Stunfisk (G)": "stunfisk-galar",

    "Basculegion Male": "basculegion-male",
    "Samurott (U)": "samurott-hisui",
    "Avalugg (Hisui)": "avalugg-hisui",

    "Floette EF": "floette-eternal",
    "Floette (Eternal)": "floette-eternal",
    "Floette Eternal": "floette-eternal",
    "Floette Eternal Flower": "floette-eternal",
    "Eternal Flower Floette": "floette-eternal",

    "Aegislash": "aegislash-shield",
    "Aegislash-Shield": "aegislash-shield",

    "Palafin": "palafin-zero",
    "Palafin-Zero": "palafin-zero",

    "Meowstic (F)": "meowstic-female",

    "Maushold": "maushold-family-of-four"
};


/* =========================================================
   WEEKS
========================================================= */

const weeks = [

    {
        number: 1,
        dates: "July 1-5",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Ontario Fightin' Palafin", 1, 2],
            ["Garden State Garchomps", "Houston Heat Wave", 1, 2],
            ["Florida Floettes", "Durham Drills", 1, 2],
            ["Amarillo Archaludon", "Colorado Avalugg", 0, 3],
            ["Niagara Stampede", "Southern Tier Supporters", 3, 0],
            ["New Braunfels Ninetails", "Texas State Disasters", 2, 1]
        ]
    },

    {
        number: 2,
        dates: "July 10-12",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Houston Heat Wave", 2, 1],
            ["Ontario Fightin' Palafin", "Durham Drills", 0, 3],
            ["Garden State Garchomps", "Colorado Avalugg", 2, 1],
            ["Florida Floettes", "Southern Tier Supporters", 3, 0],
            ["Amarillo Archaludon", "Texas State Disasters", 1, 2],
            ["Niagara Stampede", "New Braunfels Ninetails", 2, 1]
        ]
    },

    {
        number: 3,
        dates: "July 17-19",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Durham Drills", 2, 1],
            ["Houston Heat Wave", "Colorado Avalugg", 2, 1],
            ["Ontario Fightin' Palafin", "Southern Tier Supporters", 3, 0],
            ["Garden State Garchomps", "Texas State Disasters", 2, 1],
            ["Florida Floettes", "New Braunfels Ninetails", 1, 2],
            ["Niagara Stampede", "Amarillo Archaludon", 2, 1]
        ]
    },

    {
        number: 4,
        dates: "July 24-26",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Colorado Avalugg", 1, 2],
            ["Durham Drills", "Southern Tier Supporters", 2, 1],
            ["Houston Heat Wave", "Texas State Disasters", 0, 3],
            ["Ontario Fightin' Palafin", "New Braunfels Ninetails", 0, 3],
            ["Garden State Garchomps", "Niagara Stampede", 3, 0],
            ["Florida Floettes", "Amarillo Archaludon", 2, 1]
        ]
    },

    {
        number: 5,
        dates: "July 31-August 2",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Southern Tier Supporters", 1, 2],
            ["Colorado Avalugg", "Texas State Disasters", 2, 1],
            ["Durham Drills", "New Braunfels Ninetails", 2, 1],
            ["Houston Heat Wave", "Niagara Stampede", 2, 1],
            ["Ontario Fightin' Palafin", "Amarillo Archaludon", 0, 3],
            ["Garden State Garchomps", "Florida Floettes", 0, 3]
        ]
    },

    {
        number: 6,
        dates: "August 7-9",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Texas State Disasters", 1, 2],
            ["Southern Tier Supporters", "New Braunfels Ninetails", 0, 3],
            ["Colorado Avalugg", "Niagara Stampede", 1, 2],
            ["Durham Drills", "Amarillo Archaludon", 3, 0],
            ["Houston Heat Wave", "Florida Floettes", 0, 3],
            ["Garden State Garchomps", "Ontario Fightin' Palafin", 1, 2]
        ]
    },

    {
        number: 7,
        dates: "August 14-16",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "New Braunfels Ninetails", 2, 1],
            ["Texas State Disasters", "Niagara Stampede", 2, 1],
            ["Southern Tier Supporters", "Amarillo Archaludon", 2, 1],
            ["Colorado Avalugg", "Florida Floettes", 1, 2],
            ["Durham Drills", "Garden State Garchomps", 1, 2],
            ["Houston Heat Wave", "Ontario Fightin' Palafin", 3, 0]
        ]
    },

    {
        number: 8,
        dates: "August 21-23",
        locked: true,

        matches: [
            ["Great Lakes Glimmora", "Niagara Stampede", 1, 2],
            ["New Braunfels Ninetails", "Amarillo Archaludon", 0, 3],
            ["Texas State Disasters", "Florida Floettes", 1, 2],
            ["Southern Tier Supporters", "Garden State Garchomps", 0, 3],
            ["Colorado Avalugg", "Ontario Fightin' Palafin", 3, 0],
            ["Durham Drills", "Houston Heat Wave", 2, 1]
        ]
    },

    {
        number: 9,
        dates: "August 28-30",
        locked: false,

        matches: [
            ["Great Lakes Glimmora", "Amarillo Archaludon"],
            ["Niagara Stampede", "Florida Floettes"],
            ["New Braunfels Ninetails", "Garden State Garchomps"],
            ["Texas State Disasters", "Ontario Fightin' Palafin"],
            ["Southern Tier Supporters", "Houston Heat Wave"],
            ["Colorado Avalugg", "Durham Drills"]
        ]
    },

    {
        number: 10,
        dates: "September 4-6",
        locked: false,

        matches: [
            ["Great Lakes Glimmora", "Florida Floettes"],
            ["Amarillo Archaludon", "Garden State Garchomps"],
            ["Niagara Stampede", "Ontario Fightin' Palafin"],
            ["New Braunfels Ninetails", "Houston Heat Wave"],
            ["Texas State Disasters", "Durham Drills"],
            ["Southern Tier Supporters", "Colorado Avalugg"]
        ]
    },

    {
        number: 11,
        dates: "September 11-13",
        locked: false,

        matches: [
            ["Great Lakes Glimmora", "Garden State Garchomps"],
            ["Florida Floettes", "Ontario Fightin' Palafin"],
            ["Amarillo Archaludon", "Houston Heat Wave"],
            ["Niagara Stampede", "Durham Drills"],
            ["New Braunfels Ninetails", "Colorado Avalugg"],
            ["Texas State Disasters", "Southern Tier Supporters"]
        ]
    }
];


/* =========================================================
   SETTINGS
========================================================= */

let currentWeek = 1;
let selectedTeam = "Durham Drills";

const STORAGE_KEY = "pokemonDraftLeagueScores";

const POSSIBLE_SCORES = [
    [3, 0],
    [2, 1],
    [1, 2],
    [0, 3]
];

const futureScheduleCache = new Map();
const pokemonCache = new Map();

let possibleSeedDataCache = null;
let possibleSeedDataDirty = true;


/* =========================================================
   TABS
========================================================= */

function initializeTabs() {

    const buttons = document.querySelectorAll(".nav-button");
    const tabs = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.tab;

            buttons.forEach(b => b.classList.remove("active"));
            tabs.forEach(tab => tab.classList.remove("active-tab"));

            button.classList.add("active");

            const targetElement = document.getElementById(target);

            if (targetElement) {
                targetElement.classList.add("active-tab");
            }
        });
    });
}


/* =========================================================
   POKÉMON API NAME
========================================================= */

function getPokemonApiName(pokemonName) {

    if (pokemonApiNames[pokemonName]) {
        return pokemonApiNames[pokemonName];
    }

    return pokemonName
        .toLowerCase()
        .replace(/[.'’()]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}


/* =========================================================
   FETCH POKÉMON
========================================================= */

async function fetchPokemonData(pokemonName) {

    if (pokemonCache.has(pokemonName)) {
        return pokemonCache.get(pokemonName);
    }

    const apiName = getPokemonApiName(pokemonName);

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${apiName}`
    );

    if (!response.ok) {
        throw new Error(`Pokémon not found: ${pokemonName}`);
    }

    const data = await response.json();

    pokemonCache.set(pokemonName, data);

    return data;
}


/* =========================================================
   GET POKÉMON IMAGE
========================================================= */

async function getPokemonImage(pokemonName) {

    try {

        const data = await fetchPokemonData(pokemonName);

        return (
            data.sprites &&
            data.sprites.other &&
            data.sprites.other["official-artwork"] &&
            data.sprites.other["official-artwork"].front_default
        );

    } catch (error) {

        console.error(error);
        return null;
    }
}


/* =========================================================
   ROSTER TABS
========================================================= */

function renderTeamTabs() {

    const container = document.getElementById("teamTabs");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    teams.forEach(team => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "team-tab";

        if (team === selectedTeam) {
            button.classList.add("active");
        }

        button.textContent = team;

        button.addEventListener("click", () => {

            selectedTeam = team;

            renderTeamTabs();
            renderSelectedRoster();
        });

        container.appendChild(button);
    });
}


/* =========================================================
   SELECTED ROSTER
========================================================= */

function renderSelectedRoster() {

    const container = document.getElementById("selectedRoster");

    if (!container) {
        return;
    }

    const roster = rosters[selectedTeam] || [];

    container.innerHTML = "";

    const header = document.createElement("div");
    header.className = "selected-roster-header";

    const title = document.createElement("h3");
    title.textContent = selectedTeam;

    const count = document.createElement("span");
    count.textContent = `${roster.length} POKÉMON`;

    header.appendChild(title);
    header.appendChild(count);

    container.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "roster-pokemon-grid";

    roster.forEach(pokemon => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "pokemon-button";

        const image = document.createElement("img");

        image.className = "pokemon-mini-icon";
        image.alt = pokemon;
        image.loading = "lazy";
        image.src = createPlaceholderImage();

        loadRosterImage(image, pokemon);

        const name = document.createElement("span");

        name.className = "pokemon-button-name";
        name.textContent = pokemon;

        button.appendChild(image);
        button.appendChild(name);

        button.addEventListener("click", () => {
            openPokemonModal(pokemon, selectedTeam);
        });

        grid.appendChild(button);
    });

    container.appendChild(grid);
}


/* =========================================================
   PLACEHOLDER
========================================================= */

function createPlaceholderImage() {

    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="150"
                 height="150"
                 viewBox="0 0 150 150">

                <circle
                    cx="75"
                    cy="75"
                    r="45"
                    fill="none"
                    stroke="#4daeff"
                    stroke-width="5"
                    stroke-dasharray="20 10"
                />

            </svg>
        `)
    );
}


/* =========================================================
   LOAD ROSTER IMAGE
========================================================= */

async function loadRosterImage(image, pokemonName) {

    const url = await getPokemonImage(pokemonName);

    if (url) {
        image.src = url;
    } else {
        image.alt = `${pokemonName} image unavailable`;
    }
}


/* =========================================================
   POKÉMON MODAL
========================================================= */

function openPokemonModal(pokemonName, teamName) {

    const modal = document.getElementById("pokemonModal");

    const team = document.getElementById("pokemonTeam");
    const name = document.getElementById("pokemonName");
    const types = document.getElementById("pokemonTypes");
    const id = document.getElementById("pokemonId");
    const imageContainer = document.getElementById("pokemonImageContainer");
    const stats = document.getElementById("pokemonStats");

    if (!modal) {
        return;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    team.textContent = teamName;
    name.textContent = pokemonName;

    types.innerHTML = "";
    id.textContent = "";

    imageContainer.innerHTML =
        `<div class="pokemon-loading">Loading...</div>`;

    stats.innerHTML =
        `<div class="pokemon-loading">Loading stats...</div>`;

    loadPokemonData(pokemonName);
}


/* =========================================================
   LOAD MODAL DATA
========================================================= */

async function loadPokemonData(pokemonName) {

    const imageContainer =
        document.getElementById("pokemonImageContainer");

    const typesContainer =
        document.getElementById("pokemonTypes");

    const idContainer =
        document.getElementById("pokemonId");

    const statsContainer =
        document.getElementById("pokemonStats");

    try {

        const data = await fetchPokemonData(pokemonName);

        const artwork =
            data.sprites &&
            data.sprites.other &&
            data.sprites.other["official-artwork"] &&
            data.sprites.other["official-artwork"].front_default;

        if (artwork) {

            imageContainer.innerHTML =
                `<img src="${artwork}" alt="${pokemonName}">`;

        } else {

            imageContainer.innerHTML =
                `<div class="pokemon-loading">
                    No image available
                </div>`;
        }

        typesContainer.innerHTML = "";

        data.types
            .sort((a, b) => a.slot - b.slot)
            .forEach(typeData => {

                const badge = document.createElement("span");

                badge.className = "type-badge";
                badge.textContent = typeData.type.name;

                typesContainer.appendChild(badge);
            });

        idContainer.textContent =
            "#" + String(data.id).padStart(3, "0");

        renderPokemonStats(data.stats);

    } catch (error) {

        console.error(error);

        imageContainer.innerHTML =
            `<div class="pokemon-loading">
                Image unavailable
            </div>`;

        typesContainer.innerHTML = "";
        idContainer.textContent = "";

        statsContainer.innerHTML = `
            <div class="no-scenarios">
                Could not load Pokémon data.
                Make sure the device is connected to the internet.
            </div>
        `;
    }
}


/* =========================================================
   STATS
========================================================= */

function renderPokemonStats(stats) {

    const container = document.getElementById("pokemonStats");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const statNames = {

        hp: "HP",
        attack: "Attack",
        defense: "Defense",
        "special-attack": "Sp. Atk",
        "special-defense": "Sp. Def",
        speed: "Speed"
    };

    let total = 0;

    stats.forEach(stat => {

        const statName = stat.stat.name;
        const value = stat.base_stat;

        if (!statNames[statName]) {
            return;
        }

        total += value;

        const row = document.createElement("div");
        row.className = "stat-row";

        const label = document.createElement("span");
        label.className = "stat-name";
        label.textContent = statNames[statName];

        const number = document.createElement("span");
        number.className = "stat-value";
        number.textContent = value;

        const bar = document.createElement("div");
        bar.className = "stat-bar";

        const fill = document.createElement("div");
        fill.className = "stat-bar-fill";

        const percentage =
            Math.min(100, (value / 255) * 100);

        fill.style.width = percentage + "%";

        bar.appendChild(fill);

        row.appendChild(label);
        row.appendChild(number);
        row.appendChild(bar);

        container.appendChild(row);
    });

    const totalRow = document.createElement("div");

    totalRow.className =
        "stat-row stat-total";

    const totalLabel = document.createElement("span");

    totalLabel.className =
        "stat-name";

    totalLabel.textContent =
        "Base Total";

    const totalNumber = document.createElement("span");

    totalNumber.className =
        "stat-value";

    totalNumber.textContent =
        total;

    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalNumber);
    totalRow.appendChild(document.createElement("div"));

    container.appendChild(totalRow);
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closePokemonModal() {

    const modal =
        document.getElementById("pokemonModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* =========================================================
   MODAL EVENTS
========================================================= */

function initializePokemonModal() {

    const closeButton =
        document.getElementById("closePokemonModal");

    const backdrop =
        document.getElementById("pokemonModalBackdrop");

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePokemonModal
        );
    }

    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closePokemonModal
        );
    }

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closePokemonModal();
            }
        }
    );
}


/* =========================================================
   FUTURE SCHEDULE CACHE
========================================================= */

function buildFutureScheduleCache() {

    futureScheduleCache.clear();

    for (const team of teams) {

        const gamesByWeek = {};

        for (const week of weeks) {

            let count = 0;

            for (const match of week.matches) {

                if (
                    match[0] === team ||
                    match[1] === team
                ) {
                    count++;
                }
            }

            gamesByWeek[week.number] = count;
        }

        futureScheduleCache.set(
            team,
            gamesByWeek
        );
    }
}


/* =========================================================
   REMAINING GAME COUNT
========================================================= */

function getRemainingGameCount(
    teamName,
    afterWeek
) {

    const schedule =
        futureScheduleCache.get(teamName);

    if (!schedule) {
        return 0;
    }

    let count = 0;

    for (
        let weekNumber = afterWeek + 1;
        weekNumber <= weeks.length;
        weekNumber++
    ) {

        count +=
            schedule[weekNumber] || 0;
    }

    return count;
}


/* =========================================================
   STORAGE
========================================================= */

function loadSavedScores() {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return;
    }

    try {

        const savedWeeks =
            JSON.parse(saved);

        for (
            let w = 0;
            w < weeks.length;
            w++
        ) {

            if (weeks[w].locked) {
                continue;
            }

            if (!savedWeeks[w]) {
                continue;
            }

            for (
                let m = 0;
                m < weeks[w].matches.length;
                m++
            ) {

                const savedMatch =
                    savedWeeks[w][m];

                if (
                    savedMatch &&
                    savedMatch.length === 4 &&
                    validScore(
                        savedMatch[2],
                        savedMatch[3]
                    )
                ) {

                    weeks[w].matches[m][2] =
                        savedMatch[2];

                    weeks[w].matches[m][3] =
                        savedMatch[3];
                }
            }
        }

    } catch (error) {

        console.error(
            "Could not load saved scores:",
            error
        );
    }
}


/* =========================================================
   SAVE SCORES
========================================================= */

function saveScoresToStorage() {

    const data = [];

    for (
        let w = 0;
        w < weeks.length;
        w++
    ) {

        data[w] = [];

        for (
            let m = 0;
            m < weeks[w].matches.length;
            m++
        ) {

            const match =
                weeks[w].matches[m];

            data[w][m] = [
                match[0],
                match[1],
                match.length >= 4
                    ? match[2]
                    : null,
                match.length >= 4
                    ? match[3]
                    : null
            ];
        }
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}


/* =========================================================
   SCORE VALIDATION
========================================================= */

function validScore(
    scoreA,
    scoreB
) {

    if (
        scoreA === "" ||
        scoreB === "" ||
        scoreA === null ||
        scoreB === null ||
        scoreA === undefined ||
        scoreB === undefined
    ) {
        return false;
    }

    const a = Number(scoreA);
    const b = Number(scoreB);

    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {
        return false;
    }

    if (
        a < 0 ||
        b < 0 ||
        a > 3 ||
        b > 3
    ) {
        return false;
    }

    return a + b === 3;
}


/* =========================================================
   WEEK COMPLETION
========================================================= */

function isWeekComplete(weekNumber) {

    const week =
        weeks.find(
            w => w.number === weekNumber
        );

    if (!week) {
        return false;
    }

    return week.matches.every(
        match =>
            match.length >= 4 &&
            validScore(
                match[2],
                match[3]
            )
    );
}


/* =========================================================
   CAN ANALYZE WEEK
=========================================================

   Kept only because other code may reference it.
   Weekly scenario analysis itself has been removed.
========================================================= */

function canAnalyzeWeek(weekNumber) {

    if (weekNumber <= 1) {
        return true;
    }

    return isWeekComplete(
        weekNumber - 1
    );
}


/* =========================================================
   STANDINGS
========================================================= */

function createEmptyStandings() {

    return teams.map(team => ({

        team,

        wins: 0,

        losses: 0,

        differential: 0
    }));
}


/* =========================================================
   APPLY MATCH
========================================================= */

function applyMatch(
    standings,
    match
) {

    if (
        match.length < 4 ||
        !validScore(
            match[2],
            match[3]
        )
    ) {
        return;
    }

    const scoreA =
        Number(match[2]);

    const scoreB =
        Number(match[3]);

    const teamA =
        standings.find(
            t => t.team === match[0]
        );

    const teamB =
        standings.find(
            t => t.team === match[1]
        );

    if (!teamA || !teamB) {
        return;
    }

    teamA.differential +=
        scoreA - scoreB;

    teamB.differential +=
        scoreB - scoreA;

    if (scoreA > scoreB) {

        teamA.wins++;
        teamB.losses++;

    } else {

        teamB.wins++;
        teamA.losses++;
    }
}
/* =========================================================
   HEAD-TO-HEAD TIEBREAKER
========================================================= */

function getHeadToHeadRecord(
    teamA,
    teamB
) {

    let teamAWins = 0;
    let teamBWins = 0;

    for (const week of weeks) {

        for (const match of week.matches) {

            const team1 = match[0];
            const team2 = match[1];
            const score1 = match[2];
            const score2 = match[3];

            // Ignore unplayed matches
            if (
                !validScore(
                    score1,
                    score2
                )
            ) {
                continue;
            }

            // Only look at matches between these two teams
            if (
                !(
                    (
                        team1 === teamA &&
                        team2 === teamB
                    ) ||
                    (
                        team1 === teamB &&
                        team2 === teamA
                    )
                )
            ) {
                continue;
            }

            if (team1 === teamA) {

                if (score1 > score2) {
                    teamAWins++;
                } else if (score2 > score1) {
                    teamBWins++;
                }

            } else {

                if (score2 > score1) {
                    teamAWins++;
                } else if (score1 > score2) {
                    teamBWins++;
                }
            }
        }
    }

    // Positive = teamA ranks higher
    // Negative = teamB ranks higher
    if (teamAWins > teamBWins) {
        return 1;
    }

    if (teamBWins > teamAWins) {
        return -1;
    }

    return 0;
}

/* =========================================================
   SORT STANDINGS
========================================================= */

function sortStandings(
    standings
) {

    return standings.sort(
        (a, b) => {

            // 1. Wins
            if (a.wins !== b.wins) {

                return b.wins - a.wins;
            }

            // 2. Point differential
            if (
                a.differential !==
                b.differential
            ) {

                return (
                    b.differential -
                    a.differential
                );
            }

            // 3. Head-to-head
            const h2h =
                getHeadToHeadRecord(
                    a.team,
                    b.team
                );

            if (h2h !== 0) {

                return h2h;
            }

            // 4. Alphabetical fallback
            return a.team.localeCompare(
                b.team
            );
        }
    );
}


/* =========================================================
   CALCULATE CURRENT STANDINGS
========================================================= */

function calculateStandings() {

    const standings =
        createEmptyStandings();

    for (const week of weeks) {

        for (const match of week.matches) {

            applyMatch(
                standings,
                match
            );
        }
    }

    return sortStandings(
        standings
    );
}


/* =========================================================
   FUTURE MATCHES
========================================================= */

function getFutureMatches() {

    const futureMatches = [];

    for (const week of weeks) {

        for (const match of week.matches) {

            if (
                match.length < 4 ||
                !validScore(
                    match[2],
                    match[3]
                )
            ) {

                futureMatches.push({

                    teamA: match[0],

                    teamB: match[1]
                });
            }
        }
    }

    return futureMatches;
}


/* =========================================================
   CREATE FUTURE STATE
========================================================= */

function createFutureState() {

    const standings =
        calculateStandings();

    const state = {};

    for (const team of teams) {

        const current =
            standings.find(
                t => t.team === team
            );

        state[team] = {

            wins:
                current
                    ? current.wins
                    : 0,

            losses:
                current
                    ? current.losses
                    : 0,

            differential:
                current
                    ? current.differential
                    : 0
        };
    }

    return state;
}


/* =========================================================
   CLONE STATE
========================================================= */

function cloneState(state) {

    const copy = {};

    for (const team of teams) {

        copy[team] = {

            wins:
                state[team].wins,

            losses:
                state[team].losses,

            differential:
                state[team].differential
        };
    }

    return copy;
}


/* =========================================================
   APPLY FUTURE OUTCOME
========================================================= */

function applyFutureOutcome(
    state,
    match,
    scoreA,
    scoreB
) {

    const teamA =
        state[match.teamA];

    const teamB =
        state[match.teamB];

    teamA.differential +=
        scoreA - scoreB;

    teamB.differential +=
        scoreB - scoreA;

    if (scoreA > scoreB) {

        teamA.wins++;
        teamB.losses++;

    } else {

        teamB.wins++;
        teamA.losses++;
    }
}


/* =========================================================
   RANK STATE
========================================================= */

function rankState(state) {

    const ranking =
        teams.map(team => ({

            team,

            wins:
                state[team].wins,

            losses:
                state[team].losses,

            differential:
                state[team].differential
        }));

    return sortStandings(
        ranking
    );
}


/* =========================================================
   REMAINING GAME COUNT LOOKUP
========================================================= */

function buildRemainingGameCounts(
    futureMatches
) {

    const matchCount =
        futureMatches.length;

    const counts = {};

    for (const team of teams) {

        counts[team] =
            new Array(
                matchCount + 1
            ).fill(0);
    }

    for (
        let i = matchCount - 1;
        i >= 0;
        i--
    ) {

        const match =
            futureMatches[i];

        for (const team of teams) {

            counts[team][i] =
                counts[team][i + 1] +
                (
                    match.teamA === team ||
                    match.teamB === team
                        ? 1
                        : 0
                );
        }
    }

    return counts;
}


/* =========================================================
   TARGET TEAM RANGE
========================================================= */

function getTargetRange(
    state,
    targetTeam,
    remainingGameCounts,
    startIndex
) {

    const remaining =
        remainingGameCounts[
            targetTeam
        ][startIndex];

    const current =
        state[targetTeam];

    return {

        team: targetTeam,

        minWins:
            current.wins,

        maxWins:
            current.wins +
            remaining,

        minDifferential:
            current.differential -
            remaining * 3,

        maxDifferential:
            current.differential +
            remaining * 3
    };
}


/* =========================================================
   OPPONENT RANGE
========================================================= */

function getOpponentRange(
    state,
    opponent,
    remainingGameCounts,
    startIndex
) {

    const remaining =
        remainingGameCounts[
            opponent
        ][startIndex];

    const current =
        state[opponent];

    return {

        minWins:
            current.wins,

        maxWins:
            current.wins +
            remaining,

        minDifferential:
            current.differential -
            remaining * 3,

        maxDifferential:
            current.differential +
            remaining * 3
    };
}


/* =========================================================
   DEFINITELY ABOVE TARGET
========================================================= */

function definitelyAboveTarget(
    opponentRange,
    targetRange,
    opponent,
    targetTeam
) {

    if (
        opponentRange.minWins >
        targetRange.maxWins
    ) {
        return true;
    }

    if (
        opponentRange.minWins ===
        targetRange.maxWins
    ) {

        if (
            opponentRange.minDifferential >
            targetRange.maxDifferential
        ) {
            return true;
        }

        if (
            opponentRange.minDifferential ===
            targetRange.maxDifferential
        ) {

            return (
                opponent.localeCompare(
                    targetTeam
                ) < 0
            );
        }
    }

    return false;
}


/* =========================================================
   POSSIBLY ABOVE TARGET
========================================================= */

function possiblyAboveTarget(
    opponentRange,
    targetRange,
    opponent,
    targetTeam
) {

    if (
        opponentRange.maxWins >
        targetRange.minWins
    ) {
        return true;
    }

    if (
        opponentRange.maxWins ===
        targetRange.minWins
    ) {

        if (
            opponentRange.maxDifferential >
            targetRange.minDifferential
        ) {
            return true;
        }

        if (
            opponentRange.maxDifferential ===
            targetRange.minDifferential
        ) {

            return (
                opponent.localeCompare(
                    targetTeam
                ) < 0
            );
        }
    }

    return false;
}


/* =========================================================
   EXACT SEED FEASIBILITY
========================================================= */

function canTeamFinishAtSeed(
    targetTeam,
    targetSeed,
    startingState,
    futureMatches,
    remainingGameCounts
) {

    const memo = new Map();

    function makeStateKey(
        index,
        state
    ) {

        let key =
            index + "|";

        for (const team of teams) {

            key +=
                state[team].wins +
                "," +
                state[team].differential +
                ";";
        }

        return key;
    }

    function search(
        matchIndex,
        state
    ) {

        if (
            matchIndex >=
            futureMatches.length
        ) {

            const ranking =
                rankState(state);

            const position =
                ranking.findIndex(
                    team =>
                        team.team ===
                        targetTeam
                );

            return (
                position + 1 ===
                targetSeed
            );
        }

        const key =
            makeStateKey(
                matchIndex,
                state
            );

        if (memo.has(key)) {
            return memo.get(key);
        }

        const targetRange =
            getTargetRange(
                state,
                targetTeam,
                remainingGameCounts,
                matchIndex
            );

        let definitelyAbove = 0;
        let possiblyAbove = 0;

        for (const opponent of teams) {

            if (
                opponent ===
                targetTeam
            ) {
                continue;
            }

            const opponentRange =
                getOpponentRange(
                    state,
                    opponent,
                    remainingGameCounts,
                    matchIndex
                );

            if (
                definitelyAboveTarget(
                    opponentRange,
                    targetRange,
                    opponent,
                    targetTeam
                )
            ) {
                definitelyAbove++;
            }

            if (
                possiblyAboveTarget(
                    opponentRange,
                    targetRange,
                    opponent,
                    targetTeam
                )
            ) {
                possiblyAbove++;
            }
        }

        const neededAbove =
            targetSeed - 1;

        if (
            definitelyAbove >
            neededAbove
        ) {

            memo.set(
                key,
                false
            );

            return false;
        }

        if (
            possiblyAbove <
            neededAbove
        ) {

            memo.set(
                key,
                false
            );

            return false;
        }

        const match =
            futureMatches[
                matchIndex
            ];

        for (
            const score
            of POSSIBLE_SCORES
        ) {

            const nextState =
                cloneState(state);

            applyFutureOutcome(
                nextState,
                match,
                score[0],
                score[1]
            );

            if (
                search(
                    matchIndex + 1,
                    nextState
                )
            ) {

                memo.set(
                    key,
                    true
                );

                return true;
            }
        }

        memo.set(
            key,
            false
        );

        return false;
    }

    return search(
        0,
        cloneState(startingState)
    );
}


/* =========================================================
   CALCULATE ALL POSSIBLE SEEDS
========================================================= */

function calculatePossibleSeeds() {

    const futureMatches =
        getFutureMatches();

    const startingState =
        createFutureState();

    const remainingGameCounts =
        buildRemainingGameCounts(
            futureMatches
        );

    const possibleSeeds = {};
    const minSeed = {};
    const maxSeed = {};

    for (const team of teams) {

        possibleSeeds[team] =
            new Set();

        minSeed[team] =
            Infinity;

        maxSeed[team] =
            -Infinity;
    }

    if (
        futureMatches.length === 0
    ) {

        const ranking =
            rankState(
                startingState
            );

        ranking.forEach(
            (team, index) => {

                const seed =
                    index + 1;

                possibleSeeds[
                    team.team
                ].add(seed);

                minSeed[
                    team.team
                ] = seed;

                maxSeed[
                    team.team
                ] = seed;
            }
        );

        return {
            possibleSeeds,
            minSeed,
            maxSeed
        };
    }

    for (const team of teams) {

        for (
            let seed = 1;
            seed <= teams.length;
            seed++
        ) {

            const possible =
                canTeamFinishAtSeed(
                    team,
                    seed,
                    startingState,
                    futureMatches,
                    remainingGameCounts
                );

            if (possible) {

                possibleSeeds[
                    team
                ].add(seed);

                minSeed[
                    team
                ] =
                    Math.min(
                        minSeed[team],
                        seed
                    );

                maxSeed[
                    team
                ] =
                    Math.max(
                        maxSeed[team],
                        seed
                    );
            }
        }
    }

    return {
        possibleSeeds,
        minSeed,
        maxSeed
    };
}


/* =========================================================
   POSSIBLE SEED CACHE
========================================================= */

function getPossibleSeedData() {

    if (
        possibleSeedDataDirty ||
        !possibleSeedDataCache
    ) {

        possibleSeedDataCache =
            calculatePossibleSeeds();

        possibleSeedDataDirty =
            false;
    }

    return possibleSeedDataCache;
}


function markPossibleSeedDataDirty() {

    possibleSeedDataDirty =
        true;

    updateCalculateButtonState();
}


/* =========================================================
   CALCULATE STANDINGS BUTTON
========================================================= */

function updateCalculateButtonState() {

    const button =
        document.getElementById(
            "calculateStandingsBtn"
        );

    if (!button) {
        return;
    }

    if (!possibleSeedDataCache) {

        button.textContent =
            "Calculate Standings";

        button.classList.remove(
            "stale"
        );

        button.disabled = false;

    } else if (
        possibleSeedDataDirty
    ) {

        button.textContent =
            "Recalculate Standings (scores changed)";

        button.classList.add(
            "stale"
        );

        button.disabled = false;

    } else {

        button.textContent =
            "Standings Up To Date";

        button.classList.remove(
            "stale"
        );

        button.disabled = true;
    }
}


function initializeCalculateButton() {

    const button =
        document.getElementById(
            "calculateStandingsBtn"
        );

    if (!button) {
        return;
    }

    button.addEventListener(
        "click",
        () => {
            recalculateAndRender();
        }
    );

    updateCalculateButtonState();
}


/* =========================================================
   SEED LIST TEXT
========================================================= */

function getSeedListText(
    possibleSeeds
) {

    if (
        !possibleSeeds ||
        possibleSeeds.size === 0
    ) {
        return "—";
    }

    return Array.from(
        possibleSeeds
    )
        .sort(
            (a, b) => a - b
        )
        .join(", ");
}


/* =========================================================
   EXACT PLAYOFF STATUS
========================================================= */

function calculateRobustStatus(
    teamName,
    possibleSeedData
) {

    const seeds =
        possibleSeedData
            .possibleSeeds[
                teamName
            ];

    if (
        !seeds ||
        seeds.size === 0
    ) {
        return "CONTENTION";
    }

    let canMakePlayoffs =
        false;

    let canMissPlayoffs =
        false;

    for (const seed of seeds) {

        if (seed <= 8) {

            canMakePlayoffs =
                true;

        } else {

            canMissPlayoffs =
                true;
        }
    }

    if (
        canMakePlayoffs &&
        !canMissPlayoffs
    ) {
        return "CLINCHED";
    }

    if (
        !canMakePlayoffs &&
        canMissPlayoffs
    ) {
        return "ELIMINATED";
    }

    return "CONTENTION";
}


/* =========================================================
   TEAM STATUS
========================================================= */

function getTeamStatus(
    teamName,
    standings,
    possibleSeedData
) {

    return calculateRobustStatus(
        teamName,
        possibleSeedData
    );
}


/* =========================================================
   UPDATE STANDINGS
========================================================= */

function updateStandings(
    possibleSeedData
) {

    const body =
        document.getElementById(
            "standingsBody"
        );

    if (!body) {
        return;
    }

    const standings =
        calculateStandings();

    body.innerHTML = "";

    standings.forEach(
        (team, index) => {

            if (index === 8) {

                const cutoff =
                    document.createElement(
                        "tr"
                    );

                cutoff.className =
                    "playoff-cutoff";

                cutoff.innerHTML = `
                    <td colspan="7">
                        PLAYOFF CUTOFF • TOP 8 QUALIFY
                    </td>
                `;

                body.appendChild(
                    cutoff
                );
            }

            const row =
                document.createElement(
                    "tr"
                );

            if (index < 8) {
                row.classList.add(
                    "playoff-team"
                );
            }

            const differential =
                team.differential;

            const differentialText =
                differential > 0
                    ? "+" + differential
                    : String(
                        differential
                    );

            let seedText = "—";

            let status =
                "NOT CALCULATED";

            let statusClass =
                "status-pending";

            if (
                possibleSeedData
            ) {

                status =
                    getTeamStatus(
                        team.team,
                        standings,
                        possibleSeedData
                    );

                statusClass =
                    "status-contention";

                if (
                    status ===
                    "CLINCHED"
                ) {

                    statusClass =
                        "status-clinched";
                }

                if (
                    status ===
                    "ELIMINATED"
                ) {

                    statusClass =
                        "status-eliminated";
                }

                const seeds =
                    possibleSeedData
                        .possibleSeeds[
                            team.team
                        ];

                seedText =
                    getSeedListText(
                        seeds
                    );
            }

            row.innerHTML = `
                <td>${index + 1}</td>

                <td class="team-name">
                    ${team.team}
                </td>

                <td>
                    ${team.wins}
                </td>

                <td>
                    ${team.losses}
                </td>

                <td>
                    ${differentialText}
                </td>

                <td>
                    <span
                        class="possible-seeds"
                        title="All possible final seeds as of the last time Calculate Standings was pressed"
                    >
                        ${seedText}
                    </span>
                </td>

                <td>
                    <span
                        class="status-badge ${statusClass}"
                    >
                        ${status}
                    </span>
                </td>
            `;

            body.appendChild(
                row
            );
        }
    );
}


/* =========================================================
   WEEK BUTTONS
========================================================= */

function renderWeekButtons() {

    const container =
        document.getElementById(
            "weekButtons"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    weeks.forEach(
        week => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "week-button";

            if (
                week.number ===
                currentWeek
            ) {

                button.classList.add(
                    "active"
                );
            }

            if (week.locked) {

                button.classList.add(
                    "locked"
                );
            }

            button.textContent =
                "Week " +
                week.number +
                (
                    week.locked
                        ? " 🔒"
                        : ""
                );

            button.addEventListener(
                "click",
                () => {

                    currentWeek =
                        week.number;

                    renderWeekButtons();

                    renderWeek();
                }
            );

            container.appendChild(
                button
            );
        }
    );
}


/* =========================================================
   RENDER WEEK
========================================================= */

function renderWeek() {

    const week =
        weeks[currentWeek - 1];

    if (!week) {
        return;
    }

    const title =
        document.getElementById(
            "weekTitle"
        );

    const dates =
        document.getElementById(
            "weekDates"
        );

    const status =
        document.getElementById(
            "weekStatus"
        );

    const matches =
        document.getElementById(
            "matches"
        );

    if (title) {

        title.textContent =
            "Week " +
            week.number;
    }

    if (dates) {

        dates.textContent =
            week.dates;
    }

    if (matches) {

        matches.innerHTML = "";
    }

    if (status) {

        if (week.locked) {

            status.textContent =
                "🔒 LOCKED";

            status.className =
                "week-status locked";

        } else {

            status.textContent =
                "● OPEN";

            status.className =
                "week-status open";
        }
    }

    if (!matches) {
        return;
    }

    week.matches.forEach(
        (match, index) => {

            renderMatch(
                match,
                index,
                week.locked,
                matches
            );
        }
    );

    renderControls();
}


/* =========================================================
   MATCH
========================================================= */

function renderMatch(
    match,
    matchIndex,
    locked,
    container
) {

    const matchDiv =
        document.createElement(
            "div"
        );

    matchDiv.className =
        "match";

    const teamA =
        document.createElement(
            "div"
        );

    const teamB =
        document.createElement(
            "div"
        );

    teamA.className =
        "match-team";

    teamB.className =
        "match-team";

    teamA.textContent =
        match[0];

    teamB.textContent =
        match[1];

    const scoreArea =
        document.createElement(
            "div"
        );

    scoreArea.className =
        "score-area";

    if (locked) {

        const scoreA =
            Number(match[2]);

        const scoreB =
            Number(match[3]);

        const scoreElementA =
            document.createElement(
                "span"
            );

        const scoreElementB =
            document.createElement(
                "span"
            );

        scoreElementA.className =
            "score";

        scoreElementB.className =
            "score";

        scoreElementA.textContent =
            scoreA;

        scoreElementB.textContent =
            scoreB;

        if (
            scoreA > scoreB
        ) {

            teamA.classList.add(
                "winner"
            );

            teamB.classList.add(
                "loser"
            );

            scoreElementA.classList.add(
                "winner-score"
            );

        } else {

            teamB.classList.add(
                "winner"
            );

            teamA.classList.add(
                "loser"
            );

            scoreElementB.classList.add(
                "winner-score"
            );
        }

        scoreArea.appendChild(
            scoreElementA
        );

        const dash =
            document.createElement(
                "span"
            );

        dash.textContent =
            "-";

        scoreArea.appendChild(
            dash
        );

        scoreArea.appendChild(
            scoreElementB
        );

    } else {

        const inputA =
            document.createElement(
                "input"
            );

        const inputB =
            document.createElement(
                "input"
            );

        inputA.type =
            "number";

        inputB.type =
            "number";

        inputA.min = "0";
        inputA.max = "3";

        inputB.min = "0";
        inputB.max = "3";

        inputA.className =
            "score-input";

        inputB.className =
            "score-input";

        if (
            match.length >= 4
        ) {

            inputA.value =
                match[2];

            inputB.value =
                match[3];
        }

        function updateWinnerDisplay() {

            teamA.classList.remove(
                "winner",
                "loser"
            );

            teamB.classList.remove(
                "winner",
                "loser"
            );

            inputA.classList.remove(
                "invalid-score"
            );

            inputB.classList.remove(
                "invalid-score"
            );

            if (
                inputA.value === "" ||
                inputB.value === ""
            ) {
                return;
            }

            const a =
                Number(inputA.value);

            const b =
                Number(inputB.value);

            if (
                !validScore(a, b)
            ) {

                inputA.classList.add(
                    "invalid-score"
                );

                inputB.classList.add(
                    "invalid-score"
                );

                return;
            }

            if (a > b) {

                teamA.classList.add(
                    "winner"
                );

                teamB.classList.add(
                    "loser"
                );

            } else {

                teamB.classList.add(
                    "winner"
                );

                teamA.classList.add(
                    "loser"
                );
            }
        }

        function saveMatch() {

            const scoreA =
                inputA.value;

            const scoreB =
                inputB.value;

            if (
                !validScore(
                    scoreA,
                    scoreB
                )
            ) {

                inputA.classList.add(
                    "invalid-score"
                );

                inputB.classList.add(
                    "invalid-score"
                );

                alert(
                    "Invalid score.\n\n" +
                    "The two scores must total exactly 3.\n\n" +
                    "Valid results:\n" +
                    "3 - 0\n" +
                    "2 - 1\n" +
                    "1 - 2\n" +
                    "0 - 3"
                );

                return;
            }

            weeks[
                currentWeek - 1
            ].matches[
                matchIndex
            ][2] =
                Number(scoreA);

            weeks[
                currentWeek - 1
            ].matches[
                matchIndex
            ][3] =
                Number(scoreB);

            saveScoresToStorage();

            markPossibleSeedDataDirty();

            renderWeek();

            updateStandings(
                possibleSeedDataCache
            );
        }

        inputA.addEventListener(
            "input",
            updateWinnerDisplay
        );

        inputB.addEventListener(
            "input",
            updateWinnerDisplay
        );

        inputA.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    saveMatch();
                }
            }
        );

        inputB.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    saveMatch();
                }
            }
        );

        scoreArea.appendChild(
            inputA
        );

        const dash =
            document.createElement(
                "span"
            );

        dash.textContent =
            "-";

        scoreArea.appendChild(
            dash
        );

        scoreArea.appendChild(
            inputB
        );

        updateWinnerDisplay();
    }

    matchDiv.appendChild(
        teamA
    );

    matchDiv.appendChild(
        scoreArea
    );

    matchDiv.appendChild(
        teamB
    );

    container.appendChild(
        matchDiv
    );
}


/* =========================================================
   CONTROLS
========================================================= */

function renderControls() {

    const controls =
        document.getElementById(
            "weekControls"
        );

    if (!controls) {
        return;
    }

    controls.innerHTML = "";

    const week =
        weeks[currentWeek - 1];

    const message =
        document.createElement(
            "span"
        );

    message.className =
        "locked-message";

    if (week.locked) {

        message.textContent =
            "🔒 Results for this week are locked";

    } else {

        message.textContent =
            "Press Enter after entering a score to save that match";
    }

    controls.appendChild(
        message
    );
}


/* =========================================================
   RECALCULATE AND RENDER
========================================================= */

function recalculateAndRender() {

    const body =
        document.getElementById(
            "standingsBody"
        );

    const button =
        document.getElementById(
            "calculateStandingsBtn"
        );

    if (body) {

        body.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    style="text-align:center;"
                >
                    Calculating standings…
                    This can take up to a minute.
                </td>
            </tr>
        `;
    }

    if (button) {

        button.disabled = true;

        button.textContent =
            "Calculating…";
    }

    setTimeout(() => {

        const possibleSeedData =
            getPossibleSeedData();

        updateStandings(
            possibleSeedData
        );

        updateCalculateButtonState();

    }, 20);
}


/* =========================================================
   RESET
========================================================= */

function resetAllScores() {

    const confirmed =
        confirm(
            "Reset ALL editable match results?\n\n" +
            "Weeks 1-8 are locked and will not be changed.\n\n" +
            "All scores entered for Weeks 9-11 will be deleted."
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        STORAGE_KEY
    );

    for (const week of weeks) {

        if (week.locked) {
            continue;
        }

        for (
            const match
            of week.matches
        ) {

            match.length = 2;
        }
    }

    markPossibleSeedDataDirty();

    renderWeekButtons();

    renderWeek();

    updateStandings(
        possibleSeedDataCache
    );

    alert(
        "All editable scores have been reset.\n\n" +
        "Press Calculate Standings to refresh seeds and playoff status."
    );
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        buildFutureScheduleCache();

        loadSavedScores();

        initializeTabs();

        initializePokemonModal();

        renderTeamTabs();

        renderSelectedRoster();

        renderWeekButtons();

        renderWeek();

        updateStandings(
            possibleSeedDataCache
        );

        initializeCalculateButton();

        const resetButton =
            document.getElementById(
                "resetAll"
            );

        if (resetButton) {

            resetButton.addEventListener(
                "click",
                resetAllScores
            );
        }
    }
);