import { Component, Input } from '@angular/core';

import { Member } from './member';
import { MembersService } from './members.service';

@Component({
  moduleId: module.id,
  selector: 'join-component',
  templateUrl: 'join.component.html',
})

export class JoinComponent { 
	submitted = false;
	member = new Member(0,"New User","#000000");
	
	constructor(private memberService: MembersService) {}
	
	onSubmit(): void { this.submitted = true;  }
	
	newMember(): void {
		this.memberService.addMember(this.member.name, this.member.color);
	}
}

