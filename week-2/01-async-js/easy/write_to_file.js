const fs = require("fs")

fs.writeFile("a.txt","Hello Aj",(err)=>{
    if(err) throw error;
})