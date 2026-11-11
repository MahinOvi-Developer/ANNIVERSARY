
// =================================
// OUR SPECIAL DATES
// =================================

const specialDates = {
    "2025-11-16": {
        title: "Our Beautiful Beginning 💗",
        note: "1st  kkotha bola hoy ei  date a amadeer ."
    },

    "2025-11-26": {
        title: "A Day to Remember 🌷",
        note: "1st fomal pic with you."
    },

    "2025-12-22": {
        title: "Our Sweet Memory 💕",
        note: "1st kiss ."
    },

    "2026-02-06": {
        title: "A Special Moment ❤️",
        note: " 1st Romace in Resturant."
    },

    "2026-04-09": {
        title: "Forever in My Heart 💌",
        note: "Shob cheye Special Day ,,  Am,r bacchar birth day ..."
    },

    "2026-05-14": {
        title: "My Favourite Day 🥰",
        note: "1st Hore riding   Day  .."
    },

    "2026-10-31": {
        title: "Our Little Celebration 🎀",
        note: "Last special  day together."
    }
};

// =================================
// CALENDAR ELEMENTS
// =================================

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

const datePopup = document.getElementById("datePopup");
const dateClose = document.getElementById("dateClose");
const dateOk = document.getElementById("dateOk");

const specialDateTitle = document.getElementById("specialDateTitle");
const specialDateNote = document.getElementById("specialDateNote");

// Start at November 2025
let currentYear = 2025;
let currentMonth = 10;

// Calendar range: November 2025 to October 2026
const firstMonth = 10;
const firstYear = 2025;

const lastMonth = 9;
const lastYear = 2026;

// =================================
// RENDER CALENDAR
// =================================

function renderCalendar() {
    calendarDays.innerHTML = "";

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    monthYear.textContent = new Date(
        currentYear,
        currentMonth
    ).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    // Empty spaces before first date
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.className = "calendar-day empty";
        calendarDays.appendChild(empty);
    }

    // Create date buttons
    for (let day = 1; day <= totalDays; day++) {
        const dateButton = document.createElement("button");

        dateButton.type = "button";
        dateButton.className = "calendar-day";
        dateButton.textContent = day;

        const monthString = String(currentMonth + 1).padStart(2, "0");
        const dayString = String(day).padStart(2, "0");

        const dateKey = `${currentYear}-${monthString}-${dayString}`;

        if (specialDates[dateKey]) {
            dateButton.classList.add("special");

            dateButton.setAttribute(
                "aria-label",
                `Special day: ${dateKey}`
            );

            dateButton.addEventListener("click", () => {
                openDatePopup(dateKey);
            });
        }

        calendarDays.appendChild(dateButton);
    }

    // Disable previous/next buttons at range limits
    const atStart = currentYear === firstYear &&
                    currentMonth === firstMonth;

    const atEnd = currentYear === lastYear &&
                  currentMonth === lastMonth;

    prevMonth.disabled = atStart;
    nextMonth.disabled = atEnd;

    prevMonth.style.opacity = atStart ? "0.4" : "1";
    nextMonth.style.opacity = atEnd ? "0.4" : "1";

    prevMonth.style.cursor = atStart ? "not-allowed" : "pointer";
    nextMonth.style.cursor = atEnd ? "not-allowed" : "pointer";
}

// =================================
// MONTH NAVIGATION
// =================================

prevMonth.addEventListener("click", () => {
    if (currentYear === firstYear && currentMonth === firstMonth) {
        return;
    }

    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar();
});

nextMonth.addEventListener("click", () => {
    if (currentYear === lastYear && currentMonth === lastMonth) {
        return;
    }

    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar();
});

// =================================
// SPECIAL DATE POPUP
// =================================

function openDatePopup(dateKey) {
    const memory = specialDates[dateKey];

    if (!memory) return;

    specialDateTitle.textContent = memory.title;
    specialDateNote.textContent = memory.note;

    datePopup.classList.add("show");
}

function closeDatePopup() {
    datePopup.classList.remove("show");
}

dateClose.addEventListener("click", closeDatePopup);
dateOk.addEventListener("click", closeDatePopup);

datePopup.addEventListener("click", (event) => {
    if (event.target === datePopup) {
        closeDatePopup();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDatePopup();
    }
});

// =================================
// FLOATING HEARTS ON CALENDAR
// =================================

const heartsContainer = document.getElementById("hearts");

function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = ["♡", "♥", "💕", "💗"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 11000);
}

setInterval(createFloatingHeart, 900);

// First calendar render
renderCalendar();
