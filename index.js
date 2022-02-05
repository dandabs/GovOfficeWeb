const config = require("./config.json");

//const mysql = require("mysql");
//const con = mysql.createConnection(config.database);

const express = require("express");
const app = express();

const mustacheExpress = require("mustache-express");

app.set("views", `${__dirname}/views`);
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());

app.get("/", function (req, res) {
    res.render("index", { pageTitle: "Home" });
});

app.use("/cdn", express.static("content"));
app.use("/cdn/bootstrap", express.static("node_modules/bootstrap/dist"));

app.listen(config.port, () => {
    console.log(`Ready.`);
});
