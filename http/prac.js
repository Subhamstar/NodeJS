const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write(
            '<h1>Hello ji  !!</h1>'
        );
    }
    // res.end();
    else if(req.url==='/home'){
        res.write(
            '<h1>Home page !!</h1>'
        );
    }
    // res.end();
    else if(req.url==='/about'){
        res.write(
            '<h1>About !!</h1>'
        );
    }
    else{
        res.statusCode=500;
        res.setHeader('Content-Type','application/json');
        res.end('Server Error');
    }
    res.end();
})
server.listen(5000,()=>{
    console.log("Server is running on port 5000");
})