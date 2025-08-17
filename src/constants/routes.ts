import { type Route } from "../types/route";

export const ROUTES: Record<string, Route> = {
  index: {
    label: "Index",
    path: () => "/"
  },
  work: { 
    label: "Work", 
    path: () => "/projects" 
  },
  about: { 
    label: "About", 
    path: () => "/about" 
  },
  contact: { 
    label: "Contact",
    path: () => "/contact"
  },
};
