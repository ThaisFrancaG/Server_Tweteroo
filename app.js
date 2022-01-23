import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const userInfo = [];
const tweetContent = [];

app.post("/sign-up",(req,res)=>{
    const user = req.body;
    userInfo.push(user);
    res.send("OK");
});

app.post("/tweets",(req,res)=>{
    const tweet = req.body;
    tweetContent.push(tweet);
    res.send("OK")
})

app.get("/tweets",(req,res)=>{
    res.send(tweetContent.slice(-10));
   
})


app.listen(5000,()=> console.log("Server Running"));

