export interface CategoryType {
    id: string;
    name: string;
    description: string;
    children: CategoryType[];
    parent_id: string;
  }