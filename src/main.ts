// in this project we are targeting web and browser so we use browser platofor

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// below function is expecting bootstrap module and we created one earlier

platformBrowserDynamic().bootstrapModule(AppModule);