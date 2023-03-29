const gateway = require('fast-gateway')
const urlPath = "http://localhost:"
const port = 9001;

const checkAuth = (req,res,next)=>{
    if(req.headers.token && req.headers.token !=''){
        next()
    }else{
        res.setHeader('Content-type','application/json');
        res.status = 401;
        res.end(JSON.stringify({status:401,message:"Authentication Failed"}))
    }
}

const server =  gateway({
    routes: [
        {
            prefix:'/user',
            target:`${urlPath}8081/`,
            middlewares:[checkAuth],
            hooks:{}
        },
        {
            prefix:'/friends',
            target:`${urlPath}8082/`,
            hooks:{}
        }
    ]
})


server.get('/serverTest',(req,res)=>res.send('Gateway Working...'))

server.start(port).then(server=>{
    console.log('Api Gateway is Running')
})