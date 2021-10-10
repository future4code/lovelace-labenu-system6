import { connection } from "../connection";
import { Studant } from "../services/types";

export const getAgeStudantById = async (
  id: string
): Promise<Studant | undefined> => {
  const findById = await connection("system6_studants").select().where({ id });

  if (!findById.length) {
    return undefined;
  }

  const birth_date = new Date(findById[0].data);
  const dateAtual = new Date();
  const age = dateAtual.getFullYear() - birth_date.getFullYear();

  const studant: Studant = {
    name: findById[0].name,
    email: findById[0].email,
    age,
    classes_id: findById[0].classes_id,
  };

  return studant;
};
