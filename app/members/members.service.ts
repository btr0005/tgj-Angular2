import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MembersService {
    /*public Server: string = "http://localhost:8080/join?name=";
	
	constructor(private _http: Http){}
	
	tellMe(name) {
		return this._http.get(this.Server + name).map(res => res.json());
	}*/
	getMembers(): Member[] {
		return MEMBERS;
	}
}