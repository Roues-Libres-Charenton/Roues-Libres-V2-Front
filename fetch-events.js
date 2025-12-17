const fs = require("fs");

// URL de base
const API_URL = "https://xpgsbak3x3.execute-api.eu-north-1.amazonaws.com/dev";

// Dates
const currentDate = new Date();
const lastDayOfCurrentYear = new Date(
  currentDate.getFullYear(),
  11,
  31,
  23,
  59,
  59
);

async function fetchEvents() {
  try {
    const params = `startDate=${currentDate.toDateString()}&endDate=${lastDayOfCurrentYear.toDateString()}`;
    const url = `${API_URL}/events?${params}`;

    console.log(`Fetching events from: ${url}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    if(data.length < 5) {
      console.warn("⚠️ Warning: Fewer than 5 events fetched. Refetching with extended date range.");
      const extendedEndDate = new Date(
        currentDate.getFullYear() + 1,
        11,
        31,
        23,
        59,
        59
      );
      const extendedParams = `startDate=${currentDate.toDateString()}&endDate=${extendedEndDate.toDateString()}`;
      const extendedUrl = `${API_URL}/events?${extendedParams}`;

      console.log(`Refetching events from: ${extendedUrl}`);

      const extendedResponse = await fetch(extendedUrl);

      if (!extendedResponse.ok) {
        throw new Error(`HTTP error! Status: ${extendedResponse.status}`);
      }

      data = await extendedResponse.json();
    }

    fs.writeFileSync("./src/assets/events.json", JSON.stringify(data, null, 2));

    console.log("✅ Events fetched and saved successfully!", data);
  } catch (error) {
    console.error("❌ Error fetching events:", error.message);
    process.exit(1);
  }
}

fetchEvents();
