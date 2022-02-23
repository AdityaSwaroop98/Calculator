const Pooli = require("pg").Pool;

const client = new Pooli({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Swaroop@123",
    database: "calci"
});
client.on("connect", () => {
    console.log("Connection start");
});
client.on("end", () => {
    console.log("Connection end");
});
module.exports = client;