import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigatorComponent } from './navigator/navigator.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OptionsComponent } from './options/options.component';
import { FooterComponent } from './footer/footer.component';
// import { MatIconRegistry, MatIconModule } from '@mdi/angular-material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphindexComponent } from './graphindex/graphindex.component';
import { LinechartComponent } from './linechart/linechart.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CarouselComponent,
    OptionsComponent,
    FooterComponent,
    DashboardComponent,
    GraphindexComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    // MatIconModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
