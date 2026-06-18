require("dotenv").config();

console.log(process.env.ACCESS_TOKEN);

const Log = require("./logger");

async function testLogger() {
    await Log(
        "backend",
        "info",
        "service",
        "Testing logging middleware"
    );
}

testLogger();