export interface Product {
  name: string;
  images: string[];
  description: string;
  price: number;
  category: string;
  inStock: number;
  slug: string;
  status: 'ACTIVE' | 'INACTIVE';
}