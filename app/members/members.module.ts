import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MemberRoutingModule } from './members-routing.module';
import { JoinComponent } from './join.component';
import { MemberListComponent } from './memberlist.component';

import { MembersService } from './members.service';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MemberRoutingModule
	],
	declarations: [
		JoinComponent,
		MemberListComponent
	],
	providers: [
		MembersService
	]
})
export class MembersModule {}