/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Veľká Javorina',
      'Túlanie po kopaniciach.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Velka_Javorina.jpg/1920px-Velka_Javorina.jpg',
      1918
    ),
    new Place(
      'p2',
      'Piešťany',
      'Cinematik!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Rieka_Vah_-_Piestany.jpg/220px-Rieka_Vah_-_Piestany.jpg',
      1944
    ),
    new Place(
      'p3',
      'Vršatecké bradlá',
      'Túlanie po karpatoch.',
      'https://upload.wikimedia.org/wikipedia/commons/7/74/Vr%C5%A1ateck%C3%A1_bradl%C3%A1.jpg',
      1944
    ),
  ];

  private _offers: Place[] = [
    new Place(
      'p1',
      'Stará Turá',
      'Socializmus v turbokapitalizme.',
      // eslint-disable-next-line max-len
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Star%C3%A1_Tur%C3%A1%2C_n%C3%A1dra%C5%BE%C3%AD%2C_vlak_s_vozem_811.015.jpg/1920px-Star%C3%A1_Tur%C3%A1%2C_n%C3%A1dra%C5%BE%C3%AD%2C_vlak_s_vozem_811.015.jpg',
      1998
    ),
    new Place(
      'p2',
      'Myjava',
      'Vybrané slovo.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Myjavacentrum.jpg/1000px-Myjavacentrum.jpg',
      1848
    ),
    new Place(
      'p3',
      'Vysoké Tatry',
      'Horská turistika.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Vysok%C3%A9_Tatry_panorama.jpg/1920px-Vysok%C3%A9_Tatry_panorama.jpg',
      1989
    ),
  ];

  get places() {
    return [...this._places];
  }

  get offers() {
    return [...this._offers];
  }

  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }

  getOffer(id: string) {
    return { ...this._offers.find((p) => p.id === id) };
  }
}
