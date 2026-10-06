const loader = document.getElementById("loader");
const website = document.getElementById("website");

const progressBar = document.getElementById("progress");
const percent = document.getElementById("percent");
const statusText = document.getElementById("statusText");
const systemTime = document.getElementById("systemTime");

let progress = 0;


/* =====================================================
   SYSTEM CLOCK
===================================================== */

function updateClock() {

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    systemTime.textContent =
        `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();


/* =====================================================
   LOADING TEXT
===================================================== */

const loadingSteps = [

    {
        max: 10,
        text: "Booting class system..."
    },

    {
        max: 25,
        text: "Loading digital interface..."
    },

    {
        max: 40,
        text: "Preparing class database..."
    },

    {
        max: 55,
        text: "Loading student directory..."
    },

    {
        max: 70,
        text: "Preparing class schedule..."
    },

    {
        max: 82,
        text: "Connecting class features..."
    },

    {
        max: 94,
        text: "Optimizing experience..."
    },

    {
        max: 100,
        text: "System ready..."
    }

];


/* =====================================================
   LOADING ENGINE
===================================================== */

function updateLoading() {

    progressBar.style.width =
        progress + "%";

    percent.textContent =
        progress;

    const step =
        loadingSteps.find(
            item => progress <= item.max
        );

    if (step) {
        statusText.textContent =
            step.text;
    }

}


/* =====================================================
   START LOADING
===================================================== */

const loadingInterval = setInterval(() => {

    let speed;

    if (progress < 30) {

        speed =
            Math.floor(Math.random() * 3) + 1;

    } else if (progress < 75) {

        speed =
            Math.floor(Math.random() * 2) + 1;

    } else {

        speed = 1;

    }

    progress += speed;

    if (progress >= 100) {

        progress = 100;

        updateLoading();

        clearInterval(loadingInterval);

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.transform =
                "scale(1.08)";

            setTimeout(() => {

                loader.style.display =
                    "none";

                document.body.style.overflow =
                    "auto";

            }, 800);

        }, 700);

    } else {

        updateLoading();

    }

}, 80);


/* =====================================================
   PREVENT SCROLL WHILE LOADING
===================================================== */

document.body.style.overflow = "hidden";


function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
    
    let greetingText = "";
    if (hours >= 5 && hours < 11) greetingText = "Selamat Pagi ✨";
    else if (hours >= 11 && hours < 15) greetingText = "Selamat Siang ☀️";
    else if (hours >= 15 && hours < 18) greetingText = "Selamat Sore 🌤️";
    else greetingText = "Selamat Malam 🌙";

    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerText = greetingText;
    }
}

setInterval(updateClock, 1000);
updateClock();

const dataPelajaran = {
    "Senin": [
        { jam: "06:30 - 07:15", mapel: "UPACARA BENDERA", guru: "SEMUA GURU" },
        { jam: "07:15 - 9:15", mapel: "PJOK", guru: "Bpk. Ricky" },
        { jam: "9:15 - 9:55", mapel: "PAIBP", guru: "Bpk. Lukman" },
        { jam: "9:55 - 10:10", mapel: "ISTIRAHAT", guru: "Semuanya" },
        { jam: "10:10 - 11:10", mapel: "PAIBP", guru: "Bpk. Lukman" },
        { jam: "11:10 - 12:10", mapel: "B.SUNDA", guru: "Ibu. Ririn" }
    ],
    "Selasa": [
        { jam: "06:30 - 07:50", mapel: "B.INDO", guru: "Bpk. Arif" },
        { jam: "07:50 - 9:10", mapel: "MTK", guru: "Ibu. Ipah" },
        { jam: "09:10 - 09:30", mapel: "ISTIRAHAT", guru: "Semuanya" },
        { jam: "9:30 - 10:40", mapel: "DKK", guru: "Ibu. Lutfia" },
        { jam: "10:40 - 12:00", mapel: "INFORMATIKA", guru: "Ibu. Sri" }
    ],
    "Rabu": [
        { jam: "06:30 - 07:50", mapel: "DKK", guru: "Bpk. Toto" },
        { jam: "07:50 - 09:10", mapel: "B.Indo", guru: "Bpk. Arif" },
        { jam: "09:10 - 9:30", mapel: "ISTIRAHAT", guru:"Semuanya"},
        { jam: "09:30 - 10:40", mapel: "B.Inggris", guru: "Bpk. Pepen"},
        { jam: "10:40 - 12:00", mapel: "S.Budaya", guru:"Bpk. Ocin" }
    ],
    "Kamis": [
        { jam: "06:30 - 07:50", mapel: "Sejarah", guru: "Ibu. Ugih" },
        { jam: "07:50 - 09:10", mapel: "DKK", guru: "Bpk. Toto" },
        { jam: "09:10 - 09:30", mapel: "ISTIRAHAT", guru:"Semuanya" },
        { jam: "09:30 - 10:40", mapel: "PP", guru: "Bpk. Fhajar" },
        { jam: "10:40 - 12:00", mapel: "B.Inggris", guru: "Bpk. Pepen"}
    ],
    "Jumat": [
        { jam: "06:30 - 07:10", mapel: "PEMBIASAAN" },
        { jam: "07:10 - 08:30", mapel: "Informatika", guru: "Ibu. Sri" },
        { jam: "08:30 - 09:50", mapel: "Ipas", guru: "Bpk. Novika" },
        { jam: "09:50- 10:10", mapel: "ISTIRAHAT", guru: "Semuanya" },
        { jam: "10:10 - 11:30", mapel: "Mtk", guru: "Ibu. Ipah"}
    ],  
    "Sabtu": [
        { jam: "06:30 - 09:10", mapel: "DKK", guru: "Bpk. ujang"},
        { jam: "09:10 - 09:30", mapel: "ISTIRAHAT", guru: "Semuanya"},
        { jam: "09:30 - 12:00", mapel: "Ipas", guru: "Bpk. Novika"}
    ]
};

function gantiHari(hari, elemenTombol) {
    let buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (elemenTombol) {
        elemenTombol.classList.add('active');
    }

    const wadah = document.getElementById("wadah-jadwal");
    if (!wadah) return;

    wadah.innerHTML = "";
    const jadwalHariIni = dataPelajaran[hari];

    if (jadwalHariIni) {
        jadwalHariIni.forEach(item => {
            const cardHTML = `
                <div class="glass schedule-card">
                    <span class="time-badge">${item.jam}</span>
                    <h3 style="margin-bottom: 5px; color: var(--text-main);">${item.mapel}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">
                        <i class="fa-regular fa-user" style="margin-right:5px;"></i> ${item.guru}
                    </p>
                </div>
            `;
            wadah.innerHTML += cardHTML;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tombolSenin = document.querySelector('.tab-btn.active');
    gantiHari('Senin', tombolSenin);
});
