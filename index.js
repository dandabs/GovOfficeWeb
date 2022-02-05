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

app.get("/government/how-government-works", function (req, res) {
    res.render("government/how-government-works", { pageTitle: "How government works" });
});

app.use("/cdn", express.static("content"));
app.use("/cdn/bootstrap", express.static("node_modules/bootstrap/dist"));

app.get('*', function(req, res){
    res.status(404).send('what???');
});

app.listen(config.port, () => {
    console.log(`Ready.`);
});
