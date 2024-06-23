const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data)
})

let count = 0;

for(let i=0;i<10000000000;i++){
    count  = count+i;
}

console.log(count)