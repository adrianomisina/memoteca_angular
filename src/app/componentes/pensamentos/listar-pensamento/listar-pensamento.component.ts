import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    // {
    //   id: '1',
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3'
    // },
    // {
    //   id: '2',
    //   conteudo: 'Minha propriedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2'
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

