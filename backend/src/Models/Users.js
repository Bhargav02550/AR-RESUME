const mongoose = require('mongoose');
const schema = mongoose.Schema;


const UserSchema = new schema({
    personal: {
        rollno:{
            type: String,
            required: true,
            unique: true,
        },
        name:String,
        email:String,
        phone:String,
        github:String,
        linkedin:String,
    },
    education:{
        type: Object,
        required:true,
    },
    projects:{
        type: Object,
        required:true,
    },
    languages:{
        type:Object,
        required:true,
    },
    frameworks:{
        type:Object,
        required:true,
    },
    createdAt:{
        type:String,
        required:false,
        minlength:10,
        maxlength:1024
    },
    updatedAt:{
        type:String,
        required:false,
        minlength:10,
        maxlength:1024
    },

});

UserSchema.pre('save', function(next) {
    this.personal.rollno = this.personal.rollno.toLowerCase();
    next();
});

UserSchema.pre('save' , function(next){
    this.createdAt = new Date();
    this.updatedAt = new Date();
    next();
})

module.exports = mongoose.model("User", UserSchema);
