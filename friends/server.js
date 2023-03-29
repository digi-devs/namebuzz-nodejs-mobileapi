const express = require('express');
const app = express();
const db = require('../api-gateway/db.js'); 
const port = 3002;

// Apis
app.get('/friends-list',(req,res)=> {
    // data from database
    db.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        res.status(200).json({err_code: "",
        msg: "Posts added to response", data: result });
      });

    
    
})

app.listen(port,()=>{
    console.log(`Friend Api is running on => http://localhost:${port}`)
})