import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule
            ,MatFormFieldModule,FormsModule, RouterOutlet
            ,MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {
[x: string]: any;
  greeting = 'Hello World!!!';
  text = '';

  Logo = [
    {
      url : 'https://ng-hw-1.firebaseapp.com/assets/images/icon.png',
    }
  ]

  detail = [
    {
      url: 'https://ng-hw-1.firebaseapp.com/assets/images/photo.jpg',
      video: '',
      name: 'Daenerys Targaryen',
      character: "Daenerys Targaryen is the daughter of King Aerys II Targaryen (also referred to as ''The Mad King'') and his sister-wife Queen Rhaella, and is one of the last survivors of House Targaryen. She serves as the third-person point-of-view character of 31 chapters of A Game of Thrones, A Clash of Kings, A Storm of Swords, and A Dance with Dragons. This makes her the series' fourth most prominent narrative voice after Tyrion Lannister, Jon Snow and Arya Stark.",
      personality: "Daenerys is most often described as uncommonly beautiful, with long, pale silver-gold hair and purple eyes. She is slender and pale, although taller than some of her female ancestors. Tales of Daenerys's beauty are numerous, and throughout the novels she encounters countless suitors who seek her hand in marriage, sometimes to gain control of her three dragons. She is fluent in the Common Tongue of Westeros, Dothraki, High Valyrian and bastard Valyrian, which she speaks with a Tyroshi accent. Over the course of the first three novels she becomes fluent in the Dothraki language and Ghiscari, spoken in the slave cities in Essos.",
    }
  ]
}