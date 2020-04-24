import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroeById( params['id'] );
    });
  }

  ngOnInit(): void {
  }

}
