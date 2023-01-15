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
  oldprice: number;
  imagePathname: string;
  category: CategoryType;
  numberAvailable: number;
}


export interface ProfileType {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}