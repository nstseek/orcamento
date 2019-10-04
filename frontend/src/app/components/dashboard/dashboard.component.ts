import { Component, OnInit } from '@angular/core';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { Transacao } from 'src/app/types/transacao';
import { FetchMonthService } from 'src/app/services/fetch-month.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faSearch = faSearch;
  spinner = '';
  date = new FormControl('nada');
  transactions: Transacao[];

  constructor(private fetchMonthSrv: FetchMonthService, private router: Router) {}

  ngOnInit() {}

  searchMonth() {
    this.faSearch = faSpinner;
    this.spinner = 'spinner';
    this.fetchMonthSrv.fetchMonth(this.date.value).subscribe((data: Transacao[]) => {
      this.transactions = data;
      this.faSearch = faSearch;
      this.spinner = '';
      this.fetchMonthSrv.transactions = data;
      this.router.navigateByUrl('/transactions');
    });
  }
}
