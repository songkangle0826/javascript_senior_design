const express = require('express');
const e = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    console.log(req.query);
    let callback = req.query.callback;
    if(callback){
        res.send(`${callback}&&${callback}(${JSON.stringify([1,2,3,4,5,6])})`)
    }else{
        res.send({
            code: 0,
            data: [1,2,3,4,5,6]
        })
    }
})
app.listen(3000,()=>{
    console.log("启动了")
})