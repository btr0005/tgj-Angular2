import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Member } from '../members/member';
import { Story, StoryUnit } from './story';
import { StoriesService } from './stories.service';

@Component({
  moduleId: module.id,
  selector: 'new-story-component',
  templateUrl: 'newstory.component.html',
})

export class NewStoryComponent implements OnInit { 
	story = new Story(null,null,null,null);
	submitted = false;
	aestheticMode = false;
	new_text = "";
	
	constructor(private storiesService: StoriesService,
					private route: ActivatedRoute) {}
	
	onSubmit() { 
		this.submitted = true; 
	}
	
	ngOnInit(): void {
	}
	
	newStory(): void {
		this.storiesService.addStory(this.story);
	}
	
	aestheticModeToggle(): void {
		if (this.aestheticMode) {
			this.aestheticMode = false;
		}
		else {
			this.aestheticMode = true;
		}
	}
	
	isTextValid(): boolean {

		return (this.enteredWordsMeetThePerTurnWordLimit()
			 || this.storyHasNoTurnWordLimit());
	}	
	
	enteredWordsMeetThePerTurnWordLimit(): boolean {
		return (this.new_text.trim().split(" ").length == this.story.perTurnWordLimit);
	}
	
	storyHasNoTurnWordLimit(): boolean {
		return (this.story.perTurnWordLimit == 0);
	}
}

