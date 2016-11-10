import { Member } from '../members/member';

export class Story {
	constructor(
		public id: number,
		public name: string,
		public perTurnWordLimit: number,
		public textUnits: StoryUnit[],
	){}
}

export class StoryUnit {
constructor(
		public author: Member,
		public text: string,
	){}
}