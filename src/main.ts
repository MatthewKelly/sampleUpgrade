import './polyfills.ts';

import * as angular from 'angular';
import 'angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { app } from './app/ng1/angularApp';
import { UpgradeModule } from '@angular/upgrade/static';

app();
if (environment.production) {
  enableProdMode();
}
let promise = platformBrowserDynamic().bootstrapModule(AppModule)
promise.then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['HelloUserApp'], {strictDi: false});
});
