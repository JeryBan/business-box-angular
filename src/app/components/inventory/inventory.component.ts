import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductTableComponent } from "./product-table/product-table.component";
import { fetchProducts, insertProduct } from './inventory.controller';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-inventory',
    standalone: true,
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.css',
    imports: [ProductTableComponent, ReactiveFormsModule]
})
export class InventoryComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product;
  categories: Set<string>;
  classifiedProducts: Map<string, Product[]>;

  productForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.getProducts();

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['' ,Validators.pattern('^[0-9.]+')],
      price: ['' ,Validators.pattern('^[0-9.]+')],
      description: [''],
      category: ['', Validators.required]
    })
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

  async addProduct(): Promise<void> {
    if (this.productForm.valid) {
      this.newProduct = {
        id: null,
        name: this.productForm.value.name,
        quantity: this.productForm.value.quantity,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        category: this.productForm.value.category
      }
      console.log(this.newProduct)

      await insertProduct(this.newProduct);
      this.productForm.reset();
    }
    this.getProducts();
    
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

  captureCategory(category: string): void {
    if (category) this.productForm.get('category').setValue(category);
  }

}


