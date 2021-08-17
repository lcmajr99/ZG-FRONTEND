import { Link } from './../models/link.model';
import { CadastroService } from './../services/cadastro.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css'],
})
export class NovaTransferenciaComponent {
  // tslint:disable-next-line: ban-types
  linkOriginal: String;
  // tslint:disable-next-line: ban-types
  linkReduzido?: String;
  copy: string;



  constructor(private service: CadastroService, private router: Router, private clipboardService: ClipboardService) {}

  // tslint:disable-next-line: typedef
  cadastrar() {
    if (this.linkOriginal !== '') {
      const valorEmitir: Link = { linkOriginal: this.linkOriginal, linkReduzido:  '', qtdAcesso: ''};
      this.service.encurtaLink(valorEmitir).subscribe(
        (resultado: Link) => {
          this.linkReduzido = resultado.linkOriginal;
          this.limparCampos();
        },
        (error) => {
          console.error(error);
          alert('Erro ao ao efetuar o cadastro');
        }
      );
    }else{
      alert('Favor preencher o site');
    }
  }

  // tslint:disable-next-line: typedef
  limparCampos() {
    this.linkOriginal = '';
    this.copy = null;
  }

  // tslint:disable-next-line: typedef
  copyContent() {
    this.copy = this.linkReduzido + '';
    this.clipboardService.copyFromContent(this.copy);
  }



}
