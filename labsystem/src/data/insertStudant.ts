import { connection } from "../connection";
export const insertStudant = async (
  id: string,
  name: string,
  email: string,
  data: string,
  hobby: string
): Promise<void> => {
  const selectHobby = await connection("system6_hobby")
    .select("name_hobby")
    .where({ name_hobby: hobby });

  if (!selectHobby[0]) {
    throw new Error("Hobby não encontrado!");
  } else {
    await connection
      .insert({
        id,
        name,
        email,
        data,
      })
      .into("system6_studants");

    const studantExist = await connection("system6_studants")
      .select("id as id_studant")
      .where({ email });

    const id_studant_save = studantExist[0].id_studant;
    if (id_studant_save <= 0) {
      throw new Error("id não encontrado!");
    }

    await connection("system6_student_hobby").insert({
      studants_id: id_studant_save,
      hobby_name: hobby,
    });
  }
};
