import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Story } from './story';
import { StoryUnit } from './story';

@Injectable()
export class StoriesService {
    private url = 'http://ec2-52-207-233-194.compute-1.amazonaws.com/api/stories';
	private headers = new Headers({'Content-Type': 'application/json'});
	
	constructor(private http: Http){}
	
	getStories(): Promise<Story[]> {		
		return this.http.get(this.url)
			.toPromise()
			.then(response => response.json() as Story[])
			.catch(this.handleError);
	}
	
	getStory(id: number): Promise<Story> {
		return this.getStories()
				.then(stories => stories.find(story => story.id === id));
	}
	
	addStory(story: Story): Promise<String> {
		return this.http
			.post(this.url, JSON.stringify({
								id: story.id,
								name: story.name, 
								perTurnWordLimit: story.perTurnWordLimit,
								textUnits: story.textUnits
								}), {headers: this.headers})
			.toPromise()
			.then(res => res.text())
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.log('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
}