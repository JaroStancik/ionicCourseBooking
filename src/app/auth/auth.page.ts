import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  isLoading = false;

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authService.login();

    //fake waiting
    setTimeout(() => {
      this.router.navigateByUrl("/places/tabs/discover");
    }, 1500);
  }
}
