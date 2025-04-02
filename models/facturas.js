import mongoose from "mongoose";


const facturaSchema = mongoose.Schema({
   data:{type:mongoose.Schema.Types.Mixed, required:true}
})

export default mongoose.model("Factuc",facturaSchema);  