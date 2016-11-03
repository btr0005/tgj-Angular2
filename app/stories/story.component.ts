import { Component, Input} from '@angular/core';
import { Member } from '../members/member';

@Component({
  selector: 'story-component',
  template: `
			
				<h3>{{story.name}}</h3>
				
				<div class="text-right">
					<button type="button" class="btn btn-warning btn-xs" 
						(click)="this.aestheticModeToggle()">Aesthetic Mode</button>
				</div>
				
				<div class="panel panel-default">
				  <div class="panel-body" >
					
						<div *ngIf="!this.aestheticMode">
							<p>
								<font *ngFor="let item of story.text_units" color="{{item.author.color}}">{{item.text}} </font>
								<i>{{new_text}}</i>
							</p>
						</div>
						<div *ngIf="this.aestheticMode">
							<p>
								<font *ngFor="let item of story.text_units" color="{{item.author.color}}">{{item.text.split('').join(' ')}} </font>
								<i>{{new_text}}</i>
							</p>
						</div>
					
				  </div>
				</div>				
				
				<form>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" 
							required
							[(ngModel)]="story.name" name="name"
							#name="ngModel">
					</div>
					<div class="form-group">
						<textarea class="form-control" rows="2" id="text"
							name="text"
							[(ngModel)]="new_text" 
							#text="ngModel"
							placeholder="Enter words.."
							required></textarea>
					</div>		
					<div [hidden]="text.pristine" *ngIf="!this.isTextValid()" class="alert alert-warning">
						You must enter exactly {{story.per_turn_word_limit}} words!
					</div>
					<div align="right">
						<button type="submit" class="btn btn-primary">Submit</button>
					</div>
				</form>			
			`,
})

export class StoryComponent { 
	submitted = false;
	new_text = "";
	word_count = 0;
	aestheticMode = false;
	
	charlie = new Member("Charlie", "#00AA00");
	dan = new Member("Dan", "#5566EE");
	
	story = new Story("My Story","Once upon a time..", 
						[
							new StoryUnit(this.charlie, "Once upon"),
							new StoryUnit(this.dan, "a time"),
							new StoryUnit(this.charlie, "there was"),
							new StoryUnit(this.dan, "a little"),
							new StoryUnit(this.charlie, "man named"),
							new StoryUnit(this.dan, "Dan Parker."),
						], 
						3);
	
	onSubmit() { this.submitted = true;  }
	
	aestheticModeToggle(){
		if (this.aestheticMode) {
			this.aestheticMode = false;
		}
		else {
			this.aestheticMode = true;
		}
	}
	
	isTextValid() {
		return (this.new_text.trim().split(" ").length == this.story.per_turn_word_limit);
	}

	onKey(event:any) {
		// Do nothing if there is no per turn word limit set for this story
		if (this.story.per_turn_word_limit == -1)
			return;
	
		var words = event.target.value.split(" ");
		
		if (words.length > this.story.per_turn_word_limit) {
			words.pop();
			this.new_text = words.join(" ").trim() + " ";
		}
		else {
			this.new_text = words.join(" ");
		}
	}
		
}

export class Story {
	constructor(
		public name: string,
		public text: string,
		public text_units: StoryUnit[],
		public per_turn_word_limit: number,
	){}
}

export class StoryUnit {
constructor(
		public author: Member,
		public text: string,
	){}
}
