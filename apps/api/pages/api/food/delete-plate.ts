import { NextApiRequest, NextApiResponse } from "next";
import { doc, deleteDoc } from "firebase/firestore/lite";
import { fs } from "common/libraries/firebase";
import { IS_DEV } from "common/utils/process.env";

const deletePlate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "DELETE") return res.status(405).send({ message: "Only DELETE requests allowed" });

  const docId = (req.query?.docId as string) ?? null;

  try {
    if (!docId) throw new Error("Please specify a docId.");

    await deleteDoc(doc(fs, "plates", docId));

    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(403).send(IS_DEV ? e : "An error occured, see the console to see more.");
  }
};

export default deletePlate;
