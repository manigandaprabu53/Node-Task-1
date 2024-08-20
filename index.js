import express from 'express';
import fs from 'fs';
const app = express();
const date = new Date();
const timeStamp = date.getTime();
const port = process.env.PORT || 8000;
const dir_name = '.'
function getFileName(){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milli = String(date.getMilliseconds()).padStart(2, 0);
    let  filename = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}-${milli}.txt`;

    return filename;
}

fs.writeFileSync(`./${getFileName()}`, `${timeStamp}`, 'utf-8')

// fs.readdirSync('.', (err, files)=>{
//     if(!err){
//         console.log(files)
//     }else{
//         console.log(err)
//     }
// });

fs.readdir(dir_name, (err, files)=>{
    if(err){
        return console.error('All Error'+err);
    }else{
        console.log(files);
    }
})

app.get('/', (req, res)=>{
    console.log(req)
    res.send('<h1>Welcome to Express JS</h1>')
    
})

app.listen(port, ()=>{console.log(`App is listening on ${port}`)})