const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "firstname":String,
        "lastname":String,
        "email":String,
        "mobile":String
    }
)

let contactmodel=mongoose.model("contacts",schema)

module.exports={contactmodel}