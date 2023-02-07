import { NextApiRequest, NextApiResponse } from "next";
import { doc, setDoc } from "firebase/firestore/lite";
import { fs } from "common/libraries/firebase";
import { IS_DEV } from "common/utils/process.env";
import { Plate } from "common/types";

const addPlate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).send({ message: "Only POST requests allowed" });

  const body: Plate = req.body.plate;

  try {
    await setDoc(doc(fs, "plates", body.slug), body);

    console.log(fs);
    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(403).send(IS_DEV ? e : "An error occured, see the console to see more.");
  }
};

export default addPlate;
