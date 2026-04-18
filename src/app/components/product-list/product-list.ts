import { Component, OnInit } from '@angular/core';
import { ServiceProduct } from '../../service/service-product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products:any=[]
  filterOption: string = 'all';  // 'all', 'available', 'unavailable'
  constructor(private __ServiceProduct :ServiceProduct, private router: Router){
  }
  ngOnInit(): void {
    this.products= this.__ServiceProduct.getAllProducts();
  }

  trackByProductId(index: number, product: any) {
  return product.id;
}
goToDetails(productId: number) {
  this.router.navigate(['/product', productId ],  {queryParams: { from: 'list' }} );
}
get filteredProducts() {
  if (this.filterOption === 'available') {
    return this.products.filter((p: { available: boolean; }) => p.available === true);
  }
  if (this.filterOption === 'unavailable') {
    return this.products.filter((p: { available: boolean; }) => p.available === false);
  }
  return this.products; // 'all'
}

}
