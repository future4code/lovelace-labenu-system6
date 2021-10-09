import { connection } from "../connection";

export const insertTeatcherClass = async (
  id: string,
  classes_id: string
): Promise<any> => {
  await connection("system6_teachers").update({ classes_id }).where({ id });

  //validar id do usuário se existe
};
