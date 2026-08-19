/* =========================================================
   POKÉMON DRAFT LEAGUE
   FAST NFL-STYLE CLINCH / ELIMINATION ANALYSIS
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
        locked: false,

        matches: [
            ["Great Lakes Glimmora", "Niagara Stampede"],
            ["New Braunfels Ninetails", "Amarillo Archaludon"],
            ["Texas State Disasters", "Florida Floettes"],
            ["Southern Tier Supporters", "Garden State Garchomps"],
            ["Colorado Avalugg", "Ontario Fightin' Palafin"],
            ["Durham Drills", "Houston Heat Wave"]
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

const STORAGE_KEY =
    "pokemonDraftLeagueScores";

const POSSIBLE_SCORES = [
    [3, 0],
    [2, 1],
    [1, 2],
    [0, 3]
];


/* =========================================================
   CACHED FUTURE SCHEDULE
========================================================= */

/*
    This is built ONCE.

    The old code repeatedly searched through every week
    for every scenario and every team.

    This cache eliminates that work.
*/

const futureScheduleCache = new Map();


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

function validScore(scoreA, scoreB) {

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


function sortStandings(
    standings
) {

    return standings.sort(
        (a, b) => {

            if (a.wins !== b.wins) {
                return b.wins - a.wins;
            }

            if (
                a.differential !==
                b.differential
            ) {

                return (
                    b.differential -
                    a.differential
                );
            }

            return a.team.localeCompare(
                b.team
            );
        }
    );
}


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
   TOP 8
========================================================= */

function isTeamCurrentlyTopEight(
    teamName,
    standings
) {

    const position =
        standings.findIndex(
            t => t.team === teamName
        );

    return (
        position >= 0 &&
        position < 8
    );
}


/* =========================================================
   REMAINING GAMES
========================================================= */

function getRemainingGames(
    teamName,
    afterWeek
) {

    const games = [];

    for (
        let w = afterWeek;
        w < weeks.length;
        w++
    ) {

        const week =
            weeks[w];

        for (
            const match of week.matches
        ) {

            if (
                match[0] === teamName ||
                match[1] === teamName
            ) {

                games.push(match);
            }
        }
    }

    return games;
}


/* =========================================================
   FAST MAXIMUM WINS
========================================================= */

function getMaximumPossibleWinsFast(
    teamName,
    standings,
    afterWeek
) {

    const team =
        standings.find(
            t => t.team === teamName
        );

    if (!team) {
        return -Infinity;
    }

    return (
        team.wins +
        getRemainingGameCount(
            teamName,
            afterWeek
        )
    );
}


/* =========================================================
   FAST MATHEMATICAL STATUS
========================================================= */

/*
    This is the NFL-style mathematical calculation.

    We don't simulate every possible future season.

    Instead we calculate:

        MAX WINS
        = current wins + every remaining game won

        MIN WINS
        = current wins

    A team is eliminated when eight opponents are
    mathematically guaranteed to finish above its maximum.

    A team is clinched when fewer than eight opponents
    can mathematically finish above its minimum.

    Differential is used when the win totals are tied.

    This is dramatically faster than recursively simulating
    every future matchup.
*/

function calculateFastTeamStatus(
    teamName,
    standings,
    afterWeek
) {

    const team =
        standings.find(
            t => t.team === teamName
        );

    if (!team) {
        return "CONTENTION";
    }

    const remaining =
        getRemainingGameCount(
            teamName,
            afterWeek
        );


    /* =====================================================
       NO GAMES LEFT
    ===================================================== */

    if (remaining === 0) {

        return isTeamCurrentlyTopEight(
            teamName,
            standings
        )
            ? "CLINCHED"
            : "ELIMINATED";
    }


    /* =====================================================
       MAXIMUM POSSIBLE WINS
    ===================================================== */

    const maximumWins =
        team.wins +
        remaining;


    /* =====================================================
       MINIMUM POSSIBLE WINS
    ===================================================== */

    const minimumWins =
        team.wins;


    /* =====================================================
       ELIMINATION TEST
    ===================================================== */

    let guaranteedAboveMaximum = 0;

    for (
        const opponent of standings
    ) {

        if (
            opponent.team === teamName
        ) {
            continue;
        }

        const opponentMaximum =
            getMaximumPossibleWinsFast(
                opponent.team,
                standings,
                afterWeek
            );

        /*
            If opponent's minimum already exceeds
            our maximum, opponent is definitely above us.
        */

        const opponentMinimum =
            opponent.wins;

        if (
            opponentMinimum >
            maximumWins
        ) {

            guaranteedAboveMaximum++;

            continue;
        }

        /*
            If tied in wins, differential gives us
            a possible tie-break advantage/disadvantage.

            We use the current differential as the
            mathematical baseline.
        */

        if (
            opponentMinimum === maximumWins &&
            opponent.differential >
            team.differential
        ) {

            guaranteedAboveMaximum++;
        }
    }

    if (
        guaranteedAboveMaximum >= 8
    ) {

        return "ELIMINATED";
    }


    /* =====================================================
       CLINCH TEST
    ===================================================== */

    let possibleAboveMinimum = 0;

    for (
        const opponent of standings
    ) {

        if (
            opponent.team === teamName
        ) {
            continue;
        }

        const opponentMaximum =
            getMaximumPossibleWinsFast(
                opponent.team,
                standings,
                afterWeek
            );

        /*
            Opponent can finish with more wins.
        */

        if (
            opponentMaximum >
            minimumWins
        ) {

            possibleAboveMinimum++;

            continue;
        }

        /*
            Same wins but opponent has better
            current differential.
        */

        if (
            opponentMaximum === minimumWins &&
            opponent.differential >
            team.differential
        ) {

            possibleAboveMinimum++;
        }
    }

    /*
        If fewer than eight teams can finish above
        us, playoff qualification is mathematically
        guaranteed.
    */

    if (
        possibleAboveMinimum < 8
    ) {

        return "CLINCHED";
    }


    return "CONTENTION";
}


/* =========================================================
   CURRENT TEAM STATUS
========================================================= */

function getCurrentTeamStatus(
    teamName,
    standings
) {

    /*
        Find the last completed week.
    */

    let completedThrough = 0;

    for (const week of weeks) {

        if (
            isWeekComplete(
                week.number
            )
        ) {

            completedThrough =
                week.number;

        } else {

            break;
        }
    }


    /*
        If all 11 weeks are complete,
        simply use the final standings.
    */

    if (
        completedThrough >= weeks.length
    ) {

        return isTeamCurrentlyTopEight(
            teamName,
            standings
        )
            ? "CLINCHED"
            : "ELIMINATED";
    }


    return calculateFastTeamStatus(
        teamName,
        standings,
        completedThrough
    );
}


/* =========================================================
   STANDINGS DISPLAY
========================================================= */

function updateStandings() {

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
        function(team, index) {

            if (index === 8) {

                const cutoff =
                    document.createElement(
                        "tr"
                    );

                cutoff.className =
                    "playoff-cutoff";

                cutoff.innerHTML = `
                    <td colspan="6">
                        PLAYOFF CUTOFF
                        • TOP 8 QUALIFY
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
                    : String(differential);

            const status =
                getCurrentTeamStatus(
                    team.team,
                    standings
                );

            let statusClass =
                "status-contention";

            if (
                status === "CLINCHED"
            ) {

                statusClass =
                    "status-clinched";
            }

            if (
                status === "ELIMINATED"
            ) {

                statusClass =
                    "status-eliminated";
            }

            row.innerHTML = `
                <td>${index + 1}</td>

                <td class="team-name">
                    ${team.team}
                </td>

                <td>${team.wins}</td>

                <td>${team.losses}</td>

                <td>${differentialText}</td>

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
   STANDINGS THROUGH WEEK
========================================================= */

function calculateStandingsThroughWeek(
    weekNumber,
    scenarioMatches = null
) {

    const standings =
        createEmptyStandings();

    for (
        let w = 0;
        w < weekNumber;
        w++
    ) {

        const week =
            weeks[w];

        if (
            scenarioMatches &&
            week.number === weekNumber
        ) {

            for (
                const match of scenarioMatches
            ) {

                applyMatch(
                    standings,
                    match
                );
            }

        } else {

            for (
                const match of week.matches
            ) {

                applyMatch(
                    standings,
                    match
                );
            }
        }
    }

    return sortStandings(
        standings
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
        function(week) {

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
                function() {

                    currentWeek =
                        week.number;

                    renderWeekButtons();

                    renderWeek();

                    analyzeCurrentWeekScenarios();
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
            "Week " + week.number;
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
        function(match, index) {

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
   RENDER MATCH
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


    /* =====================================================
       LOCKED
    ===================================================== */

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

        if (scoreA > scoreB) {

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
    }


    /* =====================================================
       OPEN
    ===================================================== */

    else {

        const inputA =
            document.createElement(
                "input"
            );

        const inputB =
            document.createElement(
                "input"
            );

        inputA.type = "number";
        inputB.type = "number";

        inputA.min = "0";
        inputA.max = "3";

        inputB.min = "0";
        inputB.max = "3";

        inputA.className =
            "score-input";

        inputB.className =
            "score-input";

        if (match.length >= 4) {

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

            if (!validScore(a, b)) {

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

            weeks[currentWeek - 1]
                .matches[matchIndex][2] =
                Number(scoreA);

            weeks[currentWeek - 1]
                .matches[matchIndex][3] =
                Number(scoreB);

            saveScoresToStorage();

            updateStandings();

            renderWeek();

            analyzeCurrentWeekScenarios();
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
            function(event) {

                if (
                    event.key === "Enter"
                ) {

                    saveMatch();
                }
            }
        );

        inputB.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter"
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
   BUILD ONE SCENARIO
========================================================= */

/*
    Instead of creating an array containing ALL 4096
    scenarios, create one when needed.

    This saves memory and is substantially faster.
*/

function buildScenarioFromNumber(
    scenarioNumber,
    matchCount
) {

    let number =
        scenarioNumber;

    const scenario = [];

    for (
        let matchIndex = 0;
        matchIndex < matchCount;
        matchIndex++
    ) {

        const option =
            number %
            POSSIBLE_SCORES.length;

        number =
            Math.floor(
                number /
                POSSIBLE_SCORES.length
            );

        scenario.push(
            POSSIBLE_SCORES[option]
        );
    }

    return scenario;
}


/* =========================================================
   BUILD SCENARIO MATCHES
========================================================= */

function buildScenarioMatches(
    week,
    scenario
) {

    return week.matches.map(
        (match, index) => {

            return [
                match[0],
                match[1],
                scenario[index][0],
                scenario[index][1]
            ];
        }
    );
}


/* =========================================================
   SCENARIO STATUS
========================================================= */

function analyzeTeamAfterScenario(
    teamName,
    standingsAfterWeek,
    weekNumber
) {

    /*
        Use the FAST mathematical calculation.

        Future weeks are NOT brute-forced.
    */

    return calculateFastTeamStatus(
        teamName,
        standingsAfterWeek,
        weekNumber
    );
}


/* =========================================================
   ANALYZE ONE SCENARIO
========================================================= */

function analyzeScenario(
    week,
    scenario
) {

    const scenarioMatches =
        buildScenarioMatches(
            week,
            scenario
        );

    const standings =
        calculateStandingsThroughWeek(
            week.number,
            scenarioMatches
        );

    const results = [];

    for (
        const team of teams
    ) {

        const status =
            analyzeTeamAfterScenario(
                team,
                standings,
                week.number
            );

        if (
            status === "CLINCHED" ||
            status === "ELIMINATED"
        ) {

            const teamStanding =
                standings.find(
                    t => t.team === team
                );

            results.push({
                team,
                status,
                wins:
                    teamStanding.wins,
                losses:
                    teamStanding.losses,
                differential:
                    teamStanding.differential
            });
        }
    }

    return {
        results,
        standings
    };
}


/* =========================================================
   GROUP RESULT FOR A TEAM
========================================================= */

function getTeamWeekResult(
    teamName,
    week,
    scenario
) {

    for (
        let m = 0;
        m < week.matches.length;
        m++
    ) {

        const match =
            week.matches[m];

        if (
            match[0] !== teamName &&
            match[1] !== teamName
        ) {
            continue;
        }

        if (
            match[0] === teamName
        ) {

            return (
                scenario[m][0] +
                "-" +
                scenario[m][1]
            );
        }

        return (
            scenario[m][1] +
            "-" +
            scenario[m][0]
        );
    }

    return null;
}


/* =========================================================
   ANALYZE CURRENT WEEK
========================================================= */

function analyzeCurrentWeekScenarios() {

    const week =
        weeks[currentWeek - 1];

    const countElement =
        document.getElementById(
            "scenarioCount"
        );

    const clinchCountElement =
        document.getElementById(
            "clinchCount"
        );

    const elimCountElement =
        document.getElementById(
            "elimCount"
        );

    const resultsElement =
        document.getElementById(
            "scenarioResults"
        );

    const weekNumberElement =
        document.getElementById(
            "scenarioWeekNumber"
        );

    if (
        !week ||
        !countElement ||
        !clinchCountElement ||
        !elimCountElement ||
        !resultsElement
    ) {

        return;
    }

    if (weekNumberElement) {

        weekNumberElement.textContent =
            week.number;
    }


    /* =====================================================
       LOCKED
    ===================================================== */

    if (week.locked) {

        countElement.textContent =
            "—";

        clinchCountElement.textContent =
            "—";

        elimCountElement.textContent =
            "—";

        resultsElement.innerHTML = `
            <div class="no-scenarios">
                Week ${week.number} is locked.
                Scenario analysis is available
                for open weeks.
            </div>
        `;

        return;
    }


    /* =====================================================
       PREVIOUS WEEK REQUIRED
    ===================================================== */

    if (
        !canAnalyzeWeek(
            week.number
        )
    ) {

        countElement.textContent =
            "—";

        clinchCountElement.textContent =
            "—";

        elimCountElement.textContent =
            "—";

        resultsElement.innerHTML = `
            <div class="no-scenarios">
                Week ${week.number} scenario analysis
                is locked until all Week
                ${week.number - 1}
                matches have been submitted.
            </div>
        `;

        return;
    }


    /* =====================================================
       4096 CURRENT-WEEK SCENARIOS
    ===================================================== */

    const total =
        Math.pow(
            POSSIBLE_SCORES.length,
            week.matches.length
        );

    countElement.textContent =
        total.toLocaleString();


    /*
        Instead of storing:

            4096 scenarios

        we only store the COUNTS.
    */

    const teamEvents =
        new Map();

    for (const team of teams) {

        teamEvents.set(
            team,
            {
                clinch: {
                    "3-0": 0,
                    "2-1": 0,
                    "1-2": 0,
                    "0-3": 0
                },

                elimination: {
                    "3-0": 0,
                    "2-1": 0,
                    "1-2": 0,
                    "0-3": 0
                }
            }
        );
    }


    let totalClinchEvents = 0;
    let totalEliminationEvents = 0;


    /* =====================================================
       PROCESS ONE SCENARIO AT A TIME
    ===================================================== */

    for (
        let scenarioNumber = 0;
        scenarioNumber < total;
        scenarioNumber++
    ) {

        const scenario =
            buildScenarioFromNumber(
                scenarioNumber,
                week.matches.length
            );

        const analysis =
            analyzeScenario(
                week,
                scenario
            );

        for (
            const event of analysis.results
        ) {

            const result =
                getTeamWeekResult(
                    event.team,
                    week,
                    scenario
                );

            if (!result) {
                continue;
            }

            const storage =
                teamEvents.get(
                    event.team
                );

            if (
                event.status ===
                "CLINCHED"
            ) {

                storage.clinch[result]++;

                totalClinchEvents++;

            } else if (
                event.status ===
                "ELIMINATED"
            ) {

                storage.elimination[result]++;

                totalEliminationEvents++;
            }
        }
    }


    /* =====================================================
       SUMMARY
    ===================================================== */

    clinchCountElement.textContent =
        totalClinchEvents.toLocaleString();

    elimCountElement.textContent =
        totalEliminationEvents.toLocaleString();


    /* =====================================================
       RENDER
    ===================================================== */

    renderScenarioResults(
        teamEvents
    );
}


/* =========================================================
   RENDER SCENARIO RESULTS
========================================================= */

function renderScenarioResults(
    teamEvents
) {

    const container =
        document.getElementById(
            "scenarioResults"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    let renderedSomething =
        false;

    for (
        const team of teams
    ) {

        const events =
            teamEvents.get(team);

        if (!events) {
            continue;
        }


        /* =================================================
           CLINCH
        ================================================= */

        const clinchTotal =
            Object.values(
                events.clinch
            ).reduce(
                (sum, value) =>
                    sum + value,
                0
            );

        if (
            clinchTotal > 0
        ) {

            renderedSomething = true;

            container.appendChild(
                createScenarioTeamBox(
                    team,
                    "CLINCHED",
                    events.clinch,
                    clinchTotal
                )
            );
        }


        /* =================================================
           ELIMINATION
        ================================================= */

        const eliminationTotal =
            Object.values(
                events.elimination
            ).reduce(
                (sum, value) =>
                    sum + value,
                0
            );

        if (
            eliminationTotal > 0
        ) {

            renderedSomething = true;

            container.appendChild(
                createScenarioTeamBox(
                    team,
                    "ELIMINATED",
                    events.elimination,
                    eliminationTotal
                )
            );
        }
    }


    if (!renderedSomething) {

        container.innerHTML = `
            <div class="no-scenarios">
                No Week ${currentWeek}
                result combination causes a
                clinch or elimination.
            </div>
        `;
    }
}


/* =========================================================
   SCENARIO TEAM BOX
========================================================= */

function createScenarioTeamBox(
    team,
    type,
    counts,
    total
) {

    const box =
        document.createElement(
            "div"
        );

    box.className =
        "team-scenario " +
        (
            type === "CLINCHED"
                ? "clinch"
                : "elimination"
        );


    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.createElement(
            "div"
        );

    header.className =
        "team-scenario-header";

    const name =
        document.createElement(
            "div"
        );

    name.className =
        "team-scenario-name";

    name.textContent =
        team;

    const badge =
        document.createElement(
            "span"
        );

    badge.className =
        "scenario-type " +
        (
            type === "CLINCHED"
                ? "clinch"
                : "elimination"
        );

    badge.textContent =
        type;

    header.appendChild(
        name
    );

    header.appendChild(
        badge
    );

    box.appendChild(
        header
    );


    /* =====================================================
       DESCRIPTION
    ===================================================== */

    const description =
        document.createElement(
            "div"
        );

    description.className =
        "scenario-description";

    description.textContent =
        `${total.toLocaleString()} `
        + `possible Week ${currentWeek} `
        + `result combinations `;

    if (
        type === "CLINCHED"
    ) {

        description.textContent +=
            "clinch this team for the playoffs.";

    } else {

        description.textContent +=
            "eliminate this team from the playoffs.";
    }

    box.appendChild(
        description
    );


    /* =====================================================
       FOUR RESULT BUTTONS
    ===================================================== */

    const resultContainer =
        document.createElement(
            "div"
        );

    resultContainer.className =
        "scenario-result-groups";

    const resultOrder = [
        "3-0",
        "2-1",
        "1-2",
        "0-3"
    ];

    for (
        const result of resultOrder
    ) {

        const count =
            counts[result] || 0;

        const button =
            document.createElement(
                "button"
            );

        button.type =
            "button";

        button.className =
            "scenario-result-button " +
            (
                type === "CLINCHED"
                    ? "clinch-button"
                    : "elimination-button"
            );

        if (
            count === 0
        ) {

            button.classList.add(
                "zero-scenario"
            );
        }

        button.innerHTML = `
            <span class="scenario-result-score">
                ${result}
            </span>

            <span class="scenario-result-count">
                ${count.toLocaleString()}
                scenario${count === 1 ? "" : "s"}
            </span>
        `;

        resultContainer.appendChild(
            button
        );
    }

    box.appendChild(
        resultContainer
    );

    return box;
}


/* =========================================================
   RESET
========================================================= */

function resetAllScores() {

    const confirmed =
        confirm(
            "Reset ALL editable match results?\n\n" +
            "Weeks 1-7 are locked and will not be changed.\n\n" +
            "All scores entered for Weeks 8-11 will be deleted."
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        STORAGE_KEY
    );

    for (
        const week of weeks
    ) {

        if (week.locked) {
            continue;
        }

        for (
            const match of week.matches
        ) {

            match.length = 2;
        }
    }

    updateStandings();

    renderWeekButtons();

    renderWeek();

    analyzeCurrentWeekScenarios();

    alert(
        "All editable scores have been reset."
    );
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
            Build the future schedule cache FIRST.
        */

        buildFutureScheduleCache();

        loadSavedScores();

        updateStandings();

        renderWeekButtons();

        renderWeek();

        analyzeCurrentWeekScenarios();

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