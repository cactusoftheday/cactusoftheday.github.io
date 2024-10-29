document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/pfquotes.json")
      .then(response => response.json())
      .then(quotes => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quote").innerText = randomQuote;
      })
      .catch(error => console.error("Error fetching quotes:", error));
  });