"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlumno = exports.updateAlumno = exports.createAlumno = exports.getOneAlumno = exports.getAllAlumnos = void 0;
const database_1 = require("../database");
const getAllAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.pool.query('select * from alumnos');
        res.status(200).json(result.rows);
    }
    catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
});
exports.getAllAlumnos = getAllAlumnos;
const getOneAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield database_1.pool.query('select * from alumnos where id = $1', [id]);
        res.status(200).json(result.rows);
    }
    catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
});
exports.getOneAlumno = getOneAlumno;
const createAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo, nombre, apellido } = req.body;
        const result = yield database_1.pool.query('insert into alumnos (codigo, nombre, apellido) values ($1, $2, $3)', [codigo, nombre, apellido]);
        res.status(200).json({ message: "Alumno creado correctamente" });
    }
    catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
});
exports.createAlumno = createAlumno;
const updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { codigo, nombre, apellido } = req.body;
        const result = yield database_1.pool.query('UPDATE alumnos SET codigo= $1, nombre= $2, apellido= $3 WHERE id= $4', [codigo, nombre, apellido, id]);
        res.status(200).json({ message: "Alumno actualizado correctamente" });
    }
    catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
});
exports.updateAlumno = updateAlumno;
const deleteAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const result = yield database_1.pool.query('DELETE FROM alumnos WHERE id= $1', [id]);
        res.status(200).json({ message: "Alumno eliminado correctamente" });
    }
    catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
});
exports.deleteAlumno = deleteAlumno;
