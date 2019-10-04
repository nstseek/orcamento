import { Component, OnInit } from '@angular/core';
import { FetchMonthService } from 'src/app/services/fetch-month.service';
import { Transacao } from 'src/app/types/transacao';

@Component({
  selector: 'app-month-viewer',
  templateUrl: './month-viewer.component.html',
  styleUrls: ['./month-viewer.component.scss']
})
export class MonthViewerComponent implements OnInit {
  transactions: string;

  constructor(private fetchMonthSrv: FetchMonthService) {}

  ngOnInit() {
    this.transactions = this.fetchMonthSrv.transactions ? this.fetchMonthSrv.transactions.toString() : '';
  }
}
