import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @Input() datasetName: string;
  @Input() defaultField: string;
  @Input() datasetTitle: object;

  data: Data = new Data();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.data.subscribe(data => {
      if(data) {
        if(data.dataset.length === 0 || data.dataSetName !== this.datasetName) {
            this.dataService.showData(this.datasetName,  0, true, this.defaultField);
          } else {
            this.data = data;
        }
      }
    });
  }

  // Handle pagination
  handlePageChange(page: number) {
    console.log(page);
    this.dataService.showData(this.datasetName, page, this.data.isSortDirectionAsc, this.data.sortBy);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
