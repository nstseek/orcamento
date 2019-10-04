import { Injectable } from '@angular/core';
import { fetchMonth } from '../variables/routes';
import { HttpClient } from '@angular/common/http';
import { Transacao } from '../types/transacao';

@Injectable({
  providedIn: 'root'
})
export class FetchMonthService {
  transactions: Transacao[];
  constructor(private http: HttpClient) {}

  fetchMonth(dateStr: string) {
    const date = new Date(`${dateStr} 00:00`);
    return this.http.get<Transacao[]>(`${fetchMonth}/${date.getMonth() + 1}/${date.getFullYear()}`);
  }
}
