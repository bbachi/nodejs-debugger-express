const express = require("express");

const app = express();

app.get("/", (req, res) => {
    debugger
    console.log("Sample App!!!!!")
})

app.listen(3040, () => {
    debugger
    console.log("App listening on port 3040!!!!");
})