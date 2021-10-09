import { Request, Response } from "express";
import { insertTeatcherClass } from "../data/insertTeatcherClass";

export const addTeacherToClass = async (req: Request, res: Response) => {
  try {
    //validar entradas da requisição
    const id: string = req.params.id;

    const classes_id: string = req.body.classes_id;

    if (!classes_id) {
      throw new Error("Campo vazio");
    }

    //consultar o banco de dados

    await insertTeatcherClass(id, classes_id);

    //validar saídas do banco

    res.send("Docente adicionado a turma");

    //responder a requisição
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
