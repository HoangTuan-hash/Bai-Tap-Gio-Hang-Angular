import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() listProduct:any[];
  @Output() productEmitter = new EventEmitter();

  constructor() { }
  sendProduct(val:any) {
    this.productEmitter.emit(val);
  }
  ngOnInit(): void {
  }

}
