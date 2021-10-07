import { connection } from "../connection";

export const insertStudant = async (
  id: string,
  name: string,
  email: string,
  data: string
): Promise<any> => {
  await connection
    .insert({
      id,
      name,
      email,
      data,
    })
    .into("system6_studants");
};
