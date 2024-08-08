export type TPage = "home" | "about" | "productions" | "news & upcoming";

export interface IProduction {
  id: string;
  title: string;
  content: React.ReactElement;
  images: string[];
}

export interface IUpcoming {
  year: string;
  content: string;
  link?: string;
}
