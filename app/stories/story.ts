import { Member } from '../members/member';

export class Story {
	constructor(
		public id: number,
		public name: string,
		public text_units: StoryUnit[],
		public per_turn_word_limit: number,
	){}
}

export class StoryUnit {
constructor(
		public author: Member,
		public text: string,
	){}
}