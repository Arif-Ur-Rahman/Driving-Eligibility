// script.js
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("driving-eligibility").addEventListener("click", () => {
        checkDrivingEligibility();
    });

    document.getElementById("car-collections").addEventListener("click", () => {
        // Dynamically load and execute the car collections module
        import('./car-collections.js')
            .then((module) => {
                module.showCarCollections();
            })
            .catch((error) => console.error("Failed to load car collections:", error));
    });

    document.getElementById("bike-collections").addEventListener("click", () => {
        alert("Bike Collections feature is under construction.");
    });

    document.getElementById("about").addEventListener("click", () => {
        alert("About Mr. Shakil: A passionate developer and car enthusiast.");
    });
});

function checkDrivingEligibility() {
    let age = prompt("Hey Mr. Shakil Mahmud, what's your age?");
    age = parseInt(age);

    if (isNaN(age)) {
        alert("Please enter a valid number, Mr. Shakil Mahmud.");
    } else if (age < 0) {
        alert("Invalid age, Mr. Shakil Mahmud.");
    } else if (age >= 9 && age < 18) {
        alert("Mr. Shakil Mahmud, you can think about driving.");
    } else if (age === 18) {
        let asking = prompt("Do you have a driving license, Mr. Shakil Mahmud? (yes/no)");
        asking = asking ? asking.toLowerCase() : ""; // Handle null input
        if (asking === "no") {
            alert("Mr. Shakil Mahmud, please visit your nearest BRTA office for a driving license.");
        } else if (asking === "yes") {
            alert("You can drive, Mr. Shakil Mahmud!");
        } else {
            alert("Invalid response. Please answer with 'yes' or 'no', Mr. Shakil Mahmud.");
        }
    } else if (age > 18) {
        alert("You can drive, Mr. Shakil Mahmud!");
    } else {
        alert("Sorry, Mr. Shakil Mahmud, you can't drive yet.");
    }
}
