export class PaginatedData {
  dataset: any[];
  currentPage: number;
  totalElements: number;
  pageSize: number;
  isSortDirectionAsc: boolean;
  sortBy: string;
  sortByDiscount: boolean;

  constructor(
    dataset = [],
    currentPage = 1,
    totalElements = 0,
    pageSize = 10,
    isSortDirectionAsc = true,
    sortBy = 'id',
    sortByDiscount = false
  ) {
    this.dataset = dataset;
    this.currentPage = currentPage;
    this.totalElements = totalElements
    this.pageSize = pageSize;
    this.isSortDirectionAsc = isSortDirectionAsc;
    this.sortBy = sortBy;
    this.sortByDiscount = sortByDiscount;
  }
}