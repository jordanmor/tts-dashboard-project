export class Product {
  productId: number;
  productName: string;
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