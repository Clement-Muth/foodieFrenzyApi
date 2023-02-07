import { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore/lite";
import { formatDoc, fs } from "common/libraries/firebase";
import { IS_DEV } from "common/utils/process.env";
import { Plate } from "common/types";

const getAllPlates = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("hello");
  if (req.method !== "GET") return res.status(405).send({ message: "Only GET requests allowed" });
  try {
    const plates = formatDoc<Plate[]>((await getDocs(collection(fs, "plates"))).docs);

    res.send(plates);
  } catch (e) {
    console.error(e);
    res.status(403).send(IS_DEV ? e : "An error occured, see the console to see more.");
  }
};

export default getAllPlates;
