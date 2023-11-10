import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { AppState } from 'src/app/store/core/app-state.model';
import { CustomerDto } from 'src/app/models/customer/customer-dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { TransactionDto } from 'src/app/models/bank/transaction-dto';
import { bankRoot } from 'src/app/store/bank-state/bank-state.root.ts';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-transactions-by-user',
  templateUrl: './transactions-by-user.component.html',
  styleUrls: ['./transactions-by-user.component.scss']
})
export class TransactionsByUserComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['amount', 'type', 'date'];
  dataSource: MatTableDataSource<TransactionDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const data: Array<TransactionDto> = [
      {
        amount: 200000,
        type: 'i',
        date: new Date
      },
      {
        amount: 50000,
        type: 'e',
        date: new Date
      },
      {
        amount: 175000,
        type: 'i',
        date: new Date
      },
      {
        amount: 2000,
        type: 'i',
        date: new Date
      },
      {
        amount: 35000,
        type: 'e',
        date: new Date
      }
    ]
    this.dataSource = new MatTableDataSource(data);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
