import { Component, Input} from '@angular/core';
import { Member } from '../members/member';
import { Story, StoryUnit } from './story';

import { StoriesService } from './stories.service';

@Component({
  moduleId: module.id,
  selector: 'story-component',
  templateUrl: 'story.component.html',
})

export class StoryComponent { 
	submitted = false;
	new_text = "";
	word_count = 0;
	aestheticMode = false;
	
	constructor(private storiesService: StoriesService) {}
	
	onSubmit() { 
		this.submitted = true; 
	}
	
	newStory(): void {
		this.storiesService.addStory(this.story.id,
									 this.story.name, 
									 this.story.per_turn_word_limit,
									 this.story.text_units);
	}
	
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

	//dummy data
	charlie = new Member(0, "Charlie", "#00AA00");
	dan = new Member(1, "Dan", "#5566EE");
	
	story = new Story(1,"My Story", 
						[
							new StoryUnit(this.charlie, "Once upon"),
							new StoryUnit(this.dan, "a time"),
							new StoryUnit(this.charlie, "there was"),
							new StoryUnit(this.dan, "a little"),
							new StoryUnit(this.charlie, "man named"),
							new StoryUnit(this.dan, "Dan Parker."),
						], 
						3);	
}

