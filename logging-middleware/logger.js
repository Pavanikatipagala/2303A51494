require("dotenv").config();
console.log("TOKEN:", process.env.ACCESS_TOKEN);
const axios = require("axios");

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log Success:", response.data);
        return response.data;

    } catch (error) {
        console.error("Log Error:", error.response?.data || error.message);
    }
}

module.exports = Log;