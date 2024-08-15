function fetchIp() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("ip").innerHTML = data.ip;
      ip = data.ip;
      fetchIPInfo(ip);
      fetchIPAbuse(ip);
      fetchWeather(ip);
    })
    .catch((error) => console.error("Error fetching IP address:", error));
}

//   Fetch and display user agent

var browserName = navigator.appName;
document.getElementById("browser").innerHTML =
  "Browser: " + navigator.userAgent;

// Fetch IP information using IP Lookup API
function fetchIPInfo(ip) {
  const now = new Date();
  fetch(`https://api.api-ninjas.com/v1/iplookup?address=${ip}`, {
    method: "GET",
    headers: { "X-Api-Key": "y74kLG1bNDG0c8KBafHDtQ==6YuCLdfRUip3UDue" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Ensure data contains the expected properties
      if (data.country && data.country_code && data.region && data.timezone) {
        var white = "<strong>whitelisted</strong>";
        // Display IP information
        document.getElementById(
          "time"
        ).innerHTML = `Time : ${now.toLocaleTimeString()} ${data.region} ${
          data.country
        } ${data.region_code} ${data.country_code} ${data.timezone}`;
        if (data.is_valid) {
          document.getElementById(
            "ipAbuse"
          ).innerHTML = `The IP-address ${ip} is ${white}, valid and secure.`;
        } else {
          document.getElementById(
            "ipAbuse"
          ).innerHTML = `The IP-address ${ip} is not valid and secure.`;
        }
      } else {
        console.error("Unexpected response data:", data);
      }
    })
    .catch((error) => console.error("Error fetching IP info:", error));
}

// Fetch IP abuse information using IP Abuse API
function fetchIPAbuse(ip) {
  const url = `https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`;
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: {
      Key: "4dcb18ece7add5543c4554cb55107e888eb0e422b57f270d2c64c39937ecd94ab54b1f663ad3ef7a", // Replace with your actual API key
      Accept: "application/json",
    },
  };
}

// Fetch weather information using Weather API

function fetchWeather(ip) {
  const url = `https://api.weatherapi.com/v1/current.json?q=${ip}`;
  const options = {
    method: "GET",
    headers: {
      Key: "23589e14dfd9486d90b171530241507",
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "weather"
      ).textContent = `Weather: ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
    })
    .catch((error) => console.error("Error fetching weather info:", error));
}
