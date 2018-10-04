import { Component } from '@angular/core';
import { latLng, Map, tileLayer } from 'leaflet';
import * as L from 'leaflet';

import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	map: L.Map;

    options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        ],
        zoom: 15,
        center: latLng(8.524139, 76.936638)
    };

    drawOptions = {
        position: 'topleft',
		draw: {
			marker: {
				icon: L.icon({
					iconSize: [ 25, 41 ],
					iconAnchor: [ 13, 41 ],
					iconUrl: '../../assets/marker-icon.png',
					shadowUrl: '../../assets/marker-shadow.png'
				})
			}
		}
    };

  	onMapReady(map: Map) {
		map.on(L.Draw.Event.CREATED, function (e) {
			const type = (e as any).layerType,
			layer = (e as any).layer;

			if (type === 'polygon') {
				// here you got the polygon coordinates
				const polygonCoordinates = layer._latlngs;
				console.log(polygonCoordinates);
			}
		});
  	}
}
