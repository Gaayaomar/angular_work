import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv | null = null;
  @Output() selectedCv= new  EventEmitter();
  constructor() { }



  ngOnInit(): void {
  }
  selectCv(){
    this.selectedCv.emit(this.cv);
  }

}
