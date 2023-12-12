import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsonData from '../../../assets/landmark.json';

@Component({
  selector: 'app-landmarks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landmarks.component.html',
  styleUrl: './landmarks.component.scss'
})
export class LandmarksComponent {
  landmarks = jsonData;
  landmark: any;
  constructor(){
    console.log(this.landmarks);
  }
  findOne(id: HTMLInputElement) {
    console.log(id.value);
    this.landmark = null;
    for (const lm of this.landmarks) {
      if (lm.idx.toString() == id.value) {
        console.log(lm);
        this.landmark = lm;
        return;
      }
    }
  }
}