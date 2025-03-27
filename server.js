const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const app = express();
const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
};

// Create an HTTPS server
https.createServer(options, app).listen(443, () => {
    console.log("Secure server is running on https://localhost:8008");
  });
  
  // Optional: Redirect HTTP to HTTPS
  const http = require("http");
  http.createServer((req, res) => {
    res.writeHead(301, { Location: "https://" + req.headers.host + req.url });
    res.end();
  }).listen(80);

//Routes
const loginRoutes = require("./src/login/routes");
const clothesRoutes = require("./src/clothes/routes");
const lainClothesRoutes = require("./src/lainClothes/routes");
const abClothesRoutes = require("./src/abclothes/routes");

const port = 8008;


app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: '*'
}));

//route
app.get("/", (req, res) => {
    res.send("Yay closet app!");
});

app.use("/api/login", loginRoutes);

app.use("/api/clothes", clothesRoutes);

app.use("/api/lainclothes", lainClothesRoutes);

app.use("/api/abclothes", abClothesRoutes);

app.listen(port, () => console.log(`running on ${port}`));
