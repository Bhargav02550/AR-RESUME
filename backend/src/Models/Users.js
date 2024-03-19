const mongoose = require('mongoose');
const schema = mongoose.Schema;


const UserSchema = new schema({
    rollno: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength:30,
    },
    education:{
        type: Object,
        required: true,
    },
    projects:{
        type: Object,
        required:true,
    },
    prolang:{
        type:Object,
        required:false,
    },
    technologies:{
        type:Object,
        required:false,
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
    this.rollno = this.rollno.toLowerCase();
    next();
});

UserSchema.pre('save' , function(next){
    this.createdAt = new Date();
    this.updatedAt = new Date();
    next();
})

module.exports = mongoose.model("User", UserSchema);
