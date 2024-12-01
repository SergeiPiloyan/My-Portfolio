export const getImagePath = (name: string, type: "png" | "svg"): string => {
  return `/images/${type}/${name}.${type}`;
};
