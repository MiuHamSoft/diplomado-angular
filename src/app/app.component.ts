import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba';

  constructor(private toast: ToastService) {

  }
}
