import { redBright, green } from "chalk";
import debug from "debug";
import { plateDown, plateUp } from "./plate";

export const up = async () => {
  // Use a seed for chance to deterministic
  try {
    await plateUp();

    debug("init:seed")(green("Every seeds went well"));
    return process.exit();
  } catch (e) {
    debug("init:error")(redBright(e as string));

    return process.exit();
  }
};

export const down = async () => {
  // Use a seed for chance to deterministic
  try {
    await plateDown();

    debug("init:seed")(green("Every seeds deleted"));
    return process.exit();
  } catch (e) {
    debug("init:error")(redBright(e as string));

    return process.exit();
  }
};
