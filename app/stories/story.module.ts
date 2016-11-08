import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoryComponent } from './story.component';
import { StoryListComponent } from './storylist.component';
import { StoriesService } from './stories.service';
import { StoryRoutingModule } from './stories-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		StoryRoutingModule
	],
	declarations: [
		StoryComponent,
		StoryListComponent
	],
	providers: [
		StoriesService
	]
})
export class StoryModule {}