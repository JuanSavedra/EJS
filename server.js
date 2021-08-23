const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "J",
            message: "uan"
        },
        {
            title: "S",
            message: "avedra"
        },
        {
            title: "d",
            message: "os"
        },
        {
            title: "S",
            message: "antos"
        }
    ];

    const description = "";
    res.render("pages/index", {
        qualitys: items, 
        description: "Linguagem de Programação Front-End que usa NodeJS como Back-End."
    });
});

app.get("/sobre", function (req, res) {
    res.render("pages/about");
});

app.listen(8080);
console.log("Executando");