import { connection } from "../connection";

export const insertTeatcherClass = async (
  id: string,
  name: string,
  email: string,
  data: Date,
  specialty: string
): Promise<any> => {
  const result = await connection
    .insert({
      id,
      name,
      email,
      data,
      specialty,
    })
    .into("system6_teachers");

  if (result) {
        
  }

  return result;
};
