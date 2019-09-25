export class Data {
  dataSetName?: string;
  dataset?: any[];
  currentPage?: number;
  totalElements?: number;
  pageSize?: number;
  isSortDirectionAsc?: boolean;
  sortBy?: string;
  orderByDiscount?: boolean;

  constructor(params: Data = {} as Data) {
    let {
      dataSetName = '',
      dataset = [],
      currentPage = 1,
      totalElements = 0,
      pageSize = 1,
      isSortDirectionAsc = true,
      sortBy = ''
    } = params;

    this.dataSetName = dataSetName;
    this.dataset = dataset;
    this.currentPage = currentPage;
    this.totalElements = totalElements
    this.pageSize = pageSize;
    this.isSortDirectionAsc = isSortDirectionAsc;
    this.sortBy = sortBy;
  }
}