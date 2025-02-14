/* ======== Load Favorites from LocalStorage ======== */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("favorites-container");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    console.log("Loaded Favorites:", favorites); // Debugging line

    if (favorites.length === 0) {
        container.innerHTML = "<p>No favorites saved yet. Explore our hiking guides and add your favorites!</p>";
    } else {
        container.innerHTML = ""; // Clear existing content
        favorites.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("favorite-item");
            div.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="category">Category: ${item.category}</span>
                <button class="remove-favorite" data-id="${item.id}">Remove</button>
            `;
            container.appendChild(div);
        });
    }

    // Event Listener for Remove Buttons
    container.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-favorite")) {
            const itemId = event.target.getAttribute("data-id");
            favorites = favorites.filter(item => item.id !== itemId);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            event.target.parentElement.remove();

            // Show fallback message if no favorites are left
            if (favorites.length === 0) {
                container.innerHTML = "<p>No favorites saved yet. Explore our hiking guides and add your favorites!</p>";
            }
        }
    });
});
