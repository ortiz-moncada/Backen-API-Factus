import Router from "express";

import { postItems,getItems, putitems } from "../controller/items.js";


const router = Router();


router.post('/',postItems)
router.get('/items',getItems)
router.put('/:id',putitems)


export default router;