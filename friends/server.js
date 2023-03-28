const express = require('express');
const app = express();

const port = 8083;

app.get('/friends-list',(req,res)=> {
    // data from database
    let response = {
        data : {
            item : [
                {
                    id:1,
                    name:'friend 1'
                },
                {
                    id:2,
                    name:'friend 2'
                },
                {
                    id:3,
                    name:'friend 3'
                },
            ]
        }
    }
    res.status(200).json(response)
})

app.listen(port,()=>{
    console.log(`Friend Api is running on => http://localhost:${port}`)
})