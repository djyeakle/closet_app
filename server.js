const express = require("express");
const cors = require("cors");

//Routes
const loginRoutes = require("./src/login/routes");

const app = express();
const port = 8008;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//route
app.get("/", (req, res) => {
    res.send("Yay closet app!");
});

app.use("/api/login", loginRoutes);

app.listen(port, () => console.log(`running on ${port}`));