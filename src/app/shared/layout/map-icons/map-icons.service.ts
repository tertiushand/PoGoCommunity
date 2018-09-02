import { Injectable } from '@angular/core';
declare let L;

@Injectable()
export class MapIconsService {

  public pokestop = L.icon({
    iconUrl: 'assets/imgs/icons/pokestop.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  public pointer = L.icon({
    iconUrl: 'assets/imgs/icons/pointer.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  constructor() { }

}
