import { config } from "dotenv";

config({ path: "../../.env" });

export const IS_DEV = process.env.HOSTNAME === "http://localhost:3000";

export const HOSTNAME = process.env.HOSTNAME;

export const API_URL = process.env.API_URL;
