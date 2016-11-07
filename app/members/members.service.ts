import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
//import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MembersService {
    private url = 'http://ec2-54-210-26-202.compute-1.amazonaws.com/members';
	
	constructor(private http: Http){}
	
	getMembers(): Promise<Member[]> {		
		return this.http.get(this.url)
					.toPromise()
					.then(response => response.json() as Member[])
					.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.log('An error occurred', error);
		return Promise.reject(error.message || error);
	}
	
}