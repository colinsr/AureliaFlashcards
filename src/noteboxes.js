import { WebAPI } from './web-api';

export class Noteboxes{
	static inject = [WebAPI];
	
    constructor(api){
		this.api = api;
	}
	
	created(){
      this.noteboxes = this.api.getNoteboxes();
    }
}