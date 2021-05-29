/** GraphQL */
export interface Category {
  id: string;
  name: string;
  abbr: string;
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryData {
  category: Category[];
}

export interface CategoryByIdVars {
  id: string;
}

export interface UpdateCategoryVars {
  id: string;
  input: {
    name: string;
    abbr: string;
  };
}

export interface CreateCategoryInputVars {
  limit: number;
  cursor?: string;
}

/** Form */
export interface CategoryFormValues {
  name: string;
  abbr: string;
}

export interface CategoryFormErrors {
  name?: string;
  abbr?: string;
}
