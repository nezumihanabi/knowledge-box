//import { add } from "../../component/db";
import { addKnow } from "../../component/connect";
export default async (req, res) => {
  await addKnow(req.body);
  res.statusCode = 200;
};
