import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Member } from '../members/member';
import { Story, StoryUnit } from './story';
import { StoriesService } from './stories.service';

@Component({
  moduleId: module.id,
  selector: 'story-component',
  templateUrl: 'story.component.html',
})

export class StoryComponent implements OnInit { 
	story: Story;
	submitted = false;
	aestheticMode = false;
	new_text = "";
	
	constructor(private storiesService: StoriesService,
					private route: ActivatedRoute) {}
	
	onSubmit() { 
		this.submitted = true; 
	}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
		   let id = +params['id'];
		   this.storiesService.getStory(id)
				.then(story => this.story = story);
		});
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

