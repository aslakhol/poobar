type SortByNameObjectType = {
  name: string;
};

export const sortByName = (
  a: SortByNameObjectType,
  b: SortByNameObjectType
) => {
  return a.name > b.name ? 1 : -1;
};
