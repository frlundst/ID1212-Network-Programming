export interface CategoryType {
  id: string;
  name: string;
  description: string;
  children: CategoryType[];
  parent_id: string;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  numberAvailable: number;
}