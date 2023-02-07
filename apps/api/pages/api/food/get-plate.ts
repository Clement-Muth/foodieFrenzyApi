import { NextApiRequest, NextApiResponse } from "next";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite";
import { formatDoc, fs } from "common/libraries/firebase";
import { IS_DEV } from "common/utils/process.env";
import { Plate, Where } from "common/types";

const getPlate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).send({ message: "Only POST requests allowed" });

  const body: string | Where = req.body.plateId ?? req.body.where;

  try {
    let plate: Plate | undefined = undefined;

    if (typeof body == "string") plate = formatDoc<Plate>(await getDoc(doc(fs, "plates", body)));
    else {
      plate = formatDoc<Plate[]>(
        (await getDocs(query(collection(fs, "plates"), where(body.fieldPath, body.opStr, body.value)))).docs
      )?.at(0);
    }

    res.send(plate);
  } catch (e) {
    console.error(e);
    res.status(403).send(IS_DEV ? e : "An error occured, see the console to see more.");
  }
};

export default getPlate;
