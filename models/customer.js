import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    identification: { type: Number, required: true },
    dv: { type: Number, required: true },
    names: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    identification_document_id: { type: Number, required: true, default: 2 }
});


export default  mongoose.model("Customer", customerSchema);

