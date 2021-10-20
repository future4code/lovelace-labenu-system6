import { Request, Response } from "express";
import { getStudantsByClass } from "../data/getStudantsByClass";

export const getStudantClass = async (req: Request, res: Response) => {
  try {
    //validar entradas da requisição
    const { name } = req.params;

    if (!name) {
      throw new Error("O campo não pode está vazio");
    }

    const result = await getStudantsByClass(name);
    if (!result) {
      throw new Error("sem resultados.");
    }

    res.send(result);
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
