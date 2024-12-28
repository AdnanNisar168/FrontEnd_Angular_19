import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NewComponent } from './app/new/new.component';


platformBrowserDynamic().bootstrapModule(NewComponent)
  .catch(err => console.error(err));
