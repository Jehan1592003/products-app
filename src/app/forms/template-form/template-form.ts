import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  name: string = '';
  email: string = '';
  password: string = '';
  isSubscribed: boolean = false;
  onNameChange(value:string){
    console.log('Name changed:', value);
    this.name=value.toUpperCase();
  }
}
