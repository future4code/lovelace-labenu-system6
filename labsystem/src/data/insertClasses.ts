import { connection } from "../connection";

export const insertClasses = async (
  id: string,
  name: string,
  date_initial: string,
  final_date: string,
  module: number,
  type?: string
): Promise<void> => {
  const verifyClass = await connection("system6_classes")
    .select("*")
    .where({ name });

  if (verifyClass.length) {
    throw new Error("Uma turma com esse nome já está cadastrada.");
  }

  if (!type || type === "-na-night") {
    await connection
      .insert({
        id,
        name: name + type,
        date_initial,
        final_date,
        module,
        type,
      })
      .into("system6_classes");
  }

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
