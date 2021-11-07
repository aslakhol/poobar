export type Entity = {
  name: string;
  id: number;
};

export type DrinkType = {
  id: string;
  name: string;
  description: string;
  instructions: string;
  ingredients: IngredientForDrink[];
};

export type EquipmentType = {
  id: string;
  name: string;
};

export type IngredientForDrink = {
  id: string;
  amount: number;
  ingredient: Ingredient;
  unit: string;
};

export type Ingredient = {
  id: number;
  name: string;
};
