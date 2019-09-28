export class Product {
  id: number;
  name: string;
  fullPrice: number;
  salePrice: number;
  category: {
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    name: string;
  }
  availability: boolean;
}