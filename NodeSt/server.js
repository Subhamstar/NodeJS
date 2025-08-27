const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method==="GET"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Hello World");
    }else{
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Nothing");
    }
});

server.listen(3000,()=>{
    console.log("Server in running on port 3000...");
})