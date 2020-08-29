//import { findAll } from "../../component/db";
import { fetchKnows } from "../../component/connect";
export default async (req, res) => {
  const result = await fetchKnows();
  res.statusCode = 200;
  res.json(result.data.listKnows.items);
};
