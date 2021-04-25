import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() childData= new EventEmitter();
  @Input() parentData:any;
  constructor() { }
  

  ngOnInit(): void {
  }

  fireData(){
    this.childData.emit("hello from child");
  }

}
