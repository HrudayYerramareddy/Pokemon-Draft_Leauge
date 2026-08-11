/* =========================================================
   POKEMON DRAFT LEAGUE
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


/*
 * Score format:
 *
 * [team 1, team 2, score 1, score 2]
 *
 * Weeks 1-6:
 * LOCKED
 *
 * Weeks 7-11:
 * OPEN
 */


/* =========================================================
   WEEKS
   ========================================================= */

const weeks = [

    /* =====================================================
       WEEK 1
       ===================================================== */

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


    /* =====================================================
       WEEK 2
       ===================================================== */

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


    /* =====================================================
       WEEK 3
       ===================================================== */

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


    /* =====================================================
       WEEK 4
       ===================================================== */

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


    /* =====================================================
       WEEK 5
       ===================================================== */

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


    /* =====================================================
       WEEK 6
       ===================================================== */

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


    /* =====================================================
       WEEK 7
       ===================================================== */

    {
        number: 7,
        dates: "August 14-16",
        locked: false,

        matches: [
            ["Great Lakes Glimmora", "New Braunfels Ninetails"],
            ["Texas State Disasters", "Niagara Stampede"],
            ["Southern Tier Supporters", "Amarillo Archaludon"],
            ["Colorado Avalugg", "Florida Floettes"],
            ["Durham Drills", "Garden State Garchomps"],
            ["Houston Heat Wave", "Ontario Fightin' Palafin"]
        ]
    },


    /* =====================================================
       WEEK 8
       ===================================================== */

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


    /* =====================================================
       WEEK 9
       ===================================================== */

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


    /* =====================================================
       WEEK 10
       ===================================================== */

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


    /* =====================================================
       WEEK 11
       ===================================================== */

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
   CURRENT WEEK
   ========================================================= */

let currentWeek = 1;


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const STORAGE_KEY =
    "pokemonDraftLeagueScores";


/*
 * Load saved scores.
 *
 * Only OPEN weeks can be changed.
 * Locked weeks always use the hard-coded results.
 */

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

            /*
             * Never overwrite locked weeks.
             */

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
                    savedMatch.length === 4
                ) {

                    const scoreA =
                        savedMatch[2];

                    const scoreB =
                        savedMatch[3];


                    /*
                     * Blank match
                     */

                    if (
                        scoreA === null ||
                        scoreA === undefined ||
                        scoreB === null ||
                        scoreB === undefined
                    ) {

                        weeks[w].matches[m] =
                            [
                                weeks[w].matches[m][0],
                                weeks[w].matches[m][1]
                            ];

                        continue;
                    }


                    /*
                     * Valid saved match
                     */

                    if (
                        validScore(
                            scoreA,
                            scoreB
                        )
                    ) {

                        weeks[w].matches[m][2] =
                            Number(scoreA);

                        weeks[w].matches[m][3] =
                            Number(scoreB);

                    }

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


/*
 * Save all OPEN week scores.
 */

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


    const a =
        Number(scoreA);

    const b =
        Number(scoreB);


    /*
     * Must be integers.
     */

    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {

        return false;

    }


    /*
     * Scores must be 0-3.
     */

    if (
        a < 0 ||
        b < 0 ||
        a > 3 ||
        b > 3
    ) {

        return false;

    }


    /*
     * Every match consists of
     * exactly 3 games.
     */

    return a + b === 3;
}


/* =========================================================
   CALCULATE STANDINGS
   ========================================================= */

