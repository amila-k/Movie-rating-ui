import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./core/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn().then((isLoggedIn) => {
      if (!isLoggedIn) {
        this.authService.login();
      }
      else {
        this.router.navigate(['search-shows']);
      }
    });
  }
}
