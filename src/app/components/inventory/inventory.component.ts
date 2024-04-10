import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductTableComponent } from "./product-table/product-table.component";
import { fetchProducts } from './inventory.controller';

@Component({
    selector: 'app-inventory',
    standalone: true,
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.css',
    imports: [ProductTableComponent]
})
export class InventoryComponent implements OnInit {

  products: Product[] = [];
  categories: Set<string>;
  classifiedProducts: Map<string, Product[]>;

  ngOnInit(): void {
    this.getProducts();
  }

  refresh(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      this.products = await fetchProducts();
      this.categories = this.categoryClassifier(this.products);
      this.classifiedProducts = this.productsByCategory(this.products, this.categories);

    } catch (error) {
      console.error(error.message);
      this.products = [];
    }
  }
 

  private categoryClassifier(products: Product[]): Set<string> {
    const categories = new Set<string>();
    products.forEach((product) => {
      categories.add(product.category);
    });
    
    return categories;
  }

  private productsByCategory(products: Product[], categories: Set<string>): Map<string, Product[]> {
    const classifiedProducts = new Map<string, Product[]>();
    categories.forEach((category) => {
      const productsInCategory = products.filter((product) => product.category === category);
      classifiedProducts.set(category, productsInCategory);
    });

    return classifiedProducts;
  }

}


