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

app.post("/api/authenticate", async (req, res) => {
    const { id, username, password } = req.body;

    if (!id || !username || !password) {
        return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const user = await users.findOne({ id, username });

    if (!user) {
        return res.status(401).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // If using hashed passwords
    if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true });
});

app.listen(port, () => console.log(`running on ${port}`));