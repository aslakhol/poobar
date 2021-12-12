/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/bar": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bar.id"];
          name?: parameters["rowFilter.bar.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["bar"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** bar */
          bar?: definitions["bar"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bar.id"];
          name?: parameters["rowFilter.bar.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.bar.id"];
          name?: parameters["rowFilter.bar.name"];
        };
        body: {
          /** bar */
          bar?: definitions["bar"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/drink": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.drink.id"];
          name?: parameters["rowFilter.drink.name"];
          description?: parameters["rowFilter.drink.description"];
          instructions?: parameters["rowFilter.drink.instructions"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["drink"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** drink */
          drink?: definitions["drink"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.drink.id"];
          name?: parameters["rowFilter.drink.name"];
          description?: parameters["rowFilter.drink.description"];
          instructions?: parameters["rowFilter.drink.instructions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.drink.id"];
          name?: parameters["rowFilter.drink.name"];
          description?: parameters["rowFilter.drink.description"];
          instructions?: parameters["rowFilter.drink.instructions"];
        };
        body: {
          /** drink */
          drink?: definitions["drink"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/drink_for_bar": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.drink_for_bar.id"];
          drink_id?: parameters["rowFilter.drink_for_bar.drink_id"];
          bar_id?: parameters["rowFilter.drink_for_bar.bar_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["drink_for_bar"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** drink_for_bar */
          drink_for_bar?: definitions["drink_for_bar"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.drink_for_bar.id"];
          drink_id?: parameters["rowFilter.drink_for_bar.drink_id"];
          bar_id?: parameters["rowFilter.drink_for_bar.bar_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.drink_for_bar.id"];
          drink_id?: parameters["rowFilter.drink_for_bar.drink_id"];
          bar_id?: parameters["rowFilter.drink_for_bar.bar_id"];
        };
        body: {
          /** drink_for_bar */
          drink_for_bar?: definitions["drink_for_bar"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/equipment": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment.id"];
          name?: parameters["rowFilter.equipment.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["equipment"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** equipment */
          equipment?: definitions["equipment"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment.id"];
          name?: parameters["rowFilter.equipment.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment.id"];
          name?: parameters["rowFilter.equipment.name"];
        };
        body: {
          /** equipment */
          equipment?: definitions["equipment"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/equipment_for_bar": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment_for_bar.id"];
          equipment_id?: parameters["rowFilter.equipment_for_bar.equipment_id"];
          bar_id?: parameters["rowFilter.equipment_for_bar.bar_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["equipment_for_bar"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** equipment_for_bar */
          equipment_for_bar?: definitions["equipment_for_bar"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment_for_bar.id"];
          equipment_id?: parameters["rowFilter.equipment_for_bar.equipment_id"];
          bar_id?: parameters["rowFilter.equipment_for_bar.bar_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment_for_bar.id"];
          equipment_id?: parameters["rowFilter.equipment_for_bar.equipment_id"];
          bar_id?: parameters["rowFilter.equipment_for_bar.bar_id"];
        };
        body: {
          /** equipment_for_bar */
          equipment_for_bar?: definitions["equipment_for_bar"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/equipment_for_drink": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment_for_drink.id"];
          equipment_id?: parameters["rowFilter.equipment_for_drink.equipment_id"];
          drink_id?: parameters["rowFilter.equipment_for_drink.drink_id"];
          required?: parameters["rowFilter.equipment_for_drink.required"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["equipment_for_drink"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** equipment_for_drink */
          equipment_for_drink?: definitions["equipment_for_drink"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment_for_drink.id"];
          equipment_id?: parameters["rowFilter.equipment_for_drink.equipment_id"];
          drink_id?: parameters["rowFilter.equipment_for_drink.drink_id"];
          required?: parameters["rowFilter.equipment_for_drink.required"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.equipment_for_drink.id"];
          equipment_id?: parameters["rowFilter.equipment_for_drink.equipment_id"];
          drink_id?: parameters["rowFilter.equipment_for_drink.drink_id"];
          required?: parameters["rowFilter.equipment_for_drink.required"];
        };
        body: {
          /** equipment_for_drink */
          equipment_for_drink?: definitions["equipment_for_drink"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/ingredient": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient.id"];
          name?: parameters["rowFilter.ingredient.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["ingredient"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** ingredient */
          ingredient?: definitions["ingredient"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient.id"];
          name?: parameters["rowFilter.ingredient.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient.id"];
          name?: parameters["rowFilter.ingredient.name"];
        };
        body: {
          /** ingredient */
          ingredient?: definitions["ingredient"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/ingredient_for_bar": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient_for_bar.id"];
          ingredient_id?: parameters["rowFilter.ingredient_for_bar.ingredient_id"];
          bar_id?: parameters["rowFilter.ingredient_for_bar.bar_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["ingredient_for_bar"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** ingredient_for_bar */
          ingredient_for_bar?: definitions["ingredient_for_bar"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient_for_bar.id"];
          ingredient_id?: parameters["rowFilter.ingredient_for_bar.ingredient_id"];
          bar_id?: parameters["rowFilter.ingredient_for_bar.bar_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient_for_bar.id"];
          ingredient_id?: parameters["rowFilter.ingredient_for_bar.ingredient_id"];
          bar_id?: parameters["rowFilter.ingredient_for_bar.bar_id"];
        };
        body: {
          /** ingredient_for_bar */
          ingredient_for_bar?: definitions["ingredient_for_bar"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/ingredient_for_drink": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient_for_drink.id"];
          ingredient_id?: parameters["rowFilter.ingredient_for_drink.ingredient_id"];
          drink_id?: parameters["rowFilter.ingredient_for_drink.drink_id"];
          amount?: parameters["rowFilter.ingredient_for_drink.amount"];
          unit?: parameters["rowFilter.ingredient_for_drink.unit"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["ingredient_for_drink"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** ingredient_for_drink */
          ingredient_for_drink?: definitions["ingredient_for_drink"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient_for_drink.id"];
          ingredient_id?: parameters["rowFilter.ingredient_for_drink.ingredient_id"];
          drink_id?: parameters["rowFilter.ingredient_for_drink.drink_id"];
          amount?: parameters["rowFilter.ingredient_for_drink.amount"];
          unit?: parameters["rowFilter.ingredient_for_drink.unit"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient_for_drink.id"];
          ingredient_id?: parameters["rowFilter.ingredient_for_drink.ingredient_id"];
          drink_id?: parameters["rowFilter.ingredient_for_drink.drink_id"];
          amount?: parameters["rowFilter.ingredient_for_drink.amount"];
          unit?: parameters["rowFilter.ingredient_for_drink.unit"];
        };
        body: {
          /** ingredient_for_drink */
          ingredient_for_drink?: definitions["ingredient_for_drink"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profile": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profile.id"];
          username?: parameters["rowFilter.profile.username"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profile"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profile.id"];
          username?: parameters["rowFilter.profile.username"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profile.id"];
          username?: parameters["rowFilter.profile.username"];
        };
        body: {
          /** profile */
          profile?: definitions["profile"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  bar: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
  };
  drink: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
    description?: string;
    instructions?: string;
  };
  drink_for_bar: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `drink.id`.<fk table='drink' column='id'/>
     */
    drink_id: number;
    /**
     * Note:
     * This is a Foreign Key to `bar.id`.<fk table='bar' column='id'/>
     */
    bar_id: number;
  };
  equipment: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
  };
  equipment_for_bar: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `equipment.id`.<fk table='equipment' column='id'/>
     */
    equipment_id: number;
    /**
     * Note:
     * This is a Foreign Key to `bar.id`.<fk table='bar' column='id'/>
     */
    bar_id: number;
  };
  equipment_for_drink: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `equipment.id`.<fk table='equipment' column='id'/>
     */
    equipment_id: number;
    /**
     * Note:
     * This is a Foreign Key to `drink.id`.<fk table='drink' column='id'/>
     */
    drink_id: number;
    required: boolean;
  };
  ingredient: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
  };
  ingredient_for_bar: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `ingredient.id`.<fk table='ingredient' column='id'/>
     */
    ingredient_id: number;
    /**
     * Note:
     * This is a Foreign Key to `bar.id`.<fk table='bar' column='id'/>
     */
    bar_id: number;
  };
  ingredient_for_drink: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `ingredient.id`.<fk table='ingredient' column='id'/>
     */
    ingredient_id: number;
    /**
     * Note:
     * This is a Foreign Key to `drink.id`.<fk table='drink' column='id'/>
     */
    drink_id: number;
    amount?: number;
    unit?: string;
  };
  profile: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    username?: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** bar */
  "body.bar": definitions["bar"];
  "rowFilter.bar.id": string;
  "rowFilter.bar.name": string;
  /** drink */
  "body.drink": definitions["drink"];
  "rowFilter.drink.id": string;
  "rowFilter.drink.name": string;
  "rowFilter.drink.description": string;
  "rowFilter.drink.instructions": string;
  /** drink_for_bar */
  "body.drink_for_bar": definitions["drink_for_bar"];
  "rowFilter.drink_for_bar.id": string;
  "rowFilter.drink_for_bar.drink_id": string;
  "rowFilter.drink_for_bar.bar_id": string;
  /** equipment */
  "body.equipment": definitions["equipment"];
  "rowFilter.equipment.id": string;
  "rowFilter.equipment.name": string;
  /** equipment_for_bar */
  "body.equipment_for_bar": definitions["equipment_for_bar"];
  "rowFilter.equipment_for_bar.id": string;
  "rowFilter.equipment_for_bar.equipment_id": string;
  "rowFilter.equipment_for_bar.bar_id": string;
  /** equipment_for_drink */
  "body.equipment_for_drink": definitions["equipment_for_drink"];
  "rowFilter.equipment_for_drink.id": string;
  "rowFilter.equipment_for_drink.equipment_id": string;
  "rowFilter.equipment_for_drink.drink_id": string;
  "rowFilter.equipment_for_drink.required": string;
  /** ingredient */
  "body.ingredient": definitions["ingredient"];
  "rowFilter.ingredient.id": string;
  "rowFilter.ingredient.name": string;
  /** ingredient_for_bar */
  "body.ingredient_for_bar": definitions["ingredient_for_bar"];
  "rowFilter.ingredient_for_bar.id": string;
  "rowFilter.ingredient_for_bar.ingredient_id": string;
  "rowFilter.ingredient_for_bar.bar_id": string;
  /** ingredient_for_drink */
  "body.ingredient_for_drink": definitions["ingredient_for_drink"];
  "rowFilter.ingredient_for_drink.id": string;
  "rowFilter.ingredient_for_drink.ingredient_id": string;
  "rowFilter.ingredient_for_drink.drink_id": string;
  "rowFilter.ingredient_for_drink.amount": string;
  "rowFilter.ingredient_for_drink.unit": string;
  /** profile */
  "body.profile": definitions["profile"];
  "rowFilter.profile.id": string;
  "rowFilter.profile.username": string;
}

export interface operations {}

export interface external {}