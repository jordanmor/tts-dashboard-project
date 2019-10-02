import { FilterData } from 'src/app/core/models/filterData';
import { PaginatedData } from './paginatedData';
import { Category } from './category';
import { Supplier } from 'src/app/core/models/supplier';

export class Data {
  categories: Category[];
  suppliers: Supplier[];
  paginatedData: PaginatedData;
  filterData: FilterData;

  constructor(params: Data = {} as Data) {
    let {
      categories = [],
      suppliers = [],
      paginatedData = new PaginatedData(),
      filterData = new FilterData()
    } = params;
    
    this.categories = categories;
    this.suppliers = suppliers;
    this.paginatedData = paginatedData;
    this.filterData = filterData;
  }
}