const fs = require("fs")

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data)
})

let n = 0;
for(let i=1; i <= 100000000000; i++) {
    n++;
}