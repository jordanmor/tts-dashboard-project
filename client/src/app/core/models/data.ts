import { PaginatedRequest } from './paginatedRequest';

export class Data {
  datasetName: string;
  dataset: any[];
  currentPage: number;
  totalElements: number;
  pageSize: number;
  isSortDirectionAsc: boolean;
  sortBy: string;
  sortByDiscount: boolean;
  filtered: boolean;
  filterBy: string;
  filterAlsoBy: string;
  filterName1: string;
  filterName2: string;

  constructor(params: Data = {} as Data) {
    let {
      datasetName = '',
      dataset = [],
      currentPage = 1,
      totalElements = 0,
      pageSize = 10,
      isSortDirectionAsc = true,
      sortBy = 'id',
      sortByDiscount = false,
      filtered = false,
      filterBy = '',
      filterAlsoBy = 'none',
      filterName1 = '',
      filterName2 = ''
    } = params;

    this.datasetName = datasetName;
    this.dataset = dataset;
    this.currentPage = currentPage;
    this.totalElements = totalElements
    this.pageSize = pageSize;
    this.isSortDirectionAsc = isSortDirectionAsc;
    this.sortBy = sortBy;
    this.sortByDiscount = sortByDiscount;
    this.filtered = filtered;
    this.filterBy = filterBy;
    this.filterAlsoBy = filterAlsoBy;
    this.filterName1 = filterName1;
    this.filterName2 = filterName2;
  }
}