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
  } else {
    await connection("system6_teachers").insert({
      id,
      name,
      email,
      data,
      specialty,
    });

    const teachersExist = await connection("system6_teachers")
      .select("id as id_teacher")
      .where({ email });

    const id_teachers_save = teachersExist[0].id_teacher;
    if (id_teachers_save <= 0) {
      throw new Error("id não encontrado!");
    }

    await connection("system6_teachers_specialties").insert({
      teachers_id: id_teachers_save,
      name_specialties: specialty,
    });
  }
};
