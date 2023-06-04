const a=require('./second')
const os = require('os');
const fs=require('fs')


fs.writeFileSync('abc.txt',"This is file writing",()=>{
    console.log('File writing done')
})


console.log("I am at this line")