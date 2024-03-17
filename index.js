const express = require ("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const {Server} = require("socket.io")
const io  = new Server(server)

//Socket.io Connection

io.on("connection",(socket) => {
// console.log("a new user is connected",socket.id)
socket.on("user-message",(message) => {
io.emit("message",message);
})
})

// app.use(express.static(path.resolve("./public")));
app.use(express.static(path.join(__dirname,"public"))) ;
server.listen(9000,() =>{
    console.log(`I am listening at port 9000`)
})
app.get("/", (req,res)=> {
    // return res.sendFile("./public/index.html");
    res.render("index.html")
});