import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { v4 as uuidV4 } from "uuid";

const app = express();
const httpServer = createServer(app);
app.set('view engine','ejs')
app.use(express.static('public'))

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});


app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});


app.get('/:room', (req,res) => {
    res.render('room', {roomId : req.params.room})
})


httpServer.listen(3000, () => {
    console.log("server is running on port : 3000")
})



export { io, httpServer, app, uuidV4 };