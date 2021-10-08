import { connection } from "../connection";

export const insertStudantsClass = async (id: string, classes_id: string): Promise<any> => {
  await connection.raw(`
  UPTADE system6_studants
  SET classes_id = ${classes_id}
  WHERE id = ${id}
  `)

};