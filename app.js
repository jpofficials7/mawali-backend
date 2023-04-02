import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("hello from mawali");
});

app.listen(8000,()=>{
    console.log('server running at 8000');
})