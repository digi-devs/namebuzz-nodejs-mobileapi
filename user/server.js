const express = require('express');
const app = express();
const db = require('../api-gateway/db.js'); 
const port = 3001;

app.get('/user-list',(req,res)=> {
    db.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        res.status(200).json({err_code: "",
        msg: "Getting All Users to response", data: result });
      });
})

app.listen(port,()=>{
    console.log(`User Api is running on => http://localhost:${port}`)
})