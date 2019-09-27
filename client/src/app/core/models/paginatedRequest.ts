export class PaginatedRequest {
  private datasetName: string;
  private page: number;
  private pageSize: number;
  private sortDirection: string;
  private sortBy: string;
  private orderByDiscount?: boolean;
  private data?: object;

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
      this.page = page;
      this.pageSize = pageSize;
      this.sortDirection = sortDirection;
      this.sortBy = sortBy;
      this.orderByDiscount = orderByDiscount;
      this.data = data;
  }

  getDatasetName?(): string {
    return this.datasetName;
  }

  setDatasetName?(name: string): void {
    this.datasetName = name;
  }

  getSortBy?(): string {
    return this.sortBy;
  }

  setSortBy?(sortBy: string): void {
    this.sortBy = sortBy;
  }

  getPage?(): number {
    return this.page;
  }

  setPage?(page: number): void {
    this.page = page - 1;
  }

  getPageSize?(): number {
    return this.pageSize;
  }

  setPageSize?(pageSize: number): void {
    this.pageSize = pageSize;
  }

  getSortDirection?(): string {
    return this.sortDirection;
  }

  setSortDirection?(isSortDirectionAsc: boolean): void {
    this.sortDirection = isSortDirectionAsc ? 'ASC' : 'DESC';
  }

  getOrderByDiscount?(): boolean {
    return this.orderByDiscount;
  }

  setOrderByDiscount?(orderByDiscount: boolean): void {
    this.orderByDiscount = orderByDiscount;
  }

  getData(): object {
    return this.data;
  }

  setData(data: object): void {
    this.data = data;
  }
}