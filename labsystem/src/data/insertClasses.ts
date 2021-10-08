import { connection } from "../connection";

export const insertClasses = async (
  id: string,
  name: string,
  date_initial: string,
  final_date: string,
  module: number,
  type?: string
): Promise<any> => {
  await connection
    .insert({
      id,
      name,
      date_initial,
      final_date,
      module,
      type,
    })
    .into("system6_classes");
};
