const express = require("express");

const app = express();
const scheduleRoutes = require("./routes/scheduleRoutes");

app.use("/schedule", scheduleRoutes);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Vehicle Scheduler Service Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});