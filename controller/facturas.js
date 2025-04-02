import mongoose from "mongoose";
import facturaModels from "../models/facturas.js";
//crear
const postFactura = async (req, res) => {
    try {
        const data = req.body.data;
        const Factura = new facturaModels({data});
        await Factura.save();
        console.log("data front",data)
        res.json({ message: "factura registrada", factura: Factura });
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
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "error al mirar facturas" })
    }

}


export {
    postFactura,
    getFactura
}
