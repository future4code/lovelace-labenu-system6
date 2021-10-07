
import { Request, Response } from "express";
import { insertTeacher } from "../data/insertTeacher";

export const createTeacher = async (req: Request, res: Response) => {
    try {
      //validar entradas da requisição
      const { name, email, data, specialty } = req.body;
  
      if (!name || !email || !specialty) {
        res.status(400).send("Preencha todos os campos");
      }
  
      //consultar o banco de dados
      const id: string = Date.now() + Math.ceil(Math.random()).toString();
  
      await insertTeacher(id, name, email, data, specialty);
  
      //responder a requisição
      res.send("Teacher created!");
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  };

