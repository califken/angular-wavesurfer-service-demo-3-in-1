import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularWavesurferService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-aws2',
  templateUrl: './aws2.component.html',
  styleUrls: ['./aws2.component.scss'],
  providers: [AngularWavesurferService]
})
export class Aws2Component implements AfterViewInit, OnDestroy {

  constructor(public wsservice: AngularWavesurferService) {}

  ngAfterViewInit(): void {
    this.wsservice.load('https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', {container: '#aws2'});
  }

  ngOnDestroy() {
    this.wsservice.destroy();
  }
}
