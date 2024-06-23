const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data) => {
    let str = data.split(" ");
    str = str.filter((word) => {
        return word!="";
    })
    fs.writeFile("a.txt", str.join(" "), (err) => {
        if(err) throw err;
    })
})
