const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors()); //allow cors to all request
const db =
  "mongodb+srv://Optimistic31:Optimistic31@cluster0.5rz1n.mongodb.net/?retryWrites=true&w=majority";
const m=mongoose.connect(db)
const a=async()=>{
    const s=await m
    console.log(s);
}
a()
// console.log(m);
//   .then((res, rej) => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//console.log(m);
app
  .get("/", (req, res) => {
    res.send("hello world");
  })
  .listen(3000);
  console.log(db);
