const cors = require('cors');
const express = require('express');
const app = express();

//Routes
const loginRoutes = require("./src/login/routes");
const clothesRoutes = require("./src/clothes/routes");

const port = 8008;


app.use(express.json());
app.use(cors({
    origin: '*'
}));


//route
app.get("/", (req, res) => {
    res.send("Yay closet app!");
});

app.get("/:username/login", (req, res) => {
    res.send(`Welcome, ${req.params.username}!`);
});

app.use("/api/login", loginRoutes);

app.use("/api/clothes", clothesRoutes);

app.post("/api/login/:accountID"), async (req, res) => {
    const accountID = req.params.accountID;
    const { username, password} = req.body;

    res.json({ success: true});
}

app.listen(port, () => console.log(`running on ${port}`));
