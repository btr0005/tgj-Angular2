import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JoinComponent } from './join.component';
import { MemberListComponent } from './memberlist.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'join',  component: JoinComponent },
	  { path: 'members', component: MemberListComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MemberRoutingModule { }