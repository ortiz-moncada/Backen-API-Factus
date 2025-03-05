import mongoose from "mongoose";
import facturaModels from "../models/facturas.js";



    //crear
    const postFactura = async (req, res) => {
        try {
            const  {reference_code, obsevation, payment_form, payment_due_date, email,phone,
                payment_method_code,customer,items,billing_period} = req.body;
    
                const Factura = new facturaModels({
                    reference_code, obsevation, payment_form, payment_due_date, email,phone,
                payment_method_code,customer,items,billing_period
                });
            await Factura.save();
            res.json(Factura);
        } catch (error) {
            res.status(400).json({ message: "falla en la operacion" });
            console.log(error)
        }
    }

    //listar factura
    const getFactura = async (req, res) => {
        try {
            const factura = await facturaModels.find();
            res.json(factura)
        }catch (error) {
            console.error(error);
            res.status(400).json({error:"error al mirar facturas"})
        }

    }




export {
    postFactura,
    getFactura
}