function calculateStandings() {

    const standings = [];


    /*
     * Create initial standings
     * for every team.
     */

    for (const team of teams) {

        standings.push({

            team: team,

            wins: 0,

            losses: 0,

            differential: 0

        });

    }


    /*
     * Go through every week.
     */

    for (const week of weeks) {

        /*
         * Go through every match.
         */

        for (const match of week.matches) {

            /*
             * Ignore matches with no score.
             */

            if (match.length < 4) {
                continue;
            }


            const scoreA =
                Number(match[2]);

            const scoreB =
                Number(match[3]);


            /*
             * Ignore invalid/incomplete
             * matches.
             */

            if (
                !validScore(
                    scoreA,
                    scoreB
                )
            ) {

                continue;

            }


            const teamA =
                standings.find(
                    team =>
                        team.team === match[0]
                );


            const teamB =
                standings.find(
                    team =>
                        team.team === match[1]
                );


            if (
                !teamA ||
                !teamB
            ) {

                continue;

            }


            /*
             * Point differential.
             */

            teamA.differential +=
                scoreA - scoreB;

            teamB.differential +=
                scoreB - scoreA;


            /*
             * Wins / losses.
             */

            if (scoreA > scoreB) {

                teamA.wins++;

                teamB.losses++;

            } else {

                teamB.wins++;

                teamA.losses++;

            }

        }

    }


    /*
     * Sort standings:
     *
     * 1. Most wins
     * 2. Highest differential
     * 3. Alphabetical name
     */

    standings.sort(
        function(a, b) {

            if (
                a.wins !==
                b.wins
            ) {

                return (
                    b.wins -
                    a.wins
                );

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


    return standings;
}


/* =========================================================
   UPDATE STANDINGS TABLE
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


            /*
             * Playoff cutoff before
             * position 9.
             */

            if (index === 8) {

                const cutoff =
                    document.createElement(
                        "tr"
                    );


                cutoff.className =
                    "playoff-cutoff";


                cutoff.innerHTML =
                    "<td colspan='5'>" +
                    "PLAYOFF CUTOFF — TOP 8" +
                    "</td>";


                body.appendChild(
                    cutoff
                );

            }


            const row =
                document.createElement(
                    "tr"
                );


            /*
             * Highlight playoff teams.
             */

            if (index < 8) {

                row.classList.add(
                    "playoff-team"
                );

            }


            /*
             * Differential text.
             */

            let differential =
                team.differential;


            let differentialText;


            if (differential > 0) {

                differentialText =
                    "+" + differential;

            } else {

                differentialText =
                    String(differential);

            }


            row.innerHTML =

                "<td>" +
                    (index + 1) +
                "</td>" +

                "<td class='team-name'>" +
                    team.team +
                "</td>" +

                "<td>" +
                    team.wins +
                "</td>" +

                "<td>" +
                    team.losses +
                "</td>" +

                "<td>" +
                    differentialText +
                "</td>";


            body.appendChild(
                row
            );

        }
    );

}


