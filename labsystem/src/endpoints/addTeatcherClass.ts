import { Request, Response } from "express";

export const addTeacherToClass = async (req: Request, res: Response) => {
  try {
    //validar entradas da requisição
    //consultar o banco de dados
    //validar saídas do banco
    //responder a requisição
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
