import { Component, Input } from '@angular/core';

import { Member } from './member';

@Component({
  selector: 'join-component',
  template: `
			
				<h3>Become a Member</h3>
				
				<div class="panel panel-default">
				  <div class="panel-body" >
					<h4 [style.color]="member.color">
						<span class="glyphicon glyphicon-user"></span>
						{{member.name}}
					</h4>
				  </div>
				</div>				
				
				<form>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" 
							required
							[(ngModel)]="member.name" name="name"
							#name="ngModel">
					</div>
					<div class="form-group">
						<label for="color">Favorite Color</label>
						<input type="color" class="form-control" id="color" 
							required
							[(ngModel)]="member.color" name="color"
							#color="ngModel">
					</div>
				 
					<div align="right">
						<button type="submit" class="btn btn-primary"
								(click)="newMember()">Join</button>
					</div>
				</form>
			`,
})

export class JoinComponent { 
	submitted = false;
	
	member = new Member("New User","#000000");
	
	onSubmit() { this.submitted = true;  }
	
	newMember() {
		console.log("New Member: " + this.member.name);
	}
}

