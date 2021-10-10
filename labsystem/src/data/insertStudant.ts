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

  if (!selectHobby.length) {
    throw new Error("Hobby não encontrado!");
  }

  const studantExist = await connection("system6_studants")
    .select("id")
    .where({ email });

  if (studantExist.length) {
    throw new Error("Esse email já está cadastrado!");
  }

  await connection
    .insert({
      id,
      name,
      email,
      data,
    })
    .into("system6_studants");

  await connection("system6_student_hobby").insert({
    studants_id: id,
    hobby_name: hobby,
  });
};
