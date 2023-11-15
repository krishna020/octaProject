const mongoose=require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log('database is connected...');
})
.catch((err)=>
{
    console.log('err: '+err);
})