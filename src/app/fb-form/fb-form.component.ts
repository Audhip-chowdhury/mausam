import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fb-form',
  templateUrl: './fb-form.component.html',
  styleUrl: './fb-form.component.css'
})
export class FbFormComponent {
  @Output() toggleFbForm = new EventEmitter();
  closeModal() {
    this.toggleFbForm.emit();
  }
}
