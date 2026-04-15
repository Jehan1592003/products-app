import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceProduct {
  product=[
    {id:1,name:'laptop',price:2000,available:true,imageUrl:'https://picsum.photos/200/300/?blur=2'},
    {id:2,name:'iphone',price:6000,available:false,imageUrl:'https://picsum.photos/200/300/?blur=2'},
    {id:3,name:'plackberu',price:1500,available:true,imageUrl:'https://picsum.photos/200/300/?blur=2'},
    {id:4,name:'tablet',price:4000,available:false,imageUrl:'https://picsum.photos/200/300/?blur=2'},
  ];

  getAllProducts(){
    return this.product;
  }

  getProductById(id:number){
    return this.product.find(product=> product.id==id)

  }

}
