export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  image?: string;
  images?: string[];
  stock: number; // Make stock required and remove optional
  category: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  brand?: string;
  ratings?: {
    average: number;
    count: number;
  };
  attributes?: {
    [key: string]: string | number | boolean;
  };
}
