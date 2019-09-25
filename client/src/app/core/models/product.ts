export class Product {
  id: number;
  name: string;
  category: {
    categoryId: number;
    categoryName: string;
  };
  fullPrice: number;
  salePrice: number;
  availability: boolean;
  supplier: {
    supplierId: number;
    supplierName: string;
  }
}