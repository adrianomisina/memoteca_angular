import { Component, OnInit } from '@angular/core';

interface Pensamento {
  conteudo: string;
  autoria: string;
  modelo: string;
}

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Dev',
    modelo: 'modelo3'
  }

  listaPensamento: Pensamento[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
