import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private url: string = "https://run.mocky.io/v3/85e319af-c10c-441c-9861-16e09136e82f";
  private urlFail: string = "https://run.mocky.io/v3/43d706bb-a4a8-4ecf-8630-16ae1c6d1142";

  constructor(public http: HttpClient,
    private router: Router,
    private toast: ToastService) { }

  login(data) {
    this.http.post(this.url, data)
      .subscribe((result) => {
        console.log(result)
        this.router.navigate(["/home"]);
        this.toast.success("Se inició sesión correctamente")
      });
  }
}
