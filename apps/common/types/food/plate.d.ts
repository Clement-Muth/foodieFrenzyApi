export type PlateCategory = "meat" | "fish" | "chicken";

export type Plate = {
  uuid?: string;
  slug: string;
  title: string;
  subTitle: string;
  price: number;
  source: string;
  category: PlateCategory;
};
