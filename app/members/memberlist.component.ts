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
  
	constructor(memberService: MembersService) {
		this.members = memberService.getMembers();
	}
  
	ngOnInit(): void {
		this.getMembers()
	}
  
	getMembers(): Member[] {
		return this.members;
	}
  
}