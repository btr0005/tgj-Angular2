import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoryComponent } from './story.component';

import { StoryRoutingModule } from './stories-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		StoryRoutingModule
	],
	declarations: [
		StoryComponent
	]
})
export class StoryModule {}