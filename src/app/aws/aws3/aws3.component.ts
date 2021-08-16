import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularWavesurferService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-aws3',
  templateUrl: './aws3.component.html',
  styleUrls: ['./aws3.component.scss'],
  providers: [AngularWavesurferService]
})
export class Aws3Component implements AfterViewInit, OnDestroy {

  constructor(public wsservice: AngularWavesurferService) {}

  ngAfterViewInit(): void {
    this.wsservice.load('https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', {container: '#aws3'});
  }

  ngOnDestroy() {
    this.wsservice.destroy();
  }
}
