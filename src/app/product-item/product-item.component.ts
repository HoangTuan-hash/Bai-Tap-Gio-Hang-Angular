import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  @Input() product:any;
  @Output() productEmitted = new EventEmitter();
  ngOnInit(): void {
  }
  sendProduct(){
    this.productEmitted.emit(this.product);
  }
}
