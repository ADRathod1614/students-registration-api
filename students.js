const mongoose=require('mongoose');
const validator=require('validator');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
        email:
        {type:String,
        require:true,
        Unique:[true,"email is already is present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        },
        },
        phone:{
            type:Number,
            min:10,
            Unique:true,
            require:true
        },
        address:{
            type:String,
            require:true
        }

})

//create collection
const student=new mongoose.model('Student',studentSchema);
module.exports=student;