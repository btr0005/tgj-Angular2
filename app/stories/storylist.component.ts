import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Story } from './story';
import { StoriesService } from './stories.service';

@Component({
	selector: 'story-list',
	template: `				
				<ul class="list-group text-center" *ngFor="let story of stories; let i = index;">
					<li class="list-group-item">
						<strong>{{story.name}}</strong>
					</li>
				</ul>
			  `
})

export class StoryListComponent {
	stories: Story[];
  
	constructor(private storyService: StoriesService) {}
  
	ngOnInit(): void {
		this.getStories();
	}
  
	getStories(): void {
		this.storyService
			.getStories()
			.then(stories => this.stories = stories);
	}
}