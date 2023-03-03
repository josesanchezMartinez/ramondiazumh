import { Router } from 'express';
import {getAllAlumnos, getOneAlumno, createAlumno, updateAlumno ,deleteAlumno} from '../controllers/index';

const router : Router = Router();

router.post('/', (req, res) => {
    res.send('Bienvenido al API')
})

router.post('/getallalumnos', getAllAlumnos);
router.post('/getonealumno/:id', getOneAlumno);
router.post('/createalumno', createAlumno);
router.post('/updatealumno/:id', updateAlumno);
router.post('/deletealumno/:id', deleteAlumno);

export default router;