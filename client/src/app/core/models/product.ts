import { Category } from 'src/app/core/models/category';
import { Supplier } from './supplier';

export class Product {
  id: number;
  name: string;
  fullPrice: number;
  salePrice: number;
  category: Category
  supplier: Supplier;
  availability: boolean;

  constructor(
    id: number,
    name: string,
    fullPrice: number,
    salePrice: number,
    category: Category,
    supplier: Supplier,
    availability: boolean
  ) {
    this.id = id;
    this.name = name;
    this.fullPrice = fullPrice;
    this.salePrice = salePrice;
    this.category = category;
    this.supplier = supplier;
    this.availability = availability;
  }
}