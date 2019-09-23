import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input() pages: Array<number> = [];
  @Input() currentPage: number;
  @Output() onPrevPage = new EventEmitter();
  @Output() onNextPage = new EventEmitter();
  @Output() onGoToPage = new EventEmitter();

  constructor() { }

  prevPage() {
    this.onPrevPage.emit();
  }

  nextPage() {
    this.onNextPage.emit();
  }

  goToPage(page: number) {
    this.onGoToPage.emit(page);
  }

}
