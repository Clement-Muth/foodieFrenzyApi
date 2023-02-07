import axios, { type AxiosPromise, type AxiosRequestConfig } from "axios";
import { API_URL } from "./process.env";
import type { WhereFilterOp } from "firebase/firestore/lite";
import { Plate, PlateCategory } from "types";

type ApiRoutes = "food/add-plate" | "food/get-plate" | "food/delete-plate" | "food/get-all-plates" | "food/get-plate-by-category";

type ApiDataOptionsProperties = {
  where: {
    fieldPath: string;
    opStr: WhereFilterOp;
    value: unknown;
  },
  docId?: never
} | {
  where?: never,
  docId: string
}

type ApiDataOptions = {
  "food/add-plate": { plate: Plate },
  "food/delete-plate": void,
  "food/get-plate": ApiDataOptionsProperties,
  "food/get-all-plates": void,
  "food/get-plate-by-category": { category: PlateCategory }
}

type ApiDataReturned = {
  "food/add-plate": void,
  "food/delete-plate": void,
  "food/get-plate": Plate[] & {docId: string}
  "food/get-all-plates": Plate[] & {docId: string}
  "food/get-plate-by-category": Plate[] & {docId: string}
}

/**
 * Gets an `HttpsCallableCustom` instance that refers to the function with the given
 * name with custom headers.
 *
 * @param route The name of the https callable function.
 * @param options The options for this HttpsCallableCustom instance.
 * @return The `HttpsCallable` instance.
 */
export const httpsApiCallable = <R extends ApiRoutes>(route: R, options?: AxiosRequestConfig<any> | undefined) => {
  return (data: ApiDataOptions[R]): AxiosPromise<ApiDataReturned[R]> =>
    axios(`${API_URL}/${route}`, {
      method: "post",
      data,
      ...options
    });
};