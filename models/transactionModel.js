const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    userid:{
        type:String,
        require:true,
    },
    amount:{
        type:Number,
        require:[true,"Amount is required"]
    },
    type:{
        type:String,
        require:[true,"Type is required"]
    },
    category:{
        type:String,
        require:[true,"Category is required"]
    },
    reference:{
        type:String
    },
    description:{
        type:String,
        require:[true,"Description of Transaction is requried"]
    },
    date:{
        type:Date,
        require:[true,'Date is Required']
    }
},{timestamps:true})

const transactionModel = mongoose.model('transaction',transactionSchema)
module.exports= transactionModel