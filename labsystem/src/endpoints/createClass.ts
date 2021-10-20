import { Request, Response } from "express";
import moment from "moment";
import { insertClasses } from "../data/insertClasses";

export const createClasses = async (req: Request, res: Response) => {
  try {
    //validar entradas da requisição
    const { name, date_initial, final_date, module, type } = req.body;

    if (!name || !date_initial || !final_date || (!module && module < 0)) {
      throw new Error("Não pode haver campos vazios!");
    }

    const dateDiff: number =
      moment(final_date, "DD/MM/YYYY").unix() - moment().unix();

    if (dateDiff < 0) {
      throw new Error("Digite uma data futura");
    }

    if (name.length < 6) {
      throw new Error("o nome da turma deve conter no mínimo 6 caracters");
    }
    //consultar o banco de dados

    const id: string = Date.now() + Math.ceil(Math.random()).toString();

    await insertClasses(
      id,
      name,
      moment(date_initial, "DD/MM/YYYY").format("YYYY-MM-DD"),
      moment(final_date, "DD/MM/YYYY").format("YYYY-MM-DD"),
      module,
      type
    );

    //responder a requisição

    res.send({
      message: "Turma criada",
      id,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
