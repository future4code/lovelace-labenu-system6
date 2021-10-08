import { connection } from "../connection";

export const insertStudantsClass = async (
  id: string,
  classes_id: string
): Promise<any> => {
  await connection("system6_studants").update({ classes_id }).where({ id });

  //validar id do usuário se existe
};
