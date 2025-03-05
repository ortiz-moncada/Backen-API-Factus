import mongoose from "mongoose";


const facturaSchema = mongoose.Schema({
    reference_code:{type:String, require:true },
    obsevation:{type:String},
    payment_form:{type:Number, require:true},
    payment_due_date:{type:Date,require:true},
    payment_method_code:{type:Number, require:true},
    customer:{type:Object, required:true}, //recibe objeto completo con datos del cliente
    items:{type:Array, required:true},
    billing_period:[{
        start_date:{type:Date, require:true},
        end_date:{type:Date, require:true}
    }],
   
})

export default mongoose.model("Factura",facturaSchema);