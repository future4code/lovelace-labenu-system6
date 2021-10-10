import { connection } from "../connection";

export const insertTeatcherClass = async (
  id: string,
  classes_id: string
): Promise<void> => {
  const validTeacherId = await connection("system6_teachers")
    .select("*")
    .where({ id });

  //validar id do usuário se existe
  if (!validTeacherId.length) {
    throw new Error("Professor não encontrado!");
  }
  //validar se o usuário já possui uma classe
  const validStudant = validTeacherId[0].classes_id;
  if (validStudant && validStudant !== null) {
    throw new Error("O Professor já faz parte dessa turma!");
  }

  await connection("system6_teachers").update({ classes_id }).where({ id });
};
