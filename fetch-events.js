const fs = require("fs");

// URL de base
const API_URL = "https://xpgsbak3x3.execute-api.eu-north-1.amazonaws.com/dev";

// Dates
const currentDate = new Date();
const lastDayOfCurrentYear = new Date(currentDate.getFullYear(), 11, 31);

async function fetchEvents() {
  try {
    const params = `startDate=${currentDate.toDateString()}&endDate=${lastDayOfCurrentYear.toDateString()}`;
    const url = `${API_URL}/events?${params}`;

    console.log(`Fetching events from: ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    fs.writeFileSync("./src/assets/events.json", JSON.stringify(data, null, 2));

    console.log("✅ Events fetched and saved successfully!", data);
  } catch (error) {
    console.error("❌ Error fetching events:", error.message);
    process.exit(1);
  }
}

fetchEvents();
