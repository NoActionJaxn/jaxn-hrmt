export type Route = {
  label: string;
  path: (params?: unknown) => string;
};

