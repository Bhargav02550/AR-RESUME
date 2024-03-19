const User = require('../Models/Users');
var path = require('path')
const fs = require('fs');
//  const Register = async (req, res, next) => {    
//     const { first_name, last_name, email, password, user_type, emp_id, phone, added_by, created_date, updated_date, status} = req.body;
//     const original_name = req.files[0]['originalname'];
//     const extension = path.extname(original_name);
//     const profile_pic = "uploads/user_icons/"+ req.files[0]['filename']+extension;
//     const size = req.files[0]['size'];
//     fs.rename("uploads/user_icons/"+ req.files[0]['filename'], profile_pic, function (err) {
//         if (err) throw err;
//       });
//     let user;
    
//         user = new User({
//             first_name,
//             last_name,
//             email,
//             password,
//             user_type,
//             profile_pic,
//             emp_id,npm
//             phone,
//             added_by,
//             created_date,
//             updated_date,
//             status,
//         });
//         // if((extension!='.png' || extension != '.jpg') && size>70000){
//         //     return res.status(500).json({message:"file type should be .jpg or .png and file size should not be greater than 70kb"})
//         // }else{
            
//         // }
//         await user.save().then(
//             () => {
//               res.status(201).json({
//                 message: 'Post saved successfully!'
//               });
//             }
//           ).catch(
//             (error) => {
//                 console.log(error)
//               res.status(400).json({
//                 message: "adding user failed"
//               });
//             }
//           );
//     // if (!user) {
//     //     return res.status(500).json({ message: "User details not saved" })
//     // }
//     // return res.status(201).json({ message:"User Added successfully" })
// }

 const getUsers = async(req,res,next)=>{
    let student;
    try {
        console.log(req.query.rollno);
        student = await User.aggregate(
            [{ $match: { rollno: req.query.rollno } }],
            { maxTimeMS: 60000, allowDiskUse: true }
          );
          console.log(student);
        res.status(200).json(student);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
}

const postUsers = async(req,res,next)=>{
    try{
        const user = new User(req.body);
        const createdUser = await user.save();
        res.status(201).json(createdUser);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
}

// const loginUser = async(req,res,next)=>{
//     var data = {
//         email:req.body.email,
//         password:req.body.password
//     }

//     let user;
//     try{
//         user = await User.findOne(data)
//     } catch(err){
//         console.log(err)
//     }

//     if(!user){
//         return res.status(500).json({message:"login failed"})
        
//     }
//     // if(res.status==201){
//     //     //localStorage.setItem("currUsername", data.user_name);
//     //     //console.log(localStorage.getItem("currUsername"));
//     // }
//     return res.status(201).json({"username":user.user_name, "email":user.email, "userType":user.userType})
    
// }
// exports.Register = Register;
exports.getUsers = getUsers;
exports.postUsers = postUsers;
// exports.loginUser = loginUser;