export class PaginatedData {
  dataset: any[];
  currentPage: number;
  // All relevant data items in database
  totalElements: number;
   // Number of data elements in current paginated response
  numberOfElements: number;
  pageSize: number;
  isSortDirectionAsc: boolean;
  sortBy: string;
  sortByDiscount: boolean;

  constructor(
    dataset = [],
    currentPage = 1,
    totalElements = 0,
    numberOfElements = 1,
    pageSize = 10,
    isSortDirectionAsc = true,
    sortBy = 'id',
    sortByDiscount = false
  ) {
    this.dataset = dataset;
    this.currentPage = currentPage;
    this.totalElements = totalElements;
    this.numberOfElements = numberOfElements;
    this.pageSize = pageSize;
    this.isSortDirectionAsc = isSortDirectionAsc;
    this.sortBy = sortBy;
    this.sortByDiscount = sortByDiscount;
  }
}