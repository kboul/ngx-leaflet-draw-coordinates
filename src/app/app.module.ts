import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletDrawModule } from "@asymmetrik/ngx-leaflet-draw";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, LeafletModule, LeafletDrawModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
