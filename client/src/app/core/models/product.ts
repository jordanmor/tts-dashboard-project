export class Product {
  id: number;
  name: string;
  fullPrice: number;
  salePrice: number;
  category: {
    id: number;
    name?: string;
  };
  supplier: {
    id: number;
    name?: string;
  }
  availability: boolean;

  constructor(
    id: number,
    name: string,
    fullPrice: number,
    salePrice: number,
    categoryId: number,
    supplierId: number,
    availability: boolean
  ) {
    this.id = id;
    this.name = name;
    this.fullPrice = fullPrice;
    this.salePrice = salePrice;
    this.category = {
      id: categoryId
    },
    this.supplier = {
      id: supplierId
    },
    this.availability = availability;
  }
}