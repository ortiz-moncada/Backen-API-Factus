import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import routercustomer from './routers/customer.js';
import routeritems from './routers/items.js';
import routerfacturas from './routers/facturas.js'

dotenv.config(); 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/factus/customer", routercustomer);
app.use("/factus/items", routeritems);
app.use("/factus/facturas", routerfacturas);


const PORT = process.env.PORT;  

app.get('/', (req, res) => {
    res.send('¡Hola, Backend!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: ${PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=> console.log("conectado a mongo"))
    .catch(err => console.error(err));
});
