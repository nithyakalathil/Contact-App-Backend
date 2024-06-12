const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{contactmodel}=require("./models/contact")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/condactDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let contact=new contactmodel(input)
    contact.save()
    console.log(contact)
    res.json({status:"Success"})
})

app.get("/view",(req,res)=>{
    contactmodel.find().then((data)=>{
        res.json(data)
    })
})


app.post("/search",(req,res)=>{
    let input=req.body
    contactmodel.find(input).then((data)=>{
        res.json(data)
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    contactmodel.findByIdAndDelete(input._id).then(
        (response)=>{res.json({status:"Success"})}
    )
})


app.listen(8080,()=>{
    console.log("server started")
})