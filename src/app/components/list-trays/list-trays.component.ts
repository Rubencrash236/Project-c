import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListTraysService } from './list-trays.service';

@Component({
  selector: 'app-list-trays',
  templateUrl: './list-trays.component.html',
  styleUrls: ['./list-trays.component.css']
})
export class ListTraysComponent implements OnInit {

  trays: any;
  constructor(private trayService: ListTraysService, private router: Router) { }

  ngOnInit(): void {
    this.trayService.getAllTrays().subscribe(
      response => {
        this.trays = response;
      }
    );
  }
}
