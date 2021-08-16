import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularWavesurferService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-aws1',
  templateUrl: './aws1.component.html',
  styleUrls: ['./aws1.component.scss'],
  providers: [AngularWavesurferService]
})
export class Aws1Component implements AfterViewInit, OnDestroy {

  constructor(public wsservice: AngularWavesurferService) {}

  ngAfterViewInit(): void {
    this.wsservice.load('https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', {container: '#aws1'});
  }

  ngOnDestroy() {
    this.wsservice.destroy();
  }
}
