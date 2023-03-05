"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    res.send('Bienvenido al API');
});
router.post('/getallalumnos', index_1.getAllAlumnos);
router.post('/getonealumno/:id', index_1.getOneAlumno);
router.post('/createalumno', index_1.createAlumno);
router.post('/updatealumno/:id', index_1.updateAlumno);
router.post('/deletealumno/:id', index_1.deleteAlumno);
exports.default = router;
