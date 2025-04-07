const cors = require('cors');
const express = require('express');
const app = express();

//Routes
const loginRoutes = require("./src/login/routes");
const clothesRoutes = require("./src/clothes/routes");
const lainClothesRoutes = require("./src/lainClothes/routes");
const abClothesRoutes = require("./src/abclothes/routes");

const port = 8008;


app.use(express.json());
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
