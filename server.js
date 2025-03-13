const express = require("express");
const cors = require("cors");

//Routes
const loginRoutes = require("./src/login/routes");

const app = express();
const port = 8008;

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//route
app.get("/", (req, res) => {
    res.send("Yay closet app!");
});

app.use("/api/login", loginRoutes);

app.listen(port, () => console.log(`running on ${port}`));