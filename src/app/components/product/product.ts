import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProduct } from '../../service/service-product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  productDetails:any={}
  from:string='';
   constructor(
    private route: ActivatedRoute,
    private productService: ServiceProduct,
    private router: Router
  ) {}
 ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productDetails = this.productService.getProductById(id);
    this.from=this.route.snapshot.queryParams['from'];
  }
  goToList() {
  this.router.navigate(['/product-list']);
}
}
