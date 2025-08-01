import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true

        },
        phone:{
            type:String,
            require:true

        },
        gender: {
            type:String,
            require:true
        },
        
});

const StudentModel = mongoose.model('Student',studentSchema);

export default StudentModel;