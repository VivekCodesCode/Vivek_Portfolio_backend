const Rivew=require("../models/Rivew")

async function insert_data(req,res){
   console.log(req.body);
  const rivew=new Rivew(req.body);
 await rivew.save();//Must
  res.send("Done")
}
async function get_rivew(req, res) {
    try {
      let all_rivew = await Rivew.find();  // Fetch all documents in Rivew collection
      console.log(all_rivew);    
      res.send(all_rivew)          // Log the documents
    //   res.status(200).json(all_rivew);     // Send the documents as JSON response
    } catch (error) {
      console.error("Error fetching reviews: ", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  }
module.exports={
    insert_data,get_rivew,
}