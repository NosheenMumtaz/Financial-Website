// Navigation Handling
function showSection(sectionId) {
    document.querySelectorAll("main > section").forEach(section => {
        section.style.display = section.id === sectionId ? "block" : "none";
    });
}

// Event Listeners for Navigation Links
document.getElementById("home-link").addEventListener("click", () => showSection("home"));
document.getElementById("dashboard-link").addEventListener("click", () => showSection("dashboard"));
document.getElementById("budget-link").addEventListener("click", () => showSection("budget"));
document.getElementById("transactions-link").addEventListener("click", () => showSection("transactions"));
document.getElementById("login-link").addEventListener("click", () => showSection("login"));
document.getElementById("signup-link").addEventListener("click", () => showSection("signup"));

// Example Chart for Dashboard
const ctx = document.getElementById("expenseChart").getContext("2d");
new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Groceries", "Rent", "Utilities", "Entertainment"],
        datasets: [{
            data: [300, 800, 200, 100],
            backgroundColor: ["#4caf50", "#81c784", "#388e3c", "#66bb6a"]
        }]
    }
});
