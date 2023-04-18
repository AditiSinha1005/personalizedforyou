const express=require("express");
const app=express();
const notes=require("../backend/data/notes");
app.listen(3000,console.log("app is listening at port"));
app.get('/',(req,res)=>{
res.send("working hi notes");
});
app.get('/api/notes',(req,res)=>{
res.json(notes);
});
app.get('/api/notes/:id',(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id);
    res.send(note);
    });
