import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})

export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params =>{
      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];
      this.heroes = this.heroesService.busquedaHeroes( params['termino'] );
      console.log(this.heroes);
    });
  }

  ngOnInit(): void {
  }

}
