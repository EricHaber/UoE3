require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests

app.get("/get-api-key", (req, res) => {
    res.json({ apiKey: process.env.OPENAIKEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
