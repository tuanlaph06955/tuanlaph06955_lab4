import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('data') product: Product;
  constructor() { }

  ngOnInit(): void {
  }
}
