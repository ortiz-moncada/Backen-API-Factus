import mongoose from 'mongoose';
import customerModel from '../models/customer.js';


//crear los customers
const postCustomer = async (req, res)=>{
    try {
        const {identification, dv, names, address, email,phone,identification_document_id,tribute_id,municipality_id} = req.body;
        const customer = new customerModel({
            identification,
            dv,
            names,
            address,
            email,
            phone,
            identification_document_id,
            tribute_id,
            municipality_id
        });
        await customer.save();
        res.json({customer})
    } catch (error) {
        res.status(400).json({error:"Error saving customer"})
        console.log(error);
}  
}

//listar todos los customers
const getCustomer = async (req,res)=>{
    try {
    const customer = await customerModel.find();
    res.json(customer)
} catch (error) {
    console.error(error);
    res.status(400).json({error:"Error al mirar customer"});
}
}

// modificar customers 
const putCustomerMo = async (req,res)=>{
 try{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"ID no es valido"});};
        const {
            identification,
            dv,
            names,
            address,
            email,
            phone,
            identification_document_id,
            tribute_id,
            municipality_id
        } = req.body;
        const customer = await customerModel.findByIdAndUpdate(id,{
            identification,
            dv,
            names,
            address,
            email,
            phone,
            identification_document_id,
            tribute_id,
            municipality_id
        },{new:true});
        if(!customer){
            return res.status(400).json({error:"Movimiento no encontrado "})
        }
        res.json(customer);
}catch(error){
    res.status(400).json({error:"Falla en la operacion"})
    console.log(error)
}
}


export {
    postCustomer,getCustomer,putCustomerMo
}