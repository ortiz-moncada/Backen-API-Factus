import Router from 'express';
import {getCustomer, postCustomer, putCustomerMo} from '../controller/customer.js';

const router = Router();


router.post("/", postCustomer);
router.get("/customer",getCustomer);
router.put("/:id",putCustomerMo)

export default router;
