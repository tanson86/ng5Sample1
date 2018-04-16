import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-spring-data',
  templateUrl: './spring-data.component.html',
  styleUrls: ['./spring-data.component.css']
})
export class SpringDataComponent implements OnInit {

  dataFromSpring:Array<any>

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getAllFromSpring();
  }


  getAllFromSpring(): void {
    this.heroService.getAllFromSpring()
      .subscribe(dataFromSpring => this.dataFromSpring = dataFromSpring);
  }

}
