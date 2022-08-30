import { Component, OnInit } from '@angular/core';
import Project from './models/project.model';

@Component({
  selector: 'app-register-project',
  templateUrl: './register-project.component.html',
  styleUrls: ['./register-project.component.css']
})
export class RegisterProjectComponent implements OnInit {

  trays: any;
  project!: Project;
  constructor() { }

  ngOnInit(): void {
    this.project = new Project();
    this.project.initDate = this.formatDate(new Date());
    this.trays = [1,3,4,6,22,67];
  }

  padTo2Digits(num: number): string{
    return num.toString().padStart(2,'0');
  }

  formatDate(date: Date): any { //return type string
    return (    
      [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

}
