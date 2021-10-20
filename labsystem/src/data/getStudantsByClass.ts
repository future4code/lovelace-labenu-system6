import moment from "moment";
import { connection } from "../connection";
export const getStudantsByClass = async (name: string): Promise<any> => {
  const result = await connection("system6_classes")
    .select([
      "system6_studants.name as studant_name",
      "system6_classes.name as class_name",
      "system6_classes.module",
      "system6_classes.type",
      "system6_classes.date_initial",
    ])
    .innerJoin("system6_studants", "classes_id", "system6_classes.id")

    .where("system6_classes.name", name);

  let classes: any = {
    std_class: [],
  };

  result.forEach((sysClass) => {
    classes.std_class.push({
      std_name: sysClass.studant_name,
      classe_name: sysClass.class_name,
      module: sysClass.module,
      type: sysClass.type,
      date: moment(sysClass.date_initial, "YYYY-MM-DD").format("DD-MM-YYYY"),
    });
  });

  return classes.std_class;
};
