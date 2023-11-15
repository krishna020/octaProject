const mongoose=require('mongoose')

// Define the vehicle schema
const vehicleSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:
    {
        type:String,
        required:true 
    },
    number_of_wheels:
    {
        type:Number,
        required:true
    },
    vehicle_type:
    {
        type:String,
        required:true
    },
    select_model:
    {
        type:String,
        required:true 
    },
    startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      }  
},{timestamps:true})




// Create the vehicle model
const Vehicle = mongoose.model('Vehicle',vehicleSchema);
module.exports = Vehicle;



