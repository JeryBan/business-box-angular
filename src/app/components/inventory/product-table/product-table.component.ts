import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/shared/interfaces/product';
import { deleteProduct, updateProduct } from '../inventory.controller';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

  @Input() products: Product[] | undefined;
  @Input() categories: Set<string>;
  @Output() refresh = new EventEmitter<void>();


  async removeProduct(product: Product): Promise<void> {
    try {
      await deleteProduct(product.id);
      this.refresh.emit();

    } catch (error) {
    console.error(error.message);
    }

  }

  async MoveProduct(product: Product, category: string) {
    product.category = category;
    await updateProduct(product, product.id);
    this.refresh.emit()
  }

  async editProduct(product: Product, key: string, value: string) {
    product[key] = (key === 'price' || key === 'quantity') ? Number(value) : value;
    await updateProduct(product, product.id);
  }
}




