const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

//use handlebar as view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../public/templates/views"));
hbs.registerPartials(path.join(__dirname, "../public/templates/partials"));

//render home page and about page
app.get("/", (req, res) => {
    res.render("index", { title: "Currency Converter" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

//render 404 page when the route is invalid
app.get("/about/*", (req, res) => {
    res.status(404).render("404", { title: "404", message: "Page not found!" });
});

app.get("/*", (req, res) => {
    res.status(404).render("404", { title: "404", message: "Page not found!" });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
