import { connection } from "../connection";

export const insertTeacher = async (
  id: string,
  name: string,
  email: string,
  data: string,
  specialty: string
): Promise<void> => {
  const selectSpecialty = await connection("system6_specialties")
    .select("name_specialties")
    .where({ name_specialties: specialty });

  if (!selectSpecialty[0]) {
    throw new Error("especialidade não encontrada!");
  }

  const teachersExist = await connection("system6_teachers")
    .select("id")
    .where({ email });

  if (teachersExist.length) {
    throw new Error("Esse email já está cadastrado!");
  }

  await connection("system6_teachers").insert({
    id,
    name,
    email,
    data,
    specialty,
  });

  await connection("system6_teachers_specialties").insert({
    teachers_id: id,
    name_specialties: specialty,
  });
};
