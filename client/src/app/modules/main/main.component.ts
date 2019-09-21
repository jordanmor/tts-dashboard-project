import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  show: boolean = false;
  alertType: string = 'success';

  constructor() { }

  ngOnInit() {
  }

  hideAlert() {
    this.show = false;
  }

}
