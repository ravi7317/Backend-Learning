const http = require("node:http");
const server = http.createServer((req,res) =>{
    res.statusCode =200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    res.end(
        JSON.stringify({
            message: "My backend is running!"
        })
    );
});

server.listen(3000, "127.0.0.1" ,() =>{
    console.log("server is running at http://127.0.0.1:3000");
});