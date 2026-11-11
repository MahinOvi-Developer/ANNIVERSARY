
const restaurants = [
    {
        name: "Star Kabab",
        location: "Dhanmondi",
        food: "Biryani & Kebab",
        image: "https://images.deliveryhero.io/image/fd-bd/Products/7066389.JPG"
    },
    {
        name: "KFC",
        location: "Mohammadpur",
        food: "Fried Chicken",
        image: "https://images.deliveryhero.io/image/fd-bd/Products/4634988.jpg"
    },
    {
        name: "KFC",
        location: "Dhanmondi",
        food: "Hot & Crispy Chicken",
        image: "https://images.deliveryhero.io/image/fd-bd/Products/4634988.jpg"
    },
    {
        name: "Khanas",
        location: "Khilgaon",
        food: "Pizza & Fast Food",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
    },
    {
        name: "Yum Cha District",
        location: "Dhanmondi",
        food: "Dim Sum & Chinese",
        image: "https://static.wixstatic.com/media/7c2d67_c69594aef8b445259a1ff5a2a6900d1e~mv2_d_1800_1200_s_2.jpg/v1/fill/w_640%2Ch_718%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/7c2d67_c69594aef8b445259a1ff5a2a6900d1e~mv2_d_1800_1200_s_2.jpg"
    },
    {
        name: "Yu Zu",
        location: "Dhanmondi",
        food: "Chinese Food",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
    },
    {
        name: "Appeliano",
        location: "Khilgaon",
        food: "Pasta & Grilled Chicken",
        image: "https://storage.pathaofood.live/food/b7294439-5650-46b0-9c5f-3895761cf670-1731100820.webp?ts=1731100820"
    },
    {
        name: "Alfresco",
        location: "Dhanmondi",
        food: "Pasta & Italian Food",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800"
    },
    {
        name: "Coco",
        location: "Khilgaon",
        food: "Desserts & Snacks",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
    },
    {
        name: "Pasta Club",
        location: "Khilgaon",
        food: "Creamy Pasta",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800"
    },
    {
        name: "Venetia",
        location: "Khilgaon",
        food: "Fried Rice & Seafood",
        image: "https://images.deliveryhero.io/image/global-menu-service/FP_BD/vendor/u22w/product/10069478/05669bc7-f173-4882-90f4-3c9e9f8df331.jpg"
    },
    {
        name: "Jahan",
        location: "Khilgaon",
        food: "Restaurant Special Food",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
    },
    {
        name: "Pizzaburg",
        location: "Dhanmondi",
        food: "Pizza & Burger",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
    },
    {
        name: "Cafe Marinade",
        location: "Bashabo",
        food: "Cafe Food & Snacks",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800"
    },
    {
        name: "Chillox",
        location: "Khilgaon",
        food: "Crispy Chicken Burger",
        image: "https://storage.pathaofood.live/food/8ff60206-2bac-45e3-9ee8-dc92767d8e21.webp?ts=1763621251"
    },
    {
        name: "Ice Panda",
        location: "Khilgaon",
        food: "Ice Cream & Dessert",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
    },
    {
        name: "Road Side Kitchen",
        location: "Khilgaon",
        food: "Grilled Food",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
    },
    {
        name: "Tasty Treat",
        location: "Khilgaon",
        food: "Cake & Pastry",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
    },
    {
        name: "Tasty Treat",
        location: "Mohammadpur",
        food: "Desserts & Bakery",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800"
    },
    {
        name: "Live Pizza",
        location: "Khilgaon",
        food: "Fresh Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
    },
    {
        name: "Travel East",
        location: "Dhanmondi",
        food: "Asian & Continental Food",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800"
    }
];

const restaurantGrid = document.getElementById("restaurantGrid");
const restaurantCount = document.getElementById("restaurantCount");

restaurantCount.textContent = `${restaurants.length} Places`;

restaurants.forEach((restaurant, index) => {
    const card = document.createElement("article");
    card.className = "restaurant-card";

    const mapSearch = encodeURIComponent(
        `${restaurant.name}, ${restaurant.location}, Dhaka, Bangladesh`
    );

    card.innerHTML = `
        <div class="restaurant-image">
            <div class="image-placeholder">
                <span>🍽️</span>
                <small>Food Memory ❤️</small>
            </div>

            <img
                src="${restaurant.image}"
                alt="${restaurant.name} food"
                loading="lazy"
            >
        </div>

        <div class="restaurant-info">
            <h3>${index + 1}. ${restaurant.name}</h3>

            <span class="restaurant-location">
                📍 ${restaurant.location}, Dhaka
            </span>

            <p class="food-name">🍴 ${restaurant.food}</p>

            <a
                class="map-button"
                href="https://www.google.com/maps/search/?api=1&query=${mapSearch}"
                target="_blank"
                rel="noopener noreferrer"
            >
                📍 View Location
            </a>
        </div>
    `;

    const image = card.querySelector("img");
    const placeholder = card.querySelector(".image-placeholder");

    image.addEventListener("load", () => {
        placeholder.style.display = "none";
    });

    image.addEventListener("error", () => {
        image.style.display = "flex";
        image.style.opacity = "0";
        placeholder.style.display = "flex";
    });

    restaurantGrid.appendChild(card);
});
