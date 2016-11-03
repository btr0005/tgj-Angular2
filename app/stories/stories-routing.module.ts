import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoryComponent }    from './story.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'story',  component: StoryComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StoryRoutingModule { }