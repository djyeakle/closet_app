const express = require("express");
const loginRoutes = require("./src/login/routes");

const app = express();
const port = 8008;

app.use(express.json());
const cors = require("cors");
app.use(cors ({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Who will win the Super Bowl??");
});

app.use("/api/v1/login", loginRoutes);

app.listen(port, () => console.log(`running on ${port}`));