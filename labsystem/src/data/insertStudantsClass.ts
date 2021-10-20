import { connection } from "../connection";

export const insertStudantsClass = async (
  id: string,
  classes_id: string
): Promise<void> => {
  const validStudanteId = await connection("system6_studants")
    .select("*")
    .where({ id });

  //validar id do usuário se existe
  if (!validStudanteId.length) {
    throw new Error("Este estudante não foi encontrado.");
  }
  //validar se o usuário já possui uma classe
  const validStudant = validStudanteId[0].classes_id;
  if (validStudant && validStudant !== null) {
    throw new Error("O estudante já possuí uma turma!");
  }

  await connection("system6_studants").update({ classes_id }).where({ id });
};
