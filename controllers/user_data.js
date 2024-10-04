const User=require("../models/user")
async function get_data(req,res){
    res.send("HE HEHEHE");
}
async function insert_data(req,res){
   console.log(req.body);
  const user=new User(req.body);
 await user.save();
  res.send("Done")
}
module.exports={
    get_data,insert_data
}