export type Entity = {
  id: string;
  name: string;
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
  id: string;
  name: string;
};

export type Bar = {
  id: string;
  name: string;
  drink: BarDrink[];
};

export type BarDrink = {
  id: string;
  name: string;
  ingredient: {
    id: string;
    name: string;
  };
};
