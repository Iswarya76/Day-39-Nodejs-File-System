const http = require('http')
const fs = require('fs')
const { isUtf8 } = require('buffer')

//Server creation
const server = http.createServer((req, res)=>{    
    let filename = new Date().toLocaleDateString().split('/').join('-')+'-'+new Date().toLocaleTimeString().split(':').join('-');                               
    res.writeHead(200,{"Content-type":"application/json"}) 
    fs.writeFile(`Timefolder/${filename}.txt`, `Time is - ${new Date().toTimeString()}`, 'utf-8', ()=>{

        fs.readFile(`Timefolder/${filename}.txt`, 'utf-8', (error, data)=>{
           if (error)
           console.log(error)
            else 
            res.end(data)
     
        })
    })
})

//Activate server
server.listen(5000, ()=>console.log('Server is listening port 5000'))