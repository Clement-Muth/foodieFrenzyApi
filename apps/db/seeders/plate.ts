import { httpsApiCallable } from "common/utils";
import { v4 } from "uuid";
import { Plate } from "common/types";

type OmitedPlate = Omit<Plate, "uuid" | "slug">;

const enrichDataUpload = async (rest: OmitedPlate) => {
  const data = {
    uuid: v4(),
    slug: rest.title.toLowerCase().replaceAll(" ", "-")
  };

  await httpsApiCallable("food/add-plate")({ plate: { ...data, ...rest } });
};

const datas: OmitedPlate[] = [
  {
    title: "Gergrilltes Steak",
    subTitle: "Steak with snack",
    price: 12.5,
    source: "static/images/food/gergrilltes-steak.png",
    category: "meat"
  },
  {
    title: "Grilled Stake Meat",
    subTitle: "Yummy steak meal",
    price: 7.5,
    source: "static/images/food/grilled-stake-meat.png",
    category: "meat"
  },
  {
    title: "Chicken Plate",
    subTitle: "Yummy steak meal",
    price: 9.9,
    source: "static/images/food/bowl-chicken.png",
    category: "chicken"
  },
  {
    title: "Meat Frise Bowl",
    subTitle: "Yummy steak meal",
    price: 7.5,
    source: "static/images/food/bowl-meat-frise.png",
    category: "meat"
  },
  {
    title: "Chicken Salad",
    subTitle: "Yummy steak meal",
    price: 7.5,
    source: "static/images/food/salad-chicken.png",
    category: "chicken"
  },
  {
    title: "Chicken Salad",
    subTitle: "Yummy steak meal",
    price: 7.5,
    source: "static/images/food/salad-chicken.png",
    category: "chicken"
  },
  {
    title: "Meat Frise Bowl",
    subTitle: "Yummy steak meal",
    price: 7.5,
    source: "static/images/food/bowl-meat-frise.png",
    category: "meat"
  },
  {
    title: "Chicken Plate",
    subTitle: "Yummy steak meal",
    price: 9.9,
    source: "static/images/food/bowl-chicken.png",
    category: "chicken"
  },
  {
    title: "Grilled Stake Meat",
    subTitle: "Yummy steak meal",
    price: 7.5,
    source: "static/images/food/grilled-stake-meat.png",
    category: "meat"
  },
  {
    title: "Gergrilltes Steak",
    subTitle: "Steak with snack",
    price: 12.5,
    source: "static/images/food/gergrilltes-steak.png",
    category: "meat"
  }
];

export const plateUp = async () => await Promise.all(datas.map(async (data) => await enrichDataUpload(data)));

export const plateDown = async () => {
  const allPlates = await httpsApiCallable("food/get-all-plates", { method: "get" })();

  await Promise.all(
    allPlates.data.map(
      async (plate) =>
        await httpsApiCallable("food/delete-plate", {
          method: "delete",
          params: { docId: plate.docId }
        })()
    )
  );
};
