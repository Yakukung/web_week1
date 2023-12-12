import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { LandmarksComponent } from "./components/landmarks/landmarks.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        DatabindingComponent,
        LandmarksComponent
    ]
})
export class AppComponent {
  title = 'angular-ui';
}