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
  customerRole: string;
}

export interface OrderType {
  id: string;
  date: string;
  city: string;
  address: string;
  zip: string;
  email: string;
  phone: string;
  paymentMethod: string;
  payed: boolean;
  products: ProductType[];
}

export interface OrderItemType {
  id: string;
  customerOrderId: string;
  productId: string;
  product: ProductType;
}