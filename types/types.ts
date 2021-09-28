export type Entity = {
  name: string;
  id: number;
};

export type DrinkType = {
  id: string;
  name: string;
  description: string;
  instructions: string;
  ingredient: IngredientType[];
};

export type EquipmentType = {
  id: string;
  name: string;
};

export type IngredientType = {
  id: number;
  name: string;
};
