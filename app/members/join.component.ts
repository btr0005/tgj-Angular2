import { Component, Input } from '@angular/core';

import { Member } from './member';

@Component({
  moduleId: module.id,
  selector: 'join-component',
  templateUrl: 'join.component.html',
})

export class JoinComponent { 
	submitted = false;
	
	member = new Member(0,"New User","#000000");
	
	onSubmit() { this.submitted = true;  }
	
	newMember() {
		console.log("New Member: " + this.member.name);
	}
}

