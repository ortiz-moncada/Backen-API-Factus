import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    code_reference:{type:Number, required:true},
    name:{type:String, required:true},
    quantity:{type:Number, required:true},
    price:{type:Number, required:true},
    withholding_taxes: [{
        code: { type: Number, required: true },
        withholding_tax_rate: { type: Number, required: true }
    }]
})

export default mongoose.model("Items",itemsSchema);