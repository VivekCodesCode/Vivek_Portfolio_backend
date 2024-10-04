const User=require("../models/user")
async function get_data(req,res){
    res.send("HE HEHEHE");
}
async function insert_data(req,res){
   console.log(req.body);
   res.send("succcess");
}
module.exports={
    get_data,insert_data
}