import { Router } from 'express';

import {  GetAllEmployee, 
    GetSingleEmployee, 
    CreateEmployee, 
    getOrg, 
    deleteEmployee
} from '../controllers/employees';

const router = Router();

router.post('/', CreateEmployee);

router.get('/', GetAllEmployee);


router.get('/:id', GetSingleEmployee); 

router.put('/:id', getOrg);

router.delete('/:id', deleteEmployee);

export default router;