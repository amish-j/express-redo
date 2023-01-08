import express from "express";

const router = expressRouter();

router.get("/add",(req,res) => {
    req.send("I am a express router <todos>")
})

export default router;