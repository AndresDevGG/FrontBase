import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProjectionsComponent } from './projections/projections.component';
import { RelatedComponent } from './related/related.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: 'relate',
    component: RelatedComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'projections',
    component: ProjectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
