import { AppController } from './controllers/app.controller';
import { AppService } from '@services/app.service';
import { AppView } from './views/app.view';

class App {
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  public start() {
    const view = new AppView();
    const service = new AppService(6);
    const controller = new AppController(view, service);

    this.root.append(view.render());
  }
}

new App(document.body).start();
