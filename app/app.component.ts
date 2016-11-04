import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
			<div class="container">
				<div class="page-header">
					<h1>{{title}}</h1>
					
					<ul class="nav nav-pills nav-justified">
						<li role="presentation"><a routerLink="/members">Members</a></li>
						<li role="presentation"><a routerLink="/join">Become a Member</a></li>
						<li role="presentation"><a routerLink="/story">Story</a></li>
					</ul>
				</div>
				
				<router-outlet></router-outlet>

			</div>			
		`,
})

export class AppComponent { 
	title = 'Website';
}



