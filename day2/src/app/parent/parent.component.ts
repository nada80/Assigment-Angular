import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childCmponent:ChildComponent;
  name:string="Hello from parent";
  childData="";
  constructor() { }

  ngOnInit(): void {
  }

}
