const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const temp = path.join(__dirname,'template/views');
const temp_part = path.join(__dirname,'template/partians');
const port = process.env.PORT || 8000;
const pathp = path.join(__dirname,"public");
//console.log(pathp);
app.set('view engine', 'hbs');
app.set('views',temp);
hbs.registerPartials(temp_part);

app.use(express.static(pathp));

app.get("/", (req,res)=>{
    res.render("index");
});
app.get("/about", (req,res)=>{
    res.render("about");
});
app.get("/weather", (req,res)=>{
    res.render("weather");
});
app.get("*", (req,res)=>{
    res.render("404error");
});
app.listen(port,()=>{
    console.log("port started");
});