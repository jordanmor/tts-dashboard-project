export class FilterData {
  filtered: boolean;
  filterBy: string;
  filterAlsoBy: string;

  constructor(
    filtered: boolean = false,
    filterBy: string = '',
    filterAlsoBy: string = 'none'
  ) {
    this.filtered = filtered;
    this.filterBy = filterBy;
    this.filterAlsoBy = filterAlsoBy;
  }
}