/* =========================================================
   RENDER WEEK BUTTONS
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


            /*
             * Active week.
             */

            if (
                week.number ===
                currentWeek
            ) {

                button.classList.add(
                    "active"
                );

            }


            /*
             * Locked week.
             */

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

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   RENDER CURRENT WEEK
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


    /*
     * Update title.
     */

    if (title) {

        title.textContent =
            "Week " +
            week.number;

    }


    /*
     * Update dates.
     */

    if (dates) {

        dates.textContent =
            week.dates;

    }


    /*
     * Clear matches.
     */

    if (matches) {

        matches.innerHTML = "";

    }


    /*
     * Week status.
     */

    if (status) {

        if (week.locked) {

            status.textContent =
                "🔒 LOCKED";

            status.className =
                "week-status locked";

        } else {

            status.textContent =
                "OPEN";

            status.className =
                "week-status open";

        }

    }


    /*
     * Render all six matches.
     */

    if (matches) {

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

    }


    /*
     * Render bottom controls.
     */

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


    /*
     * Team A
     */

    const teamA =
        document.createElement(
            "div"
        );


    /*
     * Team B
     */

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


    /*
     * Score area.
     */

    const scoreArea =
        document.createElement(
            "div"
        );


    scoreArea.className =
        "score-area";


    /* =====================================================
       LOCKED MATCH
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


        /*
         * Winner / loser.
         */

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
       OPEN MATCH
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


        inputA.type =
            "number";


        inputB.type =
            "number";


        inputA.min =
            "0";


        inputA.max =
            "3";


        inputB.min =
            "0";


        inputB.max =
            "3";


        inputA.className =
            "score-input";


        inputB.className =
            "score-input";


        /*
         * Load existing saved score.
         */

        if (
            match.length >= 4
        ) {

            if (
                match[2] !== null &&
                match[2] !== undefined
            ) {

                inputA.value =
                    match[2];

            }


            if (
                match[3] !== null &&
                match[3] !== undefined
            ) {

                inputB.value =
                    match[3];

            }

        }


        /* =================================================
           UPDATE THIS MATCH
           ================================================= */

        function updateMatch() {

            /*
             * Remove old winner styling.
             */

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


            const valueA =
                inputA.value;


            const valueB =
                inputB.value;


            /*
             * If either score is blank,
             * this match is not counted.
             */

            if (
                valueA === "" ||
                valueB === ""
            ) {

                /*
                 * Keep only the two team
                 * names in the match array.
                 */

                match.length = 2;


                saveScoresToStorage();

                updateStandings();

                return;

            }


            const scoreA =
                Number(valueA);


            const scoreB =
                Number(valueB);


            /*
             * Invalid score.
             */

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


                /*
                 * Do not count invalid
                 * scores in standings.
                 */

                match.length = 2;


                saveScoresToStorage();

                updateStandings();

                return;

            }


            /*
             * Valid score.
             *
             * Save it directly into
             * this match.
             */

            match[2] =
                scoreA;


            match[3] =
                scoreB;


            /*
             * Highlight winner.
             */

            if (
                scoreA >
                scoreB
            ) {

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


            /*
             * SAVE IMMEDIATELY.
             */

            saveScoresToStorage();


            /*
             * UPDATE STANDINGS IMMEDIATELY.
             */

            updateStandings();

        }


        /*
         * Input event fires immediately
         * when the user changes a score.
         */

        inputA.addEventListener(
            "input",
            updateMatch
        );


        inputB.addEventListener(
            "input",
            updateMatch
        );


        /*
         * Score A.
         */

        scoreArea.appendChild(
            inputA
        );


        /*
         * Dash.
         */

        const dash =
            document.createElement(
                "span"
            );


        dash.textContent =
            "-";


        scoreArea.appendChild(
            dash
        );


        /*
         * Score B.
         */

        scoreArea.appendChild(
            inputB
        );


        /*
         * Display saved winner.
         */

        if (
            match.length >= 4 &&
            validScore(
                match[2],
                match[3]
            )
        ) {

            if (
                Number(match[2]) >
                Number(match[3])
            ) {

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

    }


    /*
     * Build match.
     */

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
   RENDER CONTROLS
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


    if (!week) {
        return;
    }


    /*
     * Locked week.
     */

    if (week.locked) {

        const message =
            document.createElement(
                "span"
            );


        message.className =
            "locked-message";


        message.textContent =
            "🔒 Results for this week are locked";


        controls.appendChild(
            message
        );


        return;
    }


    /*
     * Open week.
     */

    const message =
        document.createElement(
            "span"
        );


    message.className =
        "open-message";


    message.textContent =
        "✓ Scores save automatically";


    controls.appendChild(
        message
    );
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Load previously saved
         * scores first.
         */

        loadSavedScores();


        /*
         * Calculate standings.
         */

        updateStandings();


        /*
         * Create Week 1-11 buttons.
         */

        renderWeekButtons();


        /*
         * Display current week.
         */

        renderWeek();


        /*
         * Optional refresh button.
         */

        const refreshButton =
            document.getElementById(
                "refreshStandings"
            );


        if (refreshButton) {

            refreshButton.addEventListener(
                "click",
                function() {

                    updateStandings();

                }
            );

        }

    }
);