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
	
	addStory(id: number, name: string, per_turn_word_limit: number, text_units: StoryUnit[]): Promise<String> {
		return this.http
			.post(this.url, JSON.stringify({
								id: id,
								name: name, 
								perTurnWordLimit: per_turn_word_limit,
								textUnits: text_units
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