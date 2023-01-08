import express from "express";

import userRouter from "./controllers/users/index.js";

import todosRouter from "./controllers/todos/index.js";

//Instantiaiton

const port = 5001;


app.use(express.json()) // middleware

//write first route
    // app.get("/",(req,res) => {
    //     res.send("THE server is Up")
    // })

app.use("/api/user",userRouter);

app.use("/api/todos",todosRouter);

app.post("/api/todos",(req,res) => {
    try {
        console.log(req.body);
        //console.log(req.ip);
        res.status(200).json({success:"add todo is up"});
    } catch (error) {
        console.error(error);
        req.status(500).json({error:"Internal server error"});
    }
})


// app.post("/api/register",(req,res) => {
//     try {
//         console.log(req.body);
//         console.log(req.ip);
//         res.status(200).json({success:"register is Up"});
//     } catch (error) {
//         console.error(error);
//         req.status(500).json({error:"Internal server error"});
//     }
// })


//use listen for client 
app.listen(port,() => {
    console.log("The server is running on Port : ", port)
})