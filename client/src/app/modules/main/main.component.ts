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
  @Input() datasetTitle: object;

  data: Data = new Data();

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.subscription = this.dataService.data.subscribe(data => {
      if(data) {
        if(data.dataset.length === 0 || data.datasetName !== this.datasetName) {
          data.paginatedRequest.setDatasetName(this.datasetName);
          this.dataService.showData(data.paginatedRequest);
          } else {
            this.data = data;
        }
      }
    });
  }

  // Handle pagination
  handlePageChange(page: number) {
    this.data.paginatedRequest.setPage(page);
    this.dataService.showData(this.data.paginatedRequest);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
