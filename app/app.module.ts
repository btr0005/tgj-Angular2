import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MembersModule } from './members/members.module';
import { StoryModule } from './stories/story.module';

@NgModule({
  imports:  [ 
		BrowserModule,
		FormsModule,
		MembersModule,
		StoryModule,
		AppRoutingModule,
	],
  providers: [],
  declarations: [ AppComponent,
				],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

