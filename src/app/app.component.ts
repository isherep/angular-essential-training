// First, needs the component decorator so Ang knows its component
import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // what Eng will use to find custom html element
    // and apply the component to  <app-root></app-root> 
   // template: '<h1>My app<h1>'
   templateUrl: './app.component.html',
    // instead of this you can refer templeta file
    styles: [`
        h1 { color: white; }
        `,`
        .desc {
            font-style: italic;
            color: green;
        }
    `]
})
export class AppComponent {}

// takes a metadata obect with properties
// min 2 mt properties - selector and template  url
