import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Member } from './member';
import { MembersService } from './members.service';

@Component({
	selector: 'member-list',
	template: `				
				<ul class="list-group text-center" *ngFor="let member of members; let i = index;">
					<li class="list-group-item" [style.color]="member.color">
						<span class="glyphicon glyphicon-user"></span>
						<strong>{{member.name}}</strong>
						
					</li>
				</ul>
			  `
})

export class MemberListComponent {
	members: Member[];
  
	constructor(private memberService: MembersService) {}
  
	ngOnInit(): void {
		this.getMembers();
	}
  
	getMembers(): void {
		this.memberService
			.getMembers()
			.then(members => this.members = members);
	}
}