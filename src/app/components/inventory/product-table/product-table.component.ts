import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { deleteProduct } from './products.controller';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  @Input() products: Product[] | undefined
  @Output() refresh = new EventEmitter<void>;

  async addProduct() {
    
  }

  async removeProduct(product: Product): Promise<void> {
    try {
      console.log(product.id)
      await deleteProduct(product.id);
      this.refresh.emit();

    } catch (error) {
    console.error(error.message);
    }

  } 
}




