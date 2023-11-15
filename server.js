const express=require('express')
const bodyParser=require('body-parser')
const app=express();
require('./helper/conn')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const Router=require('./controllers/VehicleController')
app.use(Router)


app.listen(process.env.PORT,()=>
{
    console.log(`port ${process.env.PORT} is connected...`);
})