import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent {
  season = 'spring';
  getNextSeason(){
    return this.nextSeason();
  }

  nextSeason(){
    //blalalla
    this.season = 'summer'
    return this.season;
  }

}
