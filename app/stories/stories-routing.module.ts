import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoryComponent }    from './story.component';
import { NewStoryComponent } from './newstory.component';
import { StoryListComponent } from './storylist.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'story',  component: StoryComponent },
	  { path: 'stories', component: StoryListComponent },
	  { path: 'story/new', component: NewStoryComponent },
	  { path: 'story/:id', component: StoryComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StoryRoutingModule { }