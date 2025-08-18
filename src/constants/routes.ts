import { type Route } from "../types/route";

export const ROUTES: Record<string, Route> = {
  index: {
    label: "Index",
    path: () => "/"
  },
  work: { 
    label: "Work", 
    path: (params?: { slug: string }) => params?.slug ? "/work" : `/work/${params?.slug}`
  },
  about: { 
    label: "About", 
    path: () => "/about" 
  },
};
