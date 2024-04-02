import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  @Input() products: Product[] | undefined


}

