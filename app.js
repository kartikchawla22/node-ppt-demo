const express = require("express");
const app = express();
const routes_v1 = require('./src/routes/v1/routes_v1');

app.use("/api/v1", routes_v1);

// Configure the API port
var port = 4400;
// Start the web server
app.listen(port);
console.log("App Running on port " + port);
