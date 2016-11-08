import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoryComponent }    from './story.component';
import { StoryListComponent } from './storylist.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'story',  component: StoryComponent },
	  { path: 'stories', component: StoryListComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StoryRoutingModule { }