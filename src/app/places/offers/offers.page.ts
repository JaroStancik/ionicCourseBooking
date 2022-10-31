import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuController, NavController } from "@ionic/angular";
import { Place } from "../place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  place: Place;
  loadedOffers: Place[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.loadedOffers = this.placesService.offers;

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }

      this.place = this.placesService.getOffer(paramMap.get("placeId"));
    });
  }

  onEdit(offerId: string) {
    console.log("Edited item :", offerId);
  }
}
