import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MembersService {
    private url = 'http://ec2-52-207-233-194.compute-1.amazonaws.com/api/members';
	private headers = new Headers({'Content-Type': 'application/json'});
	
	constructor(private http: Http){}
	
	getMembers(): Promise<Member[]> {		
		return this.http.get(this.url)
			.toPromise()
			.then(response => response.json() as Member[])
			.catch(this.handleError);
	}
	
	addMember(name: string, color: string): Promise<Member> {
		return this.http
			.post(this.url, JSON.stringify({name: name, color: color}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.log('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
}