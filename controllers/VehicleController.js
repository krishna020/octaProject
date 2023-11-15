const express=require('express')
const vehicleSchema=require('../model/vehicleModel')
const router=express.Router();

router.get('/get',(req,res)=>
{
    vehicleSchema.find()
    .then((data)=>
    {
        res.status(200).send(data)
    })
    .catch((err)=>
    {
        res.status(400).send("err: "+err)
    })
})

router.post('/post',async (req,res,next)=>
{
   console.log('req.body: '+req.body)
   const vehicle=new vehicleSchema({
    //_id:new mongoose.Types.ObjectId,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    number_of_wheels:req.body.number_of_wheels,
    vehicle_type:req.body.vehicle_type,
    select_model:req.body.select_model,
    startDate: req.body.startDate,
    endDate: req.body.endDate
})

vehicle.save()
.then((result=>
    {
        res.status(200).json({
            newVehicle:result
        })
    }))
    .catch((error)=>
    {
        console.log('error : '+error)
        res.status(400).json({
            error:"Error..."
        })
    })
})


module.exports=router