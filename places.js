
// OUR TRAVEL MEMORIES 💗

// Approximate area coordinates.
// Some places need the exact branch/location from you.

const places = [
    {
        name: "Mirpur 2",
        lat: 23.8065,
        lng: 90.3685,
        note: "A little memory from Mirpur 💗"
    },
    {
        name: "Dhanmondi Lake",
        lat: 23.7440,
        lng: 90.3788,
        note: "A beautiful lakeside memory 🌷"
    },
    {
        name: "VC Chattar",
        lat: 23.73294,
        lng: 90.39102,
        note: "Our university area memory ❤️"
    },
    {
        name: "Jiya Uddan",
        lat: 23.76669,
        lng: 90.37814,
        note: "A lovely day together 🌸"
    },
    {
        name: "New Market",
        lat: 23.7331,
        lng: 90.3847,
        note: "Our shopping memory 🛍️"
    },
    {
        name: "Taltola",
        lat: 23.7790,
        lng: 90.3720,
        note: "A little memory from Taltola 💕"
    },
    {
        name: "Balur Math",
        lat: 23.7500,
        lng: 90.4200,
        note: "Our Balur Math memory 💗"
    },
    {
        name: "Khilgaon Rooftop Area",
        lat: 23.7500,
        lng: 90.4250,
        note: "Rooftop, food and beautiful moments 🍽️"
    },
    {
        name: "Shyamoli",
        lat: 23.7732,
        lng: 90.3678,
        note: "A sweet memory from Shyamoli 🌷"
    },
    {
        name: "Agargaon",
        lat: 23.7774,
        lng: 90.3785,
        note: "Our Agargaon memory ❤️"
    },
    {
        name: "Agargaon Park",
        lat: 23.7785,
        lng: 90.3780,
        note: "A little park memory 🌳"
    }
];

// Create map
const map = L.map("memoryMap").setView(
    [23.7500, 90.3900],
    12
);

// OpenStreetMap tiles
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

// Custom pink heart marker
const heartIcon = L.divIcon({
    className: "",
    html: '<div class="heart-marker">♥</div>',
    iconSize: [30, 35],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28]
});

// Add markers
const markers = [];

places.forEach((place, index) => {

    const marker = L.marker(
        [place.lat, place.lng],
        { icon: heartIcon }
    ).addTo(map);

    marker.bindPopup(`
        <b>💗 ${place.name}</b><br>
        ${place.note}<br><br>
        <a href="https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}"
           target="_blank">
           Open in Google Maps
        </a>
    `);

    markers.push(marker);
});

// Create place cards
const placeList = document.getElementById("placeList");

places.forEach((place, index) => {

    const card = document.createElement("button");

    card.className = "place-card";

    card.innerHTML = `
        <span class="place-number">${index + 1}</span>

        <span>
            <strong>${place.name}</strong>
            <small>Click to see on map 💗</small>
        </span>
    `;

    card.addEventListener("click", () => {

        map.flyTo(
            [place.lat, place.lng],
            16,
            { duration: 1.2 }
        );

        markers[index].openPopup();

    });

    placeList.appendChild(card);
});
