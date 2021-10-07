import { connection } from "../connection";

export const insertTeacher = async (
  id: string,
  name: string,
  email: string,
  specialty: string
): Promise<any> => {
  await connection("system6_teachers")
    .insert({
      id,
      name,
      email,
      specialty,
    })
    
};