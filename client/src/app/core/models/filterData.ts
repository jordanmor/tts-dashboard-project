export class FilterData {
  filtered: boolean;
  filterBy: string;
  filterAlsoBy: string;
  filterName1: string;
  filterName2: string;

  constructor(
    filtered: boolean = false,
    filterBy: string = '',
    filterAlsoBy: string = 'none',
    filterName1: string = '',
    filterName2: string = ''
  ) {
    this.filtered = filtered;
    this.filterBy = filterBy;
    this.filterAlsoBy = filterAlsoBy;
    this.filterName1 = filterName1;
    this.filterName2 = filterName2;
  }
}