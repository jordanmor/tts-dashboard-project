export class PaginatedRequest {
  datasetName: string;
  page: number;
  pageSize: number;
  sortDirection: string;
  sortBy: string;
  orderByDiscount?: boolean;
  data?: object;

  constructor(
    datasetName: string,
    page: number,
    pageSize: number,
    sortDirection: string,
    sortBy: string,
    orderByDiscount?: boolean,
    data?: object
    ) {
      this.datasetName = datasetName;
      this.page = page - 1;
      this.pageSize = pageSize;
      this.sortDirection = sortDirection;
      this.sortBy = sortBy;
      this.orderByDiscount = orderByDiscount;
      this.data = data;
  }
}