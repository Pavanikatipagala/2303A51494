require("dotenv").config();
const axios = require("axios");

async function getVehicles() {
    try {
        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        return response.data;
    } catch (error) {
        console.log("ERROR DETAILS:");
        console.log(error.response?.data);
        console.log(error.response?.status);
        console.log(error.message);
        return { error: "Failed to fetch vehicles" };
    }
}

module.exports = { getVehicles };