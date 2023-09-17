import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../service/products/products.service';

@Component({
  selector: 'app-tabela-itens-menu',
  templateUrl: './tabela-itens-menu.component.html',
  styleUrls: ['./tabela-itens-menu.component.css']
})

export class TabelaItensMenuComponent implements OnInit {
  tabelaItens: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.tabelaItens = data;
    });
  }
}
