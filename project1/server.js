require("dotenv").config();
require("./server/db-conn");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Add the path module

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "client/frontend/build")));

// Enable CORS for localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

// Mount routes
app.use("/api/thoughts/", require("./server/routes/thoughts-route"));

// Serve index.html for any other routes
app.get("/*", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "client/frontend/build"),
  });
});

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Wizardry happening on port ${PORT}`));
