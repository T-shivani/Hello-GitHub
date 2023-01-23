import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  isChild = true;
  channelName: any;
  constructor() {
    console.log('Parent component');
  }

  ngOnInit(): void {
    console.log('parent ngoninit');
  }

  ngOnChanges() {
    console.log('parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('parent ngDoCheck');
  }

  hooks() {
    this.isChild = !this.isChild;

    console.log('child chicked');
  }
}
