import { getApps, initializeApp, getApp } from "firebase/app";
import { DocumentSnapshot, connectFirestoreEmulator, getFirestore } from "firebase/firestore/lite";
import type { DocumentData, QueryDocumentSnapshot} from "firebase/firestore/lite"

import { config } from "dotenv";

config({ path: "../../.env" });

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const EMULATORS_STARTED = "EMULATORS_STARTED";

// @ts-ignore
if (!global[EMULATORS_STARTED]) {
  // @ts-ignore
  global[EMULATORS_STARTED] = true;
  process.env.HOSTNAME === "http://localhost:3000" && connectFirestoreEmulator(getFirestore(), "localhost", 9000);
}

export const fs = getFirestore(app);

type IOverload = {
  <T = any>(doc: DocumentSnapshot<DocumentData>): T;
  <T = any>(docs: QueryDocumentSnapshot<DocumentData>[]): T;
}

export const formatDoc: IOverload = (param: any) => {
  if (Array.isArray(param)) return (param as QueryDocumentSnapshot<DocumentData>[]).map((doc) => ({...doc.data(), docId: doc.id}));
  else return {...(param as QueryDocumentSnapshot<DocumentData>).data(), docId: param.id};
}
