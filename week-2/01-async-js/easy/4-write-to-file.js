const fs = require("fs")

let data = "hello there"
fs.writeFile("a.txt", data, (err) => {
    console.log("File written successfully")
})