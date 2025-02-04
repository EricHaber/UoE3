require("dotenv").config();
const express = require("express");
const app = express();

app.get("/get-api-key", (req, res) => {
    res.json({ apiKey: process.env.OPENAIKEY });
});

app.listen(3000, () => console.log("Server running on port 3000"));
