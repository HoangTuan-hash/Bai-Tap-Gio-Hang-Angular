import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,OnChanges, DoCheck {
  @Input() listProdCart:any;
  listProdCartRender:any[];
  totalMoney:number;
  constructor() { }

  changeQuantily(prodCart:any,val:boolean) {
    let index = this.listProdCartRender.findIndex(prod => prod.id === prodCart.id);
    if(index != -1 ){
      if(val){
        this.listProdCartRender[index].quantity += 1; 
        this.listProdCartRender[index].tongTien = this.listProdCartRender[index].price *this.listProdCartRender[index].quantity;
      }else{
        if( this.listProdCartRender[index].quantity > 1){
          this.listProdCartRender[index].quantity -= 1; 
          this.listProdCartRender[index].tongTien = this.listProdCartRender[index].price *this.listProdCartRender[index].quantity;
        }
      }
    }
  }

  

  deleteProdCart(val:number){
    let index = this.listProdCartRender.findIndex(prod => val === prod.id);
    if (index != -1){
      this.listProdCartRender.splice(index,1);
    }
  }

  payCart(){
    this.listProdCartRender.splice(0);
  }
  ngOnInit(): void {
    if (localStorage.getItem('arrProdCart')) {
      //Lấy dữ liệu từ localstorage
      let  arrProdCart = localStorage.getItem('arrProdCart');
      //Chuyển chuỗi localstrorage về mảng (object) và gán cho mangSinhVien

     let storageListProdCart = JSON.parse(arrProdCart);
      // this.listProdCart = storageListProdCart;
       console.log(storageListProdCart);
      this.listProdCartRender = [...storageListProdCart];
      console.log(this.listProdCartRender);
  }
  }
  ngOnChanges(){
    console.log('chảnge');
  }
  ngDoCheck(){
    this.listProdCartRender = [...this.listProdCart];
    this.totalMoney = this.listProdCartRender.reduce((total,prod,index)=>{
      total += prod.tongTien;
      return total
    },0);

    let arrProdCart = JSON.stringify(this.listProdCart);
    localStorage.setItem("arrProdCart", arrProdCart);
  }
}
