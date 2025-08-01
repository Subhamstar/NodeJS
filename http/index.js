const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write('<h1>Hello World </h1>');
    }
    res.end();
})
server.listen(5000,()=>{
    console.log("Server is running in port 5000");
})