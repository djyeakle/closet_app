const cors = require('cors');
const express = require('express');
const app = express();

//Routes
const loginRoutes = require("./src/login/routes");

const port = 8008;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

//route
app.get("/", (req, res) => {
    res.send("Yay closet app!");
});

app.use("/api/login", loginRoutes);

app.post("api/login/:accountID"), async (req, res) => {
    const accountID = req.params.accountID;
    const { username, password} = req.body;

    res.json({ success: true});
}

app.listen(port, () => console.log(`running on ${port}`));