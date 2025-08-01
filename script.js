document.addEventListener("DOMContentLoaded", () => {
    const contributors = [{
            name: "Sanchita Chaurasia",
            github: "sanchitachaurasia",
            contribution: "Complete frontend overhaul on OSINT-Toolkit.",
            pr: "https://github.com/ThatSINEWAVE/OSINT-Toolkit/pull/4"
        },
        {
            name: "Nitrrine",
            github: "Nitrrine",
            contribution: "Various improvements and fixes to IP-Lookup-Bot.",
            pr: "https://github.com/ThatSINEWAVE/IP-Lookup-Bot/pull/7"
        },
        {
            name: "Jivi-this-side",
            github: "Jivi-this-side",
            contribution: "Created the Mountain Theme in Clockwork.",
            pr: "https://github.com/ThatSINEWAVE/Clockwork/pull/2"
        },
        {
            name: "jasurlive",
            github: "jasurlive",
            contribution: "Added import button in PureTask.",
            pr: "https://github.com/ThatSINEWAVE/PureTask/pull/5"
        },
        {
            name: "wqu7l3br03",
            github: "wqu7l3br03",
            contribution: "Added OSINT.ly in OSINT-Toolkit.",
            pr: "https://github.com/ThatSINEWAVE/OSINT-Toolkit/pull/5"
        },
        {
            name: "HTMLSlander",
            github: "HTMLSlander",
            contribution: "Improved the navbar of OSINT-Toolkit.",
            pr: "https://github.com/ThatSINEWAVE/OSINT-Toolkit/pull/7"
        },
        {
            name: "hudsonrock-partnerships",
            github: "hudsonrock-partnerships",
            contribution: "Added Hudson Rock in OSINT-Toolkit.",
            pr: "https://github.com/ThatSINEWAVE/OSINT-Toolkit/pull/8"
        },
        {
            name: "TaylorPhelps",
            github: "TaylorPhelps",
            contribution: "Improved the overall UI of PredictionEngine.",
            pr: "https://github.com/ThatSINEWAVE/PredictionEngine/pull/2"
        },
        {
            name: "Srivarshan-T",
            github: "Srivarshan-T",
            contribution: "Improved the tab UI of Notepad Online",
            pr: "https://github.com/ThatSINEWAVE/Notepad-Online/pull/3"
        },
        {
            name: "aadhityaalagappan",
            github: "aadhityaalagappan",
            contribution: "Added HistoricalFigures API to PredictionEngine.",
            pr: "https://github.com/ThatSINEWAVE/PredictionEngine/pull/3"
        },
        {
            name: "ArthurJenck",
            github: "ArthurJenck",
            contribution: "Made multiple minor changes and fixes on InsaneIdeas.",
            pr: "https://github.com/ThatSINEWAVE/InsaneIdeas/pull/2"
        },
        {
            name: "dxnali",
            github: "dxnali",
            contribution: "Added the file sorter script to Simple-Python-Scripts.",
            pr: "https://github.com/ThatSINEWAVE/Simple-Python-Scripts/pull/3"
        }
    ];

    const contributorsList = document.getElementById("contributors-list");
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close");

    contributors.forEach(contributor => {
        const card = document.createElement("div");
        card.classList.add("contributor-card");

        const projectURL = contributor.pr.split("/pull")[0];

        card.innerHTML = `
            <img src="https://github.com/${contributor.github}.png" alt="${contributor.name}" onclick="window.open('https://github.com/${contributor.github}', '_blank')">
            <h2>${contributor.name}</h2>
            <p>${contributor.contribution}</p>
        `;

        card.addEventListener("click", () => {
            document.getElementById("popup-img").src = `https://github.com/${contributor.github}.png`;
            document.getElementById("popup-name").textContent = contributor.name;
            document.getElementById("popup-desc").textContent = contributor.contribution;
            document.getElementById("github-profile").href = `https://github.com/${contributor.github}`;
            document.getElementById("pr-link").href = contributor.pr;
            document.getElementById("project-link").href = projectURL;

            popup.style.display = "block";
        });

        contributorsList.appendChild(card);
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});