import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import { WebAPI } from './web-api';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Flash Cards';
    config.map([
      { route: ['','notebox'],  moduleId: './notebox',      nav: true, title:'Notebox' }
    ]);

    this.router = router;
  }
}
