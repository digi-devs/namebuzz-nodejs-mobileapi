const express = require('express');
const app = express();

const port = 8081;

app.get('/user-list',(req,res)=> {
    // data from database
    let response = {
        data : {
            item : [
                {
                    id:1,
                    name:'user 1'
                },
                {
                    id:2,
                    name:'user 2'
                },
            ]
        }
    }
    res.status(200).json(response)
})

app.listen(port,()=>{
    console.log(`User Api is running on => http://localhost:${port}`)
})