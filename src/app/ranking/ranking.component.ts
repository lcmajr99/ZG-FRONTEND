import { Component, OnInit } from '@angular/core';
import { CadastroService } from './../services/cadastro.service';
import { Link } from './../models/link.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  constructor(private service: CadastroService, ) {}
  public paginaAtual = 1;

  links: any[];

  ngOnInit(): void {
    this.service.listaLinks().subscribe((links: Link[]) => {
      this.links = links;
    });
  }
}
