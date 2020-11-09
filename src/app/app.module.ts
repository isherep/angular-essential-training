import {NgModule } from '@angular/core';
// core directive, pipes for working with the DOM
// for web apps
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// object literal 
@NgModule({
    imports:[
        BrowserModule  // imports array
    ],
    declarations: [ // metadata property 
        AppComponent // makes components/pipes availanle that
        // don't come from another module
    ],
    bootstrap:[ // metadata property
        AppComponent // which component is starting
        // entry level for the app.
    ]
})
export class AppModule {}

//2. Build the first component - App component