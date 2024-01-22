import { Component, EventEmitter, Output } from '@angular/core';
import { sendEmail } from '../../utils/node-mailer';

@Component({
  selector: 'app-fb-form',
  templateUrl: './fb-form.component.html',
  styleUrl: './fb-form.component.css'
})
export class FbFormComponent {
  @Output() toggleFbForm = new EventEmitter();
  email='';
  feedback=''
  closeModal() {
    this.toggleFbForm.emit();
  }
  sendFeedback(email: any, feedback: any) {
   //sendEmail(email, feedback);
  }
}
