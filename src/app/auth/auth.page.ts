import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}
  isLoading = false;

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({ keyboardClose: true, message: "Logging in..." })
      .then((loadingEl) => {
        loadingEl.present();
        //fake waiting
        setTimeout(() => {
          this.isLoading = false;
          this.loadingCtrl.dismiss();
          this.router.navigateByUrl("/places/tabs/discover");
        }, 1500);
      });
    this.authService.login();
  }
}
