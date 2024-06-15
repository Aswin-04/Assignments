const fs = require("fs")

fs.readFile("a.txt", "utf-8", (err, data) => {
    const fileData = data.split(" ").filter((str) => str != "").join(" ")
    fs.writeFile("a.txt", fileData, () => {
        console.log("File Written Successfully")
    })
})