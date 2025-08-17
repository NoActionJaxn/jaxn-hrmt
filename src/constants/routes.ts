import { type Route } from "../types/route";

export const ROUTES: Record<string, Route> = {
  index: {
    label: "Index",
    path: () => "/"
  },
  work: { 
    label: "Work", 
    path: () => "/work"
  },
  about: { 
    label: "About", 
    path: () => "/about" 
  },
};
