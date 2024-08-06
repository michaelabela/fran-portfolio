export type TPage = "home" | "about" | "productions";

export interface IProduction {
  id: string;
  title: string;
  content: React.ReactElement;
  images: string[];
}
