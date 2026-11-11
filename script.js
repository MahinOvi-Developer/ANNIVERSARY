
// =================================
// ANNIVERSARY FIREWORKS
// =================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const colors = ["#ff3d65", "#2878ff", "#ffd700", "#ff91c8", "#ffffff"];

function createFirework(x, y) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 65; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;

        particles.push({
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1,
            color,
            size: Math.random() * 3 + 1
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.025;
        p.alpha -= 0.012;

        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0) particles.splice(index, 1);
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animateFireworks);
}

animateFireworks();

function launchFireworks() {
    const positions = [
        [0.08, 0.25], [0.92, 0.25],
        [0.25, 0.48], [0.75, 0.48],
        [0.50, 0.18]
    ];

    positions.forEach(([x, y], i) => {
        setTimeout(() => {
            createFirework(x * canvas.width, y * canvas.height);
        }, i * 250);
    });
}

launchFireworks();
setInterval(launchFireworks, 3500);

// =================================
// FLOATING HEARTS
// =================================

const heartsContainer = document.getElementById("hearts");

function addHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♡", "♥", "💕", "💗"][Math.floor(Math.random() * 4)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(addHeart, 600);

// =================================
// FALLING LOVE TEXT
// =================================

function addLoveRain() {
    const love = document.createElement("span");
    love.className = "love-rain";
    love.textContent = "LOVE";

    love.style.left = Math.random() * 95 + "%";
    love.style.animationDuration = (5 + Math.random() * 4) + "s";

    heartsContainer.appendChild(love);

    setTimeout(() => love.remove(), 10000);
}

setInterval(addLoveRain, 1800);

// =================================
// SURPRISE POPUP
// =================================

const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeBtn = document.getElementById("closeBtn");
const yesBtn = document.getElementById("yesBtn");
const popupResult = document.getElementById("popupResult");

surpriseBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("show");
    }
});

yesBtn.addEventListener("click", () => {
    popupResult.textContent = "Yay! Forever and ever! I love you! ❤️";

    for (let i = 0; i < 5; i++) {
        setTimeout(launchFireworks, i * 400);
    }

    for (let i = 0; i < 15; i++) {
        setTimeout(addHeart, i * 100);
    }
});
