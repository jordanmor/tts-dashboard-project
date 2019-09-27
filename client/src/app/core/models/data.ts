import { PaginatedRequest } from './paginatedRequest';

export class Data {
  datasetName: string;
  dataset: any[];
  currentPage: number;
  totalElements: number;
  pageSize: number;
  isSortDirectionAsc: boolean;
  sortBy: string;
  orderByDiscount?: boolean;
  paginatedRequest?: PaginatedRequest;

  constructor(params: Data = {} as Data) {
    let {
      datasetName = '',
      dataset = [],
      currentPage = 1,
      totalElements = 0,
      pageSize = 10,
      isSortDirectionAsc = true,
      sortBy = 'id',
      orderByDiscount = false
    } = params;

    this.datasetName = datasetName;
    this.dataset = dataset;
    this.currentPage = currentPage;
    this.totalElements = totalElements
    this.pageSize = pageSize;
    this.isSortDirectionAsc = isSortDirectionAsc;
    this.sortBy = sortBy;
    this.orderByDiscount = orderByDiscount;
    this.paginatedRequest = new PaginatedRequest(
      this.datasetName,
      this.currentPage - 1,
      this.pageSize,
      this.isSortDirectionAsc ? 'ASC' : 'DESC',
      this.sortBy,
      this.orderByDiscount,
      null
    )
  }
}