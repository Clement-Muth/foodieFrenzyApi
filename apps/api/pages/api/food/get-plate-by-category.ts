import { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { formatDoc, fs } from "common/libraries/firebase";
import { IS_DEV } from "common/utils/process.env";
import { Plate } from "common/types";

const getPlateByCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const category = req.body.category || null;

  try {
    if (!category) throw new Error("Please specify a category.");

    res.send(
      formatDoc<Plate[]>((await getDocs(query(collection(fs, "plates"), where("category", "==", category)))).docs)
    );
  } catch (e) {
    console.error(e);
    res.status(403).send(IS_DEV ? e : "An error occured, see the console to see more.");
  }
};

export default getPlateByCategory;
