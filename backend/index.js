const express = require("express");
const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.get("/health/details", (req, res) => {
    res.status(200).json({
        status: "OK",
        service: "personal-task-life-dashboard",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 8080;

// Only start the server if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}


module.exports = app;

