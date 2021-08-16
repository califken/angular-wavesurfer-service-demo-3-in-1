import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';
import { WsComponent } from './ws/ws.component';
import { Aws1Component } from './aws/aws1/aws1.component';
import { Aws2Component } from './aws/aws2/aws2.component';
import { Aws3Component } from './aws/aws3/aws3.component';
import { AwspageComponent } from './aws/awspage/awspage.component';
import { AwscComponent } from './awsc/awsc.component';
@NgModule({
  declarations: [
    AppComponent,
    WsComponent,
    Aws1Component,
    Aws2Component,
    Aws3Component,
    AwspageComponent,
    AwscComponent
  ],
  imports: [
    BrowserModule,
    AngularWavesurferServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
