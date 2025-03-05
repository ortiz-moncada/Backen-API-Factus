import mongoose from "mongoose";
import itemsModels from "../models/items.js";
import items from "../models/items.js";


    //crear
    const postItems = async (req, res) => {
        try {
            const  {code_reference, name, quantity, price, email,phone,
                withholding_taxes} = req.body;
                const items = new itemsModels({
                    code_reference, name, quantity, price, email,phone,
                    withholding_taxes
                });
            await items.save();
            res.json(items);
        } catch (error) {
            res.status(400).json({ message: "falla en la operacion" });
            console.log(error)
        }
    }

    //listar Todo
    const getItems = async (req, res) => {
        try {
            const items = await itemsModels.find();
            res.json(items);
        } catch (error) {
            res.status(400).json({ message: "falla en la operacion" });
            console.log(error)
        }
    }

    //modificar
    const putitems = async (req,res)=>{
     try{
        const {id} = req.params
        const {code_reference, name, quantity, price, email,phone,
                withholding_taxes} = req.body; 
            const items = await itemsModels.findByIdAndUpdate(id,{
                code_reference, name, quantity, price, email,phone,
                    withholding_taxes
               
            },{new:true});
            if(!items){
                return res.status(400).json({error:"Movimiento no encontrado "})
            }
            res.json(items);
    }catch(error){
        res.status(400).json({error:"Falla en la operacion"})
        console.log(error)
    }
    }


export {
    postItems,getItems,putitems
}