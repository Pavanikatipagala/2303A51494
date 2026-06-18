const express = require("express");
const { getVehicles } = require("../services/vehicleService");
const router = express.Router();

router.get("/", async (req, res) => {
    const vehicles = await getVehicles();
    console.log("Schedule route hit");
    res.json(vehicles);
});

module.exports = router;