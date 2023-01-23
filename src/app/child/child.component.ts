import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input()
  channelName: any;
  constructor() {
    console.log('child component');
  }

  ngOnInit(): void {
    console.log('Child  ngoninit');
  }
  ngOnDestroy(): void {
    console.log('child ondestroy');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('child ngOnChanges');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
}
