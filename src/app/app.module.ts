import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HelloDirective } from './sample/hello.directive';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { Page2Component } from './page2/page2.component';

const appRoutes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path : 'page2', component: Page2Component},
  {
    path: '',
    redirectTo: '/sample',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    HelloDirective,
    AppComponent,
    SampleComponent,
    Page2Component
  ],
  imports: [
        UpgradeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [    ],
  entryComponents : [SampleComponent, AppComponent, Page2Component],
  //bootstrap: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}
