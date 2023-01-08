import express from "express";

const router = express.Router();

router.get("/login",(req,res) => {
    req.send("I am in express Router ")
})

export default router;