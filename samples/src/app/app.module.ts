import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app/app.component';
import { MainPageComponent }  from './components/main-page/main-page.component';

import { Ng2GoogleRecaptchaModule }  from 'ng2-google-recaptcha';

@NgModule({
    imports: [
        BrowserModule,
        Ng2GoogleRecaptchaModule,
    ],

    declarations: [
        AppComponent,
        MainPageComponent,
    ],

    bootstrap: [
        AppComponent,
    ],

    providers: [
    ],

    entryComponents: [
    ],
})
export class AppModule { }
