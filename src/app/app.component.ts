import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SheardModule } from './sheard/sheard.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, SheardModule,]
})
export class AppComponent {
  title = 'myAppLab';
}
