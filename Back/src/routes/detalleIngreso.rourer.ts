import express from "express";
import * as controller from '../controller/detalleIngreso.controller';
import { DetalleIngreso } from "../model/detalleIngreso";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetDetalleIngresos()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addDetalleIngreso(req.body as DetalleIngreso)
    .then((f)=>{
        if(f)
        res.status(201).send();
        else
        res.status(500).send();
    })
    .catch((e) => {
        res.status(500).json(e);
    })
})

export default router;