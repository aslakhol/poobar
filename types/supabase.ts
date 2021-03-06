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
          deleted?: parameters["rowFilter.drink.deleted"];
          variant?: parameters["rowFilter.drink.variant"];
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
          deleted?: parameters["rowFilter.drink.deleted"];
          variant?: parameters["rowFilter.drink.variant"];
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
          deleted?: parameters["rowFilter.drink.deleted"];
          variant?: parameters["rowFilter.drink.variant"];
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
  "/ingredient": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.ingredient.id"];
          name?: parameters["rowFilter.ingredient.name"];
          description?: parameters["rowFilter.ingredient.description"];
          deleted?: parameters["rowFilter.ingredient.deleted"];
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
          description?: parameters["rowFilter.ingredient.description"];
          deleted?: parameters["rowFilter.ingredient.deleted"];
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
          description?: parameters["rowFilter.ingredient.description"];
          deleted?: parameters["rowFilter.ingredient.deleted"];
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
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name: string;
  };
  drink: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    instructions?: string;
    /** Format: boolean */
    deleted: boolean;
    /** Format: text */
    variant?: string;
  };
  drink_for_bar: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `drink.id`.<fk table='drink' column='id'/>
     */
    drink_id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `bar.id`.<fk table='bar' column='id'/>
     */
    bar_id: number;
  };
  ingredient: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name: string;
    /** Format: text */
    description?: string;
    /** Format: boolean */
    deleted: boolean;
  };
  ingredient_for_bar: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `ingredient.id`.<fk table='ingredient' column='id'/>
     */
    ingredient_id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `bar.id`.<fk table='bar' column='id'/>
     */
    bar_id: number;
  };
  ingredient_for_drink: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `ingredient.id`.<fk table='ingredient' column='id'/>
     */
    ingredient_id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `drink.id`.<fk table='drink' column='id'/>
     */
    drink_id: number;
    /** Format: real */
    amount?: number;
    /** Format: text */
    unit?: string;
  };
  profile: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    username?: string;
  };
}

export interface parameters {
  /** @description Preference */
  preferParams: "params=single-object";
  /** @description Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** @description Preference */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description bar */
  "body.bar": definitions["bar"];
  /** Format: bigint */
  "rowFilter.bar.id": string;
  /** Format: text */
  "rowFilter.bar.name": string;
  /** @description drink */
  "body.drink": definitions["drink"];
  /** Format: bigint */
  "rowFilter.drink.id": string;
  /** Format: text */
  "rowFilter.drink.name": string;
  /** Format: text */
  "rowFilter.drink.description": string;
  /** Format: text */
  "rowFilter.drink.instructions": string;
  /** Format: boolean */
  "rowFilter.drink.deleted": string;
  /** Format: text */
  "rowFilter.drink.variant": string;
  /** @description drink_for_bar */
  "body.drink_for_bar": definitions["drink_for_bar"];
  /** Format: bigint */
  "rowFilter.drink_for_bar.id": string;
  /** Format: bigint */
  "rowFilter.drink_for_bar.drink_id": string;
  /** Format: bigint */
  "rowFilter.drink_for_bar.bar_id": string;
  /** @description ingredient */
  "body.ingredient": definitions["ingredient"];
  /** Format: bigint */
  "rowFilter.ingredient.id": string;
  /** Format: text */
  "rowFilter.ingredient.name": string;
  /** Format: text */
  "rowFilter.ingredient.description": string;
  /** Format: boolean */
  "rowFilter.ingredient.deleted": string;
  /** @description ingredient_for_bar */
  "body.ingredient_for_bar": definitions["ingredient_for_bar"];
  /** Format: bigint */
  "rowFilter.ingredient_for_bar.id": string;
  /** Format: bigint */
  "rowFilter.ingredient_for_bar.ingredient_id": string;
  /** Format: bigint */
  "rowFilter.ingredient_for_bar.bar_id": string;
  /** @description ingredient_for_drink */
  "body.ingredient_for_drink": definitions["ingredient_for_drink"];
  /** Format: bigint */
  "rowFilter.ingredient_for_drink.id": string;
  /** Format: bigint */
  "rowFilter.ingredient_for_drink.ingredient_id": string;
  /** Format: bigint */
  "rowFilter.ingredient_for_drink.drink_id": string;
  /** Format: real */
  "rowFilter.ingredient_for_drink.amount": string;
  /** Format: text */
  "rowFilter.ingredient_for_drink.unit": string;
  /** @description profile */
  "body.profile": definitions["profile"];
  /** Format: uuid */
  "rowFilter.profile.id": string;
  /** Format: text */
  "rowFilter.profile.username": string;
}

export interface operations {}

export interface external {}
