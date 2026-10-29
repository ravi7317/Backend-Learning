const http = require("node:http");
const notes = [
    {
        id:1,
        title: "Grocerirs",
        content: " Buy milk and rice"
    }
];
const server =http.createServer((req,res) =>{
    console.log(req.method, res.url);
    res.setHeader("Content-Type","application/json; charset-utf-8");

    if(req.method === "GET"&& req.url ==="/"){
        res.ststusCode=200;

        return res.end(
            JSON.stringify({
                message: "My backend is running!"
            })
        );
    }
    if(req.method =="GET" && req.url=== "/notes"){
        res.statusCode=200;

        return res.end(JSON.stringify(notes));
    }
    res.ststusCode ==404;
    return res.end(
        JSON.stringify({
            error: "Route not found"
        })
    )
});
server.listen(3000 ,"127.0.0.1" , () =>{
    console.log("Server running at http://127.0.0.1:3000");
});