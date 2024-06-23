const fs = require('fs');
const path = require('path');

filenames = []

fs.readdir('./files', (err,files) => {
    files.forEach(file => {
        filenames.push(file)
        console.log(filenames)
    })
  })

  console.log(filenames)