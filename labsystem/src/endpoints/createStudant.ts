import { Request, Response } from "express";
import { insertStudant } from "../data/insertStudant";

export const createStudant = async (req: Request, res: Response) => {
  try {
    //validar entradas da requisição
    const { name, email, data } = req.body;

    if (!name || !email || !data) {
      res.status(400).send("Preencha todos os campos");
    }

    //consultar o banco de dados
    const id: string = Date.now() + Math.ceil(Math.random()).toString();

    await insertStudant(id, name, email, data);

    //responder a requisição
    res.send("Studant created!");
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
