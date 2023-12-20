import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';
  placeholderValue = 'Enter your name';
  imageDetails = {
    link : 'https://cdn.pixabay.com/photo/2023/12/13/03/19/mountains-8446221_1280.jpg',
    height:100,
    width:200,
  }
  // imageLink = "https://cdn.pixabay.com/photo/2023/12/13/03/19/mountains-8446221_1280.jpg"
  inputValue = "Dinesh"
  OnSubmit() {
    console.log('value is' , this.inputValue)
    

  }
}
