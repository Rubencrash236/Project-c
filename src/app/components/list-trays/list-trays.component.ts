import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-trays',
  templateUrl: './list-trays.component.html',
  styleUrls: ['./list-trays.component.css']
})
export class ListTraysComponent implements OnInit {

  trays: any;
  constructor() { }

  ngOnInit(): void {
    this.trays = [1,2,3,4];
  }
}
