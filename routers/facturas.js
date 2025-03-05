import Router from "express";
import {getFactura, postFactura} from '../controller/facturas.js'

const router =  Router();

router.post('/', postFactura);
router.get('/FAT',getFactura)

export default router;