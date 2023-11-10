import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { AppState } from 'src/app/store/core/app-state.model';
import { CustomerDto } from 'src/app/models/customer/customer-dto';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { SubsManager } from 'src/app/common/utils/subs-manager';
import { bankRoot } from 'src/app/store/bank-state/bank-state.root.ts';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.scss']
})
export class TableCustomerComponent extends SubsManager implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'email'];
  dataSource: MatTableDataSource<CustomerDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<AppState>) {
    super();
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    this.store.dispatch(bankRoot.GET_CUSTOMER());
    this.store.select(bankRoot.selectCustomers)
    .pipe(takeUntil(this.destroySubject))
    .subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
