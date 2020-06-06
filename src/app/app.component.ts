import { Component } from "@angular/core";
import { latLng, Map, tileLayer, featureGroup } from "leaflet";
import * as L from "leaflet";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	map: Map;

	drawnItems: L.FeatureGroup = featureGroup();

	options = {
		layers: [
			tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
		],
		zoom: 15,
		center: latLng(8.524139, 76.936638),
		edit: {
			featureGroup: this.drawnItems
		}
	};

	drawOptions = {
		position: "topleft",
		draw: {
			marker: {
				icon: L.icon({
					iconSize: [25, 41],
					iconAnchor: [13, 41],
					iconUrl: "../../assets/marker-icon.png",
					shadowUrl: "../../assets/marker-shadow.png"
				})
			}
		}
	};

	onDrawCreated(e: any) {
		const { layerType, layer } = e;
		if (layerType === "polygon") {
			const polygonCoordinates = layer._latlngs;
			console.log(polygonCoordinates);
		}
		this.drawnItems.addLayer(e.layer);
	}
}
