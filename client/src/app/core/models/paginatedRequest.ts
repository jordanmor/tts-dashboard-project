export class PaginatedRequest {
  datasetName: string;
  page: number;
  pageSize: number;
  sortDirection: string;
  sortBy: string;
  sortByDiscount?: boolean;
  filtered?: boolean;
  filterBy?: string;
  filterAlsoBy?: string;

  constructor(
    datasetName: string,
    page: number,
    pageSize: number,
    sortDirection: string,
    sortBy: string,
    sortByDiscount?: boolean,
    filtered?: boolean,
    filterBy?: string,
    filterAlsoBy?: string,
    ) {
      this.datasetName = datasetName;
      this.page = page - 1;
      this.pageSize = pageSize;
      this.sortDirection = sortDirection;
      this.sortBy = sortBy;
      this.sortByDiscount = sortByDiscount;
      this.filtered = filtered;
      this.filterBy = filterBy;
      this.filterAlsoBy = filterAlsoBy;
  }
}