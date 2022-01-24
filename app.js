import express from "express";
import cors from "cors";

// const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const userInfo = [];
const tweetContent = [];
let mensagem = "Ok";

function validationSignUp (sendData){
   const { username, avatar} = sendData;


if (username.length===0 || avatar.length===0){
    mensagem = "BAD REQUEST: Todos os campos devem ser preenchidos!";

}

}

function validationTweet (sendData){
     const { username, tweet} = sendData;
     if (username.length===0 || tweet.length===0){
    mensagem = "BAD REQUEST: Todos os campos devem ser preenchidos!";
}
}

app.post("/sign-up", cors(),(req,res)=>{
    const user = req.body;
    validationSignUp(user);

    if(mensagem ==="Ok"){
        userInfo.push(user);
        res.send(mensagem);
    }
    else{
        res.status(400).send(mensagem)
    }
});

app.post("/tweets",(req,res)=>{
    const tweet = req.body;
    validationTweet(tweet);
    if(mensagem ==="Ok"){
    
        tweetContent.push(tweet);
    }
     else{
        res.status(400).send(mensagem)
    }
})

app.get("/tweets",(req,res)=>{
    if(tweetContent.length!==0){
        res.send(tweetContent.slice(-10));
    }
    else{
        res.send("Ainda não temos tweets! Faça o primeiro!")
    }
})


app.listen(5000,()=> console.log("Server Running at http://localhost:5000"));

