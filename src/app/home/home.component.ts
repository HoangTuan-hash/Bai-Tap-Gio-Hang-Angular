import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  listProducts = [
    {
        id: 1,
        name: 'Oppo R1',
        image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
        description: 'Sản phẩm của china',
        price: 450,
        invetory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 9',
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg',
        description: 'Sản phẩm của Hàn Quốc',
        price: 200,
        invetory: 15,
        rating: 5
    }, {
        id: 3,
        name: 'Iphone XS',
        image: 'https://phuckhangmobile.com/file/iphone-x-trang-900-19447f.jpg',
        description: 'Sản phẩm của US',
        price: 600,
        invetory: 20,
        rating: 4
    }
];
  listProductSend:any = [];
  listProdCart:any[]=[];

  typeSort: string = "Từ A-Z";

  setTypeSort(e){
    this.typeSort = e.target.value;
    if(this.typeSort == "Từ A-Z"){
      let listSort = [...this.listProducts];
      listSort.sort((spSau,spTruocDo)=>{
        let tenSP = spSau.name.toLowerCase().trim();
        let tenSPTruocDo = spTruocDo.name.toLowerCase().trim();
        if( tenSP > tenSPTruocDo){
            return 1; //hoán vị
        }
        else {
            return -1;//Giữ nguyên
        }
    });
      this.listProductSend = listSort;
    }else
    if(this.typeSort == "Từ Z-A"){
      let listSort = [...this.listProducts];
      listSort.sort((spSau,spTruocDo)=>{
        let tenSP = spSau.name.toLowerCase().trim();
        let tenSPTruocDo = spTruocDo.name.toLowerCase().trim();
        if( tenSP > tenSPTruocDo){
            return -1; //hoán vị
        }
        else {
            return 1;//Giữ nguyên
        }
    });
      this.listProductSend = listSort;
    }

    if(this.typeSort == "Samsung"){
      this.listProductSend = [...this.listProducts];
      let listFilter = this.listProductSend.filter(prod => prod.name.includes(this.typeSort))
      this.listProductSend = listFilter;
    }else
    if(this.typeSort == "Iphone"){
      this.listProductSend = [...this.listProducts];
      let listFilter = this.listProductSend.filter(prod => prod.name.includes(this.typeSort))
      this.listProductSend = listFilter;
    } else
    if(this.typeSort == "Oppo"){
      this.listProductSend = [...this.listProducts];
      let listFilter = this.listProductSend.filter(prod => prod.name.includes(this.typeSort))
      this.listProductSend = listFilter;
    }
  }
  constructor() { }

  setListProdCart(product:any){
    let prodCartRender = {...product, quantity : 1, tongTien:product.price};
    let index = this.listProdCart.findIndex((prod) => prod.id === prodCartRender.id);
      if (index != -1){
        this.listProdCart[index].quantity +=1;
        this.listProdCart[index].tongTien = this.listProdCart[index].price *this.listProdCart[index].quantity;
      }else{
        this.listProdCart.push( prodCartRender);
      }
  }
  ngOnInit(): void {
    if(this.typeSort == "Từ A-Z"){
      let listSort = [...this.listProducts];
      listSort.sort((spSau,spTruocDo)=>{
        let tenSP = spSau.name.toLowerCase().trim();
        let tenSPTruocDo = spTruocDo.name.toLowerCase().trim();
        if( tenSP > tenSPTruocDo){
            return 1; //hoán vị
        }
        else {
            return -1;//Giữ nguyên
        }
    });
      this.listProductSend = listSort;
  }
}
  ngOnChanges(){
   
  }
}
