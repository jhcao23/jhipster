import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { JhipsterAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(JhipsterAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
=======
platformBrowserDynamic().bootstrapModule(JhipsterAppModule);
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
