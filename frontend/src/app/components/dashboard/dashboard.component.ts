import { Component, OnInit } from '@angular/core';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faSearch = faSearch;
  spinner = '';
  date = new FormControl('nada');

  constructor() { }

  ngOnInit() {
  }

  searchMonth() {
    this.faSearch = faSpinner;
    this.spinner = 'spinner';
    console.log(this.date.value);
  }

}
