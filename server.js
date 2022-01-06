let dane = {
    imie: "Jakub",
    nazwisko: "Drzewiecki",
    klasa: "3I2",
    grupa: "b"
}

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/data", function (req, res) {
    res.send(dane)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})