import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import { pool } from '../database';

export const getAllAlumnos = async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await pool.query('select * from alumnos');
        res.status(200).json(result.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
}

export const getOneAlumno = async (req: Request, res: Response) => {
    try {
        const id = parseInt( req.params.id );
        const result: QueryResult = await pool.query('select * from alumnos where id = $1', [id]);
        res.status(200).json(result.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
}

export const createAlumno = async (req: Request, res: Response) => {
    try {
        const { codigo, nombre, apellido } =  req.body;
        const result: QueryResult = await pool.query('insert into alumnos (codigo, nombre, apellido) values ($1, $2, $3)', [codigo, nombre, apellido]);
        res.status(200).json({ message:"Alumno creado correctamente" });
    } catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
}

export const updateAlumno = async (req: Request, res: Response) => {
    try {
        const id = parseInt( req.params.id );
        const { codigo, nombre, apellido } =  req.body;
        const result: QueryResult = await pool.query('UPDATE alumnos SET codigo= $1, nombre= $2, apellido= $3 WHERE id= $4', [codigo, nombre, apellido, id]);
        res.status(200).json({ message:"Alumno actualizado correctamente" });
    } catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
}

export const deleteAlumno = async (req: Request, res: Response) => {
    try {
        const id = parseInt( req.params.id );
        const result: QueryResult = await pool.query('DELETE FROM alumnos WHERE id= $1', [id]);
        res.status(200).json({ message:"Alumno eliminado correctamente" });
    } catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
}

