const express = require('express');

const app = express();


//health Check up
app.get('/',(req,res)=>{
    res.send('this is working..........................')
})


app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('the server is  running on port: 3000');
    }
    
})