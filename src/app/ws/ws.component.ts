import { AfterViewInit, Component } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.scss']
})
export class WsComponent implements AfterViewInit {

  wave: WaveSurfer;

  mp3url = 'https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3';

  constructor(public waveService: WaveService) {}

  ngAfterViewInit() {
    this.wave = this.waveService.create({container: '#waveservice'});
    this.wave.load(this.mp3url);
  }

}
