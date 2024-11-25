export function showCarCollections() {
    // Array of car collections
    const cars = [
        { name: "Tesla Model S", image: "./assets/images/tesla-model-s.jpg" },
        { name: "BMW i8", image: "./assets/images/bmw-i8.jpg" },
        { name: "Audi R8", image: "./assets/images/audi-r8.jpg" },
        { name: "Mercedes AMG GT", image: "./assets/images/mercedes-amg-gt.jpg" }
    ];

    // Get the dashboard element
    const dashboard = document.getElementById("dashboard");

    // Clear the existing content
    dashboard.innerHTML = `
        <h1>Car Collections</h1>
        <button id="back-to-dashboard">Back to Dashboard</button>
    `;

    // Create a container for the car cards
    const carContainer = document.createElement("div");
    carContainer.style.display = "grid";
    carContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    carContainer.style.gap = "20px";
    carContainer.style.marginTop = "20px";

    // Add car cards to the container
    cars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.style.border = "1px solid #ddd";
        carCard.style.borderRadius = "10px";
        carCard.style.overflow = "hidden";
        carCard.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        carCard.style.textAlign = "center";
        carCard.style.backgroundColor = "#fff";

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" style="width: 100%; height: 150px; object-fit: cover;">
            <h3 style="margin: 10px 0; color: #333;">${car.name}</h3>
        `;

        carContainer.appendChild(carCard);
    });

    // Add the car container to the dashboard
    dashboard.appendChild(carContainer);

    // Add a back button listener
    document.getElementById("back-to-dashboard").addEventListener("click", () => {
        location.reload(); // Reload the page to reset to the dashboard
    });
}
