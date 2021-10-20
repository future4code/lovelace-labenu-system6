import { Request, Response } from "express";
import { getAgeStudantById } from "../data/getAgeStudantById";

export const getAge = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    //validar entradas da requisição
    //consultar o banco de dados
    //validar saídas do banco
    //responder a requisição
    const result = await getAgeStudantById(id);
    if (!result) {
      res.send({
        message: "User not found",
      });
    }
    return res.send(result);
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
