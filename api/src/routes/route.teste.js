import { Router } from "express";
import controllerTeste from "../controllers/controller.teste.js";

const routeTeste = Router();

routeTeste.get("/teste/buscarEmail", controllerTeste.Teste);

export default routeTeste